import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import api from '../../services/api';
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

  const navigation = useNavigation();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function handlerAnime() {
    setLoading(true);
    const response = await api.get(`/anime/${anime.CodAniMan}`);
    setData(response.data);
    setLoading(false);
  }
  useEffect(() => {
    handlerAnime();
  }, []);

  function navigateToEpisodios(animeEpisodios) {
    navigation.navigate('Episodios', { animeEpisodios });
  }
  return (
    <Container>
      {loading ? (
        <View />
      ) : (
        <>
          <ImageAnime
            source={{
              uri: data.Imagem,
            }}
          />
          <InfoAnime>
            <Title>{data.Sinopse.Nome}</Title>
            <Title
              style={{
                fontSize: 14,
                color: 'rgba(255, 255, 255, 0.3)',
                marginBottom: 10,
                fontWeight: 'normal',
              }}
            >
              Categoria: {data.Sinopse.Generos}
            </Title>
            <Description>{data.Sinopse.Descricao}</Description>
          </InfoAnime>
          <Button onPress={() => navigateToEpisodios(data)}>
            <TextButton>Episodios</TextButton>
          </Button>
        </>
      )}
    </Container>
  );
};

export default Anime;
