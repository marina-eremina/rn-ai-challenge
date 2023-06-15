import { memo } from 'react';
import { FlatList } from 'react-native';

import { USERS } from '../../../../mocks';

import { LeadersListItem } from './leaders-list-item';
import { styles } from './leaders-list.styles';

export const LeadersList = memo(() => {
  return (
    <FlatList
      contentContainerStyle={styles.listContainer}
      data={USERS.region.others}
      renderItem={LeadersListItem}
    />
  );
});
