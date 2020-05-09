import React, { useState, useEffect } from 'react';
import { Form } from '@unform/web';
import { FaSearch, FaStar, FaPlay } from 'react-icons/fa';
import { FiStar } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { DebounceInput } from 'react-debounce-input';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import 'react-lazy-load-image-component/src/effects/blur.css';

import Loading from '../../components/Load';
import api from '../../services/api';
import { Container, Search, Content, Favorites } from './styles';

function Main() {
  const favoriteOject = JSON.parse(localStorage.getItem('favorites'));

  const [name, setName] = useState('');
  const [animes, setAnimes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    if (favoriteOject) setFavorites(favoriteOject);
    localStorage.removeItem('anime');
    if (!name) return;
    setLoading(true);

    api.get(`/animes?name=${name}`).then((response) => {
      setAnimes(response.data.value);
      setLoading(false);
    });
  }, [name]);

  useEffect(() => {
    const fav = JSON.parse(localStorage.getItem('favorites'));
    if (fav !== null) {
      setFavorites(fav);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  function favoriteHandler({ Id, Nome, Imagem, Desc }) {
    const filterId = favorites.filter((favorite) => favorite.Id === Id);
    if (filterId.length > 0)
      setFavorites(favorites.filter((favorite) => favorite.Id !== Id));
    else setFavorites([...favorites, { Id, Nome, Imagem, Desc }]);
  }

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
      <Favorites>
        {favorites != '' ? <h3>{'\u2B50'} Favoritados</h3> : ''}
        <div>
          {favorites.map((anime) => (
            <Link
              key={anime.Id}
              to={{ pathname: `/episodios/${anime.Id}`, anime }}
            >
              <img src={anime.Imagem} alt={anime.Nome} />
              <strong>{anime.Nome}</strong>
              <span>
                <FaPlay size={16} color="#fff" />
              </span>
            </Link>
          ))}
        </div>
      </Favorites>
      <Content>
        {loading ? (
          <Loading />
        ) : (
          animes.map((anime) => (
            <li key={anime.Id}>
              <button type="button" onClick={() => favoriteHandler(anime)}>
                {favorites.filter((favorite) => favorite.Id === anime.Id)
                  .length ? (
                  <FaStar size={16} color="#F19519" />
                ) : (
                  <FiStar size={16} />
                )}
              </button>
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
