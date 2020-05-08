import React, { useEffect, useState } from 'react';
import { FaArrowLeft, FaVideo, FaDownload } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { Container, Header, Content } from './styles';
import api from '../../services/api';
import Loading from '../../components/Load';

function Episodes(props) {
  const data = props.location.anime_conf;
  const { id } = props.match.params;
  if (localStorage.getItem('title')) localStorage.removeItem('title');
  if (!localStorage.getItem('anime'))
    localStorage.setItem('anime', JSON.stringify(data));

  const dados = JSON.parse(localStorage.getItem('anime'));

  const [anime, setAnime] = useState({});
  const [episodios, setEpisodios] = useState([]);
  const [loading, setLoading] = useState(false);

  function ordenarPorId(a, b) {
    return a.Id - b.Id;
  }

  useEffect(() => {
    setAnime(dados);
    setLoading(true);
    api.get(`/episodios/${id}`).then((response) => {
      response.data.sort(ordenarPorId);
      setEpisodios(response.data);
      setLoading(false);
    });
  }, [id]);
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
          <h1>{anime.title}</h1>
          <img src={anime.avatar} alt="" />
        </div>
        <ul>
          {loading ? (
            <Loading />
          ) : (
            episodios.map((episodio) => (
              <li key={episodio.Id}>
                <h3>{episodio.Nome}</h3>
                <Link
                  to={{
                    pathname: `/assistir/${episodio.Id}`,
                    title: episodio.Nome,
                  }}
                >
                  <FaVideo size={16} />
                  Assistir
                </Link>
                <Link to={`/assistir/${episodio.Id}`}>
                  <FaDownload size={16} />
                  Download
                </Link>
              </li>
            ))
          )}
        </ul>
      </Content>
    </Container>
  );
}

export default Episodes;
