import { Image, ScrollView, Text, View } from 'react-native';

import { RootNavigationParams } from '../../navigation';
import { useMovieDetails } from '../../services';

import { styles } from './movie-details.styles';

interface MovieDetailsScreenProps {
  route: {
    params: RootNavigationParams['MOVIE_DETAILS'];
  };
}

export const MovieDetailsScreen = (
  props: MovieDetailsScreenProps,
) => {
  const { id } = props.route.params;
  const { movieDetails } = useMovieDetails(id);

  if (!movieDetails) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  const { image, meta, name, price, rating, synopsis } = movieDetails;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.meta}>{meta}</Text>
      <Text style={styles.price}>Price: {price}</Text>
      <Text style={styles.rating}>Rating: {rating}</Text>
      <Text style={styles.synopsis}>{synopsis}</Text>
    </ScrollView>
  );
};
