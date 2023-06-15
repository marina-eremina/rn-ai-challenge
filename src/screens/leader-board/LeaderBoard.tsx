import { memo } from 'react';
import { View } from 'react-native';

import { LeadersList } from './components';
import TopThree from './components/top-three/TopThree';
import { styles } from './leader-board.styles';

export const LeaderBoard = memo(() => {
  return (
    <View style={styles.container}>
      <TopThree />
      <LeadersList />
    </View>
  );
});
