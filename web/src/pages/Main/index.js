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
  const [anime, setAnime] = useState('');
  const [animes, setAnimes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!anime) return;
    setLoading(true);
    api.get(`/animes?name=${anime}`).then((response) => {
      setAnimes(response.data.value);
      setLoading(false);
    });
  }, [anime]);

  return (
    <Container>
      <h1>O que está procurando?</h1>
      <Search>
        <Form>
          <DebounceInput
            debounceTimeout={500}
            onChange={(e) => setAnime(e.target.value)}
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
              <Link to={`/episodios/${anime.Id}`}>
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
