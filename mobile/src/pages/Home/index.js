import React, { useState, useEffect, createRef } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import DelayInput from 'react-native-debounce-input';
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
    api.get(`/animes?name=${name}`).then((response) => setData(response.data));
  }, [name]);

  const inputRef = createRef();
  return (
    <Container>
      <Title>Qual Anime está procurando?</Title>
      <Search>
        <DelayInput
          value={name}
          inputRef={inputRef}
          onChangeText={setName}
          delayTimeout={700}
          style={{
            backgroundColor: '#fff',
            borderRadius: 4,
            padding: 10,
            width: 100,
            maxWidth: 270,
            flex: 1,
          }}
        />
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
        keyExtractor={(item) => String(item.CodAniMan)}
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
                <ButtonToDetail>
                  <Feather name="play" size={18} color="#19181f" />
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
