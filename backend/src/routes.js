const { Router } = require('express');
const axios = require('axios');
require('dotenv').config();

// Rotas
const route = new Router();

route.get('/animes', async (req, res) => {
  const { name } = req.query;
  const response = await axios.get(
    `${process.env.URL_ANIME}?call=pesquisa&Nome=${name}&Categoria=Anime&Pagina=1`
  );
  response.data.map(
    (code) => (code.Imagem = `${process.env.URL_CAPA}${code.CodAniMan}.jpg`)
  );

  return res.json(response.data);
});

route.get('/anime/:id', async (req, res) => {
  const { id } = req.params;
  const response = await axios.get(
    `${process.env.URL_ANIME}?call=sinopse&CodAniMan=${id}`
  );
  response.data.Imagem = `${process.env.URL_CAPA}${id}.jpg`;
  return res.json(response.data);
});

route.get('/links', async (req, res) => {
  const { id } = req.query;
  const response = await axios.get(
    `${process.env.URL_ANIME}?call=episodio&CodEpisodio=${id}`
  );
  return res.json(response.data);
});

module.exports = route;
