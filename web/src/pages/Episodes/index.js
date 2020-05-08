import React, { useEffect, useState } from 'react';
import { FaArrowLeft, FaVideo, FaDownload } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { Container, Header, Content } from './styles';
import api from '../../services/api';

function Episodes(props) {
  const { id } = props.match.params;
  const [episodios, setEpisodios] = useState([]);

  function ordenarPorId(a, b) {
    return a.Id - b.Id;
  }

  useEffect(() => {
    api.get(`/episodios/${id}`).then((response) => {
      response.data.sort(ordenarPorId);
      setEpisodios(response.data);
    });
  }, [id]);
  return (
    <Container>
      <Header>
        <Link to="/">
          <FaArrowLeft size={24} color="#cc0034" />
        </Link>
      </Header>
      <Content>
        <div>
          <h1>Shingeki no Kyojin 1 Temporada</h1>
          <img
            src="http://png.zetai.info/shingeki-no-kyojin-poster.jpg"
            alt=""
          />
        </div>
        <ul>
          {episodios.map((episodio) => (
            <li key={episodio.Id}>
              <h3>{episodio.Nome}</h3>
              <Link to={`/assistir/${episodio.Id}`}>
                <FaVideo size={16} />
                Assistir
              </Link>
              <Link to={`/assistir/${episodio.Id}`}>
                <FaDownload size={16} />
                Download
              </Link>
            </li>
          ))}
        </ul>
      </Content>
    </Container>
  );
}

export default Episodes;
