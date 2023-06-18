import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    marginRight: 8,
    fontSize: 16,
  },
  movieTitle: {
    fontSize: 16,
    marginBottom: 4,
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  sortButton: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    backgroundColor: 'grey',
    borderRadius: 8,
    marginLeft: 8,
  },
  sortButtonText: {
    fontSize: 16,
    color: 'white',
  },
});
