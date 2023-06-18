import { Pressable, Text, View } from 'react-native';

import { styles } from './filters.styles';

interface FilterButtonsProps {
  selectedPriceRange: { min: number; max: number } | null;
  handleFilterByPrice: (min: number, max: number) => void;
}

const priceRanges = [
  { min: 0, max: 50 },
  { min: 50, max: 200 },
  { min: 200, max: 500 },
  { min: 500, max: 1000 },
];

export const FilterButtons: React.FC<FilterButtonsProps> = ({
  selectedPriceRange,
  handleFilterByPrice,
}) => {
  return (
    <View style={styles.filterContainer}>
      <Text style={styles.filterText}>Price:</Text>
      {priceRanges.map((range, index) => (
        <Pressable
          key={`${range.max}_${index}`}
          style={[
            styles.filterButton,
            selectedPriceRange?.min === range.min &&
            selectedPriceRange?.max === range.max
              ? styles.selectedFilterButton
              : styles.unselectedFilterButton,
          ]}
          onPress={() => handleFilterByPrice(range.min, range.max)}>
          <Text
            style={
              styles.filterButtonText
            }>{`${range.min}-${range.max}`}</Text>
        </Pressable>
      ))}
    </View>
  );
};
