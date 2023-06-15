import { Image, Text, View } from 'react-native';

import { CrownIcon } from '../../../../assets';
import { USERS } from '../../../../mocks';

import { styles } from './top-three.styles';

const TopThree = () => {
  const [FIRST, SECOND, THIRD] = USERS.region.top.sort(
    (a, b) => b.points - a.points,
  );

  return (
    <View style={styles.container}>
      <View>
        <Image
          source={{
            uri: 'https://xsgames.co/randomusers/avatar.php?g=female',
          }}
          style={[styles.sideAvatar, styles.blueAvatar]}
        />
        <View
          style={[styles.innerContainer, styles.leftInnerContainer]}>
          <Text style={styles.name}>{SECOND.name}</Text>
          <Text style={[styles.points, styles.bluePoints]}>
            {SECOND.points}
          </Text>
          <Text style={styles.username}>{SECOND.username}</Text>
        </View>
      </View>
      <View>
        <View style={styles.middleAvatarContainer}>
          <Image source={CrownIcon} style={styles.crown} />
          <Image
            source={{
              uri: 'https://xsgames.co/randomusers/avatar.php?g=female',
            }}
            style={[styles.middleAvatar, styles.goldAvatar]}
          />
        </View>
        <View
          style={[
            styles.innerContainer,
            styles.middleInnerContainer,
          ]}>
          <Text style={styles.name}>{FIRST.name}</Text>
          <Text style={[styles.points, styles.goldPoints]}>
            {FIRST.points}
          </Text>
          <Text style={styles.username}>{FIRST.username}</Text>
        </View>
      </View>
      <View>
        <Image
          source={{
            uri: 'https://xsgames.co/randomusers/avatar.php?g=female',
          }}
          style={[styles.sideAvatar, styles.greenAvatar]}
        />
        <View
          style={[styles.innerContainer, styles.rightInnerContainer]}>
          <Text style={styles.name}>{THIRD.name}</Text>
          <Text style={[styles.points, styles.greenPoints]}>
            {THIRD.points}
          </Text>
          <Text style={styles.username}>{THIRD.username}</Text>
        </View>
      </View>
    </View>
  );
};
export default TopThree;
