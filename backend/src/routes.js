const { Router } = require('express');
const axios = require('axios');
// Rotas
const route = new Router();

route.get('/animes', async (req, res) => {
  const { name } = req.query;
  const response = await axios.get(
    `http://one.zetai.info/odata/Animesdb?%24filter=substringof(%27${name}%27%2C%20Nome)&%24select=Id%2CNome%2CImagem&%24orderby=Nome&%24skip=0&%24inlinecount=allpages`
  );
  return res.json(response.data);
});

route.get('/episodios/:id', async (req, res) => {
  const { id } = req.params;
  const response = await axios.get(
    `http://one.zetai.info/api/episodioexes/${id}`
  );
  return res.json(response.data);
});

route.get('/links', async (req, res) => {
  const { id } = req.query;
  const response = await axios.get(
    `http://one.zetai.info/api/episodioexes/links?id=${id}`
  );
  return res.json(response.data);
});

module.exports = route;
