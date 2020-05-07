const container = document.querySelector('.container')
const videoDiv = document.querySelector('.video')

const filterAnimes = async (name) =>
    fetch(`http://localhost:3000/animes?name=${name}`)
    .then(response => response.json())

const debaunceEvent = (fn, wait = 1000, time) => (...args) => {
    clearTimeout(time, time = setTimeout(() => fn(...args), wait))
}

function keyUpHandler(e) {
    container.innerHTML = ''
    filterAnimes(e.target.value)
    .then(response => {
        response.value.forEach(anime => {
            const div = document.createElement('div')
            const span = document.createElement('span')
            const img = document.createElement('img')
            div.className = 'anime'
            div.setAttribute('data-href', anime.Id)
            span.textContent = anime.Nome
            img.setAttribute('src', anime.Imagem)
            div.appendChild(span)
            div.appendChild(img)
            container.appendChild(div)
        })
        const anime = document.querySelectorAll('.anime')
        anime.forEach(el => {
            el.addEventListener('click', async (e) => {
                let title = el.children[0].textContent
                let id = el.getAttribute('data-href')
                let detalhes = await fetch(`http://localhost:3000/detalhes/${id}`).then(response => response.json())
                container.innerHTML = ''
                let ul = document.createElement('ul')
                let h1 = document.createElement('h1')
                ul.className = 'detalhes'
                h1.textContent = title
                ul.appendChild(h1)

                await detalhes.forEach(async item => {
                    let li = document.createElement('li')
                    let span = document.createElement('span')
                    span.textContent = item.Nome
                    let watch = document.createElement('a')
                    let download = document.createElement('a')
                    watch.textContent = 'Assistir'
                    watch.className = 'watch'
                    watch.setAttribute('data-href', item.Id)
                    watch.setAttribute('href', '#video')
                    download.textContent = 'Download'
                    download.className = 'download'
                    download.setAttribute('data-href', item.Id)
                    download.setAttribute('href', 'javascript:;')
                    li.appendChild(span)
                    li.appendChild(watch)
                    li.appendChild(download)
                    ul.appendChild(li)
                })
                container.appendChild(ul)

                const links = document.querySelectorAll('a')
                links.forEach(link => {
                    link.addEventListener('click', async (e) => {
                        let context = link.textContent
                        let id = link.getAttribute('data-href')
                        let response = await fetch(`http://localhost:3000/links?id=${id}`).then(response => response.json())
                        switch (context) {
                            case 'Download':
                                let title = link.previousSibling.previousSibling.textContent
                                link.setAttribute('href', response[0].Endereco)
                                link.setAttribute('download', '')
                                link.click()
                                break
                            case 'Assistir':
                                let content = document.createElement('div')
                                content.className = 'detalhes'
                                let h1 = document.createElement('h1')
                                h1.textContent = link.previousSibling.textContent
                                let video = document.createElement('video')
                                video.id = 'player'
                                video.setAttribute('controls','')
                                video.setAttribute('src', response[0].Endereco)
                                content.appendChild(h1)
                                content.appendChild(video)
                                videoDiv.innerHTML = ''
                                videoDiv.appendChild(content)
                                break
                            default:
                                break
                        }
                    })
                })
            })
        })
    })
}

document.addEventListener('keyup', debaunceEvent(keyUpHandler))