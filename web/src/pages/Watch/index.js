import React, { useEffect, useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';

import Loading from '../../components/Load';
import { Container, Header, Content } from './styles';
import api from '../../services/api';

function Watch(props) {
  const { title } = props.location;
  const { id } = props.match.params;

  const history = useHistory();

  const [video, setVideo] = useState('');
  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    api.get(`links?id=${id}`).then((response) => {
      setLinks(response.data.Fontes);
      setLoading(false);
    });
  }, [id]);

  function watchHandler(url) {
    setVideo(url);
  }

  return loading ? (
    <Loading />
  ) : (
    <Container>
      <Header>
        <button type="button" onClick={() => history.goBack()}>
          <FaArrowLeft size={24} color="#cc0034" />
        </button>
        <h2>{title}</h2>
      </Header>
      <Content>
        <div id="video">{video ? <video src={video} controls /> : ''}</div>
        <div>
          {links.map((link) => (
            <button
              type="button"
              key={link[2]}
              onClick={() => watchHandler(link[0])}
            >
              LINK {links.indexOf(link) + 1}
            </button>
          ))}
        </div>
      </Content>
    </Container>
  );
}

export default Watch;
