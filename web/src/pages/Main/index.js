import React, { useState, useEffect } from 'react';
import { Form } from '@unform/web';
import { FaSearch, FaStar, FaPlay, FaTrash } from 'react-icons/fa';
import { FiStar } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { DebounceInput } from 'react-debounce-input';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import 'react-lazy-load-image-component/src/effects/blur.css';

import Loading from '../../components/Load';
import api from '../../services/api';
import { Container, Search, Content, Favorites, AnimeFavorite } from './styles';

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
      setAnimes(response.data);
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

  function favoriteHandler({ CodAniMan, Nome, Imagem }) {
    const filterId = favorites.filter(
      (favorite) => favorite.CodAniMan === CodAniMan
    );
    if (filterId.length > 0)
      setFavorites(
        favorites.filter((favorite) => favorite.CodAniMan !== CodAniMan)
      );
    else setFavorites([...favorites, { CodAniMan, Nome, Imagem }]);
  }

  function deleteFavoriteHandler(id) {
    setFavorites(favorites.filter((favorite) => favorite.CodAniMan !== id));
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
        {favorites.length !== 0 ? <h3>{'\u2B50'} Favoritados</h3> : ''}
        <div>
          {favorites.map((anime) => (
            <AnimeFavorite key={anime.CodAniMan} url={anime.Imagem}>
              <strong>{anime.Nome}</strong>
              <Link
                key={anime.CodAniMan}
                to={{ pathname: `/episodios/${anime.CodAniMan}`, anime }}
              >
                <FaPlay size={16} color="#fff" />
              </Link>
              <div onClick={() => deleteFavoriteHandler(anime.CodAniMan)}>
                <FaTrash size={16} />
              </div>
            </AnimeFavorite>
          ))}
        </div>
      </Favorites>
      <Content>
        {loading ? (
          <Loading />
        ) : (
          animes.map((anime) => (
            <li key={anime.CodAniMan}>
              <button type="button" onClick={() => favoriteHandler(anime)}>
                {favorites.filter(
                  (favorite) => favorite.CodAniMan === anime.CodAniMan
                ).length ? (
                  <FaStar size={16} color="#F19519" />
                ) : (
                  <FiStar size={16} />
                )}
              </button>
              <Link
                to={{
                  pathname: `/episodios/${anime.CodAniMan}`,
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
