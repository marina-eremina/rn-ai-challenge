import { Image, Text, View } from 'react-native';

import { ArrowDownIcon, ArrowUpIcon } from '../../../../../assets';
import { UserType } from '../../../../../types';

import { styles } from './leaders-list-item.styles';

export const LeadersListItem = ({ item }: { item: UserType }) => {
  return (
    <View style={styles.userContainer}>
      <Image
        source={{
          uri: 'https://xsgames.co/randomusers/avatar.php?g=female',
        }}
        style={styles.avatar}
      />

      <View style={styles.infoContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.username}>{item.username}</Text>
      </View>

      <View style={styles.pointsContainer}>
        <Text style={styles.points}>{item.points}</Text>
        <Image
          style={styles.arrow}
          source={item.status === 'up' ? ArrowUpIcon : ArrowDownIcon}
        />
      </View>
    </View>
  );
};
