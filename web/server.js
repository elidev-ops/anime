const express = require('express')
const axios = require('axios')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

app.get('/animes', async (req, res) => {
    const {name} = req.query
    const response = await axios.get(`http://one.zetai.info/odata/Animesdb?%24filter=substringof(%27${name}%27%2C%20Nome)&%24select=Id%2CNome%2CImagem&%24orderby=Nome&%24skip=0&%24inlinecount=allpages`)
    return res.json(response.data)
})

app.get('/detalhes/:id', async (req, res) => {
    const { id } = req.params
    const response = await axios.get(`http://one.zetai.info/api/episodioexes/${id}`)
    return res.json(response.data)
})

app.get('/links', async (req, res) => {
    const { id } = req.query
    const response = await axios.get(`http://one.zetai.info/api/episodioexes/links?id=${id}`)
    return res.json(response.data)
})

app.listen(3000)