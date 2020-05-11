import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {
  SafeAreaView,
  FlatList,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

import api from '../../services/api';

import {
  Container,
  Search,
  Input,
  TitleButton,
  Title,
  Button,
  AnimeContent,
  AnimeTitle,
  AnimeImage,
  SubTitleContext,
  AnimeInfo,
  ButtonToDetail,
  TextToDetail,
} from './styles';

const Home = () => {
  const [name, setName] = useState('');
  const [data, setData] = useState([]);

  const navigation = useNavigation();

  function navigateToAnime(anime) {
    navigation.navigate('Anime', { anime });
  }
  function textHandler(text) {
    setName(text);
  }

  useEffect(() => {
    api
      .get(`/animes?name=${name}`)
      .then((response) => setData(response.data.value));
  }, [name]);

  return (
    <Container>
      <Title>Qual Anime está procurando?</Title>
      <Search>
        <Input onChangeText={(text) => textHandler(text)} />
        <Button>
          <TitleButton>
            <Feather name="search" size={24} color="#fff" />
          </TitleButton>
        </Button>
      </Search>
      <FlatList
        style={{ marginTop: 10, width: 440 }}
        data={data}
        showsVerticalScrollIndicator
        keyExtractor={(item) => String(item.Id)}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigateToAnime(item)}>
            <AnimeContent>
              <AnimeImage
                source={{
                  uri: item.Imagem,
                }}
              />
              <AnimeInfo>
                <AnimeTitle numberOfLines={1}>{item.Nome}</AnimeTitle>
                <SubTitleContext>Ano: {item.Ano}</SubTitleContext>
                <SubTitleContext>Categoria: {item.Categoria}</SubTitleContext>
                <ButtonToDetail>
                  <TextToDetail>Ver episodios</TextToDetail>
                  <Feather name="arrow-right" size={18} color="#e02042" />
                </ButtonToDetail>
              </AnimeInfo>
            </AnimeContent>
          </TouchableOpacity>
        )}
      />
    </Container>
  );
};

export default Home;
