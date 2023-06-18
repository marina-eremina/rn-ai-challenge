import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  filterText: {
    marginRight: 8,
    fontSize: 16,
  },
  filterButton: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    backgroundColor: 'lightgray',
    borderRadius: 8,
    marginRight: 8,
  },
  selectedFilterButton: {
    backgroundColor: '#ccc',
  },
  filterButtonText: {
    fontSize: 16,
  },
  unselectedFilterButton: {
    backgroundColor: '#eee',
  },
});
