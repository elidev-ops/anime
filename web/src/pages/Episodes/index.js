import React, { useEffect, useState } from 'react';
import { FaArrowLeft, FaDownload, FaPlay } from 'react-icons/fa';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';

import { Container, Header, Content } from './styles';
import api from '../../services/api';
import Loading from '../../components/Load';

function Episodes(props) {
  const { id } = props.match.params;

  const [animeContent, setAnimeContent] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const response = await api.get(`/anime/${id}`);
      setAnimeContent(response.data);
      setLoading(false);
    }
    fetchData();
  }, [id]);
  if (loading) return <Loading />;
  return (
    <Container>
      <Header>
        <Link to="/">
          <FaArrowLeft size={24} color="#cc0034" />
        </Link>
        <h2>Episodios</h2>
      </Header>
      <Content>
        <div>
          <h1>{animeContent.Sinopse.Nome}</h1>
          <div>
            <LazyLoadImage effect="blur" src={animeContent.Imagem} alt="" />
            <div>
              <strong>Genero: {animeContent.Sinopse.Generos}</strong>
              <p>Descrição: {animeContent.Sinopse.Descricao}</p>
            </div>
          </div>
        </div>
        <ul>
          {animeContent.Episodios.map((episodio) => (
            <li key={episodio.CodEpisodio}>
              <h3>
                {episodio.Tipo} {episodio.Episodio}
              </h3>
              <Link
                to={{
                  pathname: `/assistir/${episodio.CodEpisodio}`,
                  title: `${animeContent.Sinopse.Nome} ${episodio.Tipo} ${episodio.Episodio}`,
                }}
              >
                <FaPlay size={16} />
              </Link>
              <Link to={`/assistir/${episodio.CodEpisodio}`}>
                <FaDownload size={16} />
              </Link>
            </li>
          ))}
        </ul>
      </Content>
    </Container>
  );
}

export default Episodes;
