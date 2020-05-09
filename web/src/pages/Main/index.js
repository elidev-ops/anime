import React, { useState, useEffect } from 'react';
import { Form } from '@unform/web';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { DebounceInput } from 'react-debounce-input';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import 'react-lazy-load-image-component/src/effects/blur.css';

import Loading from '../../components/Load';
import api from '../../services/api';
import { Container, Search, Content } from './styles';

function Main() {
  // const [anime_conf, setAnime_conf] = useState({});
  const [name, setName] = useState('');
  const [animes, setAnimes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    localStorage.clear();
    if (!name) return;
    setLoading(true);
    api.get(`/animes?name=${name}`).then((response) => {
      setAnimes(response.data.value);
      setLoading(false);
    });
  }, [name]);

  return (
    <Container>
      <h1>Que anime está procurando?</h1>
      <Search>
        <Form>
          <DebounceInput
            debounceTimeout={500}
            onChange={(e) => setName(e.target.value)}
            placeholder="Digite o nome do anime..."
          />
          <button type="submit">
            <FaSearch size={16} />
          </button>
        </Form>
      </Search>
      <Content>
        {loading ? (
          <Loading />
        ) : (
          animes.map((anime) => (
            <li key={anime.Id}>
              <Link
                to={{
                  pathname: `/episodios/${anime.Id}`,
                  anime,
                }}
              >
                <span>{anime.Nome}</span>
                <LazyLoadImage
                  effect="blur"
                  src={anime.Imagem}
                  alt={anime.Nome}
                />
              </Link>
            </li>
          ))
        )}
      </Content>
    </Container>
  );
}

export default Main;
