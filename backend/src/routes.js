const { Router } = require('express');
const axios = require('axios');
// Rotas
const route = new Router();

route.get('/animes', async (req, res) => {
  const { name } = req.query;
  const response = await axios.get(
    `http://brasilsenpai.net/files/system.php?call=pesquisa&Nome=${name}&Categoria=Anime&Pagina=1`
  );
  response.data.map(
    (code) =>
      (code.Imagem = `http://brasilsenpai.net/capas/${code.CodAniMan}.jpg`)
  );

  return res.json(response.data);
});

route.get('/anime/:id', async (req, res) => {
  const { id } = req.params;
  const response = await axios.get(
    `http://brasilsenpai.net/files/system.php?call=sinopse&CodAniMan=${id}`
  );
  response.data.Imagem = `http://brasilsenpai.net/capas/${id}.jpg`;
  return res.json(response.data);
});

// route.get('/anime/:id', async (req, res) => {
//   const { id } = req.params;
//   const response = await axios.get(
//     `http://one.zetai.info/odata/Animesdb?%24filter=Id%20eq%20${id}`
//   );

//   return res.json(response.data);
// });

route.get('/links', async (req, res) => {
  const { id } = req.query;
  const response = await axios.get(
    `http://brasilsenpai.net/files/system.php?call=episodio&CodEpisodio=${id}`
  );
  return res.json(response.data);
});

module.exports = route;
