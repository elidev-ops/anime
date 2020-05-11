import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import {
  Container,
  ImageAnime,
  Title,
  Description,
  Button,
  InfoAnime,
  TextButton,
} from './styles';

const Anime = () => {
  const route = useRoute();
  const { anime } = route.params;
  return (
    <Container>
      <ImageAnime
        source={{
          uri: anime.Imagem,
        }}
      />
      <InfoAnime>
        <Title>{anime.Nome}</Title>
        <Description>{anime.Desc}</Description>
      </InfoAnime>
      <Button>
        <TextButton>Episodios</TextButton>
      </Button>
    </Container>
  );
};

export default Anime;
