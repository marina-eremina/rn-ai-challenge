import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 26,
    alignItems: 'flex-end',
    justifyContent: 'center',
    width: '100%'
  },
  sideAvatar: {
    width: 68,
    height: 68,
    resizeMode: 'contain',
    borderRadius: 100,
    top: 10,
    zIndex: 999,
    left: 33
  },
  innerContainer: {
    paddingHorizontal: 28,
    paddingBottom: 23,
    paddingTop: 29, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftInnerContainer: {
    backgroundColor: '#DFDFDF',
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
  rightInnerContainer: {
    backgroundColor: '#DFDFDF',
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12, 
  },
  middleInnerContainer: {
    backgroundColor: '#D4D4D6',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: 159
  },
  middleAvatar: {
    width: 82,
    height: 82,
    resizeMode: 'contain',
    borderRadius: 100,
    top: 20,
    zIndex: 999,
    left: 20
  },
  name: {
    color: '#000',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 17,
    paddingBottom: 4
  },
  username: {
    fontSize: 12,
    lineHeight: 15
  },
  pointsContainer: {
    alignItems: 'center'
  },
  points: {
    fontSize: 14,
    lineHeight: 17,
    fontWeight: '700',
    marginBottom: 5,
  },
  greenPoints: {
    color: '#00D95F'
  },
  bluePoints: {
    color: '#009BD6'
  },
  goldPoints: {
    color: '#FB9639'
  },
  blueAvatar: {
    borderWidth: 3,
    borderColor: '#009BD6',
  },
  greenAvatar: {
    borderColor: '#00D95F',
    borderWidth: 3,
  },
  goldAvatar: {
    borderColor: '#FB9639',
    borderWidth: 3,
  },
  middleAvatarContainer: {
    zIndex: 999,
  },
  crown: {
    top: 24,
    left: 40
  }
})