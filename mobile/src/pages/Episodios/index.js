import React, { useState, useEffect } from 'react';
import { FlatList, ActivityIndicator, Linking } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import * as IntentLauncher from 'expo-intent-launcher';

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
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(['', false]);

  function sendToBackScreen() {
    navigation.goBack();
  }

  async function getEpsodioWatch(item) {
    setLoading(true);
    const ep = await api.get(`/links?id=${item}`);
    setEpisodio(ep.data.Fontes);
    setLoading(false);
  }

  function sendStatus(id) {
    setStatus(id);
    getEpsodioWatch(id[0]);
  }
  function toWatchEpisode(url) {}
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
                {loading ? (
                  <ActivityIndicator
                    style={{ flex: 1 }}
                    size="small"
                    color="#cc0034"
                  />
                ) : (
                  episodio.map((i) => (
                    <LinkEpisodio
                      onPress={() => toWatchEpisode(i[0])}
                      key={episodio.indexOf(i)}
                    >
                      <TextLink>LINK {episodio.indexOf(i) + 1}</TextLink>
                    </LinkEpisodio>
                  ))
                )}
              </Content>
            ) : null}
          </>
        )}
      />
    </Container>
  );
};

export default Episodios;
