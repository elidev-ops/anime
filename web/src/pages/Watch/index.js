import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useHistory } from 'react-router-dom';
import Plyr from 'plyr';

import Loading from '../../components/Load';
import { Container, Header, Content } from './styles';
import api from '../../services/api';

function Watch(props) {
  const { title } = props.location;
  const { id } = props.match.params;

  if (!localStorage.getItem('title')) localStorage.setItem('title', title);
  const anime_title = localStorage.getItem('title');

  const history = useHistory();

  const [video, setVideo] = useState('');
  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    api.get(`links?id=${id}`).then((response) => {
      setLinks(response.data);
      setLoading(false);
    });
  }, [id]);

  function watchHandler(url) {
    setVideo(url);
  }

  const player = new Plyr('#player');

  return loading ? (
    <Loading />
  ) : (
    <Container>
      <Header>
        <button type="button" onClick={() => history.goBack()}>
          <FaArrowLeft size={24} color="#cc0034" />
        </button>
        <h2>{anime_title}</h2>
      </Header>
      <Content>
        <div id="video">{video ? <video src={video} controls /> : ''}</div>
        <div>
          {links.map((link) => (
            <button
              type="button"
              key={link.Id}
              onClick={() => watchHandler(link.Endereco)}
            >
              {link.Nome}
            </button>
          ))}
        </div>
      </Content>
    </Container>
  );
}

export default Watch;
