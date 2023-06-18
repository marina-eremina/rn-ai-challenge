import { useCallback } from 'react';

import { useNavigation } from '@react-navigation/native';
import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';

import { MovieDetailsScreen, MoviesScreen } from '../screens';

export enum RootNavigationList {
  MOVIES = 'MOVIES',
  MOVIE_DETAILS = 'MOVIE_DETAILS',
}

export type RootNavigationParams = {
  [RootNavigationList.MOVIES]: undefined;
  [RootNavigationList.MOVIE_DETAILS]: {
    id: string;
  };
};

const RootStack = createStackNavigator<RootNavigationParams>();

export type NavigationStackParams = StackNavigationProp<
  RootNavigationParams,
  RootNavigationList.MOVIES
>;

export const RootNavigator = () => {
  const navigation = useNavigation<NavigationStackParams>();

  const navigateToMovieDetails = useCallback(
    (id: string) =>
      navigation.navigate(RootNavigationList.MOVIE_DETAILS, { id }),
    [navigation],
  );

  const MoviesScreenComponent = useCallback(
    () => <MoviesScreen navigateToProfile={navigateToMovieDetails} />,
    [navigateToMovieDetails],
  );

  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name={RootNavigationList.MOVIES}
        component={MoviesScreenComponent}
      />
      <RootStack.Screen
        name={RootNavigationList.MOVIE_DETAILS}
        component={MovieDetailsScreen}
      />
    </RootStack.Navigator>
  );
};
