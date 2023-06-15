import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  userContainer: {
    width: '100%',
    flexDirection: 'row',
    marginBottom: 14,
    borderBottomWidth: 1,
    borderColor: '#5F5959',
    justifyContent: 'space-between',
    paddingBottom: 14,
  },
  avatar: {
    resizeMode: 'contain',
    width: 50,
    aspectRatio: 1,
    borderRadius: 100,
    marginRight: 21,
  },
  infoContainer: {
   flex:1
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
  arrow: {
    width: 12
  }
})