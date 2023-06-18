import { useCallback, useMemo, useState } from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';

import { observer } from 'mobx-react';

import { FilterButtons } from '../../components';
import { useMovies } from '../../services';

import { styles } from './movies-screen.styles';

interface MoviesScreenProps {
  navigateToProfile(id: string): void;
}

export const MoviesScreen = observer((props: MoviesScreenProps) => {
  const { navigateToProfile } = props;
  const { movies } = useMovies();
  const [sorting, setSorting] = useState<'asc' | 'desc'>('asc');
  const [selectedPriceRange, setSelectedPriceRange] = useState<{
    min: number;
    max: number;
  } | null>(null);

  const handleSort = () => {
    setSorting(sorting === 'asc' ? 'desc' : 'asc');
  };

  const handleFilterByPrice = useCallback(
    (min: number, max: number) => {
      if (
        selectedPriceRange &&
        selectedPriceRange.min === min &&
        selectedPriceRange.max === max
      ) {
        setSelectedPriceRange(null);
      } else {
        setSelectedPriceRange({ min, max });
      }
    },
    [selectedPriceRange],
  );

  const sortedMovies = useMemo(
    () =>
      [...movies].sort((a, b) => {
        if (sorting === 'asc') {
          return a.name.localeCompare(b.name);
        } else {
          return b.name.localeCompare(a.name);
        }
      }),
    [movies, sorting],
  );

  const filteredMovies = useMemo(
    () =>
      selectedPriceRange
        ? sortedMovies.filter(
            movie =>
              movie.price >= selectedPriceRange.min &&
              movie.price <= selectedPriceRange.max,
          )
        : sortedMovies,
    [selectedPriceRange, sortedMovies],
  );

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <Text style={styles.subtitle}>Sort:</Text>
        <Pressable style={styles.sortButton} onPress={handleSort}>
          <Text style={styles.sortButtonText}>
            {sorting === 'asc' ? 'Ascending' : 'Descending'}
          </Text>
        </Pressable>
      </View>
      <FilterButtons
        selectedPriceRange={selectedPriceRange}
        handleFilterByPrice={handleFilterByPrice}
      />
      <FlatList
        data={filteredMovies}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Pressable onPress={() => navigateToProfile(item.id)}>
            <Text style={styles.movieTitle}>{item.name}</Text>
          </Pressable>
        )}
      />
    </View>
  );
});
