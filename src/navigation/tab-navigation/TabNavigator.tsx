import { useMemo } from 'react';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useNavigationState } from '@react-navigation/native';

import { LeaderBoard } from '../../screens';

import { styles } from './tab-navigator.styles';
import {
  TabNavigationList,
  TabNavigationParams,
} from './tab-navigator.types';

const Tab = createMaterialTopTabNavigator<TabNavigationParams>();

export const TabNavigator = () => {
  const insets = useSafeAreaInsets();
  const state = useNavigationState(state => state);

  const currentTabName = useMemo(
    () =>
      state?.routes.find((_, index) => state.index === index)?.name ||
      TabNavigationList.GLOBAL,
    [],
  );

  return (
    <View style={{ paddingTop: insets.top, flex: 1 }}>
      <Text style={styles.header}>{currentTabName}</Text>
      <Tab.Navigator
        sceneContainerStyle={styles.scene}
        initialRouteName={TabNavigationList.GLOBAL}
        screenOptions={{
          tabBarLabelStyle: styles.tabLabel,
          tabBarStyle: styles.tabsContainer,
          tabBarIndicatorStyle: styles.indicator,
          tabBarIndicatorContainerStyle: styles.indicatorContainer,
        }}>
        <Tab.Screen
          name={TabNavigationList.GLOBAL}
          component={LeaderBoard}
        />
        <Tab.Screen
          name={TabNavigationList.NATIONAL}
          component={LeaderBoard}
        />
        <Tab.Screen
          name={TabNavigationList.REGION}
          component={LeaderBoard}
        />
      </Tab.Navigator>
    </View>
  );
};
