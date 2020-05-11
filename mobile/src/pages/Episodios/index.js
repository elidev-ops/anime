import React, { useState, useEffect } from 'react';
import { View, FlatList, Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import api from '../../services/api';

import {
  Container,
  Header,
  LinkToBack,
  Title,
  Content,
  BtnEpisodio,
  TitleEpisodio,
  LinkEpisodio,
  TextLink,
} from './styles';

const Episodios = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { animeEpisodios } = route.params;
  const [episodio, setEpisodio] = useState([]);
  const [status, setStatus] = useState(['', false]);

  function sendToBackScreen() {
    navigation.goBack();
  }

  async function getEpsodioWatch(item) {
    const ep = await api.get(`/links?id=${item}`);
    setEpisodio(ep.data.Fontes);
  }

  function sendStatus(id) {
    setStatus(id);
    getEpsodioWatch(id[0]);
  }

  return (
    <Container>
      <Header>
        <LinkToBack onPress={sendToBackScreen}>
          <Feather name="arrow-left" size={24} color="#cc0034" />
        </LinkToBack>
        <Title>{animeEpisodios.Sinopse.Nome}</Title>
      </Header>
      <Title style={{ marginLeft: 20, marginTop: 30 }}>Episodios</Title>
      <FlatList
        style={{ marginTop: 10, paddingHorizontal: 20 }}
        data={animeEpisodios.Episodios}
        showsVerticalScrollIndicator
        keyExtractor={(item) => String(item.CodEpisodio)}
        renderItem={({ item }) => (
          <>
            <BtnEpisodio
              key={item.CodEpisodio}
              onPress={() => sendStatus([item.CodEpisodio, true])}
            >
              <TitleEpisodio>
                {animeEpisodios.Sinopse.Nome} {item.Tipo} {item.Episodio}
              </TitleEpisodio>
              <Feather name="play-circle" size={28} color="#cc0034" />
            </BtnEpisodio>
            {status[0] === item.CodEpisodio ? (
              <Content>
                {episodio.map((i) => (
                  <LinkEpisodio key={episodio[0]}>
                    <TextLink>LINK {episodio.indexOf(i) + 1}</TextLink>
                  </LinkEpisodio>
                ))}
              </Content>
            ) : null}
          </>
        )}
      />
    </Container>
  );
};

export default Episodios;
