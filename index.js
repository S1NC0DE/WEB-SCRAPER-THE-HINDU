const PORT = 8000
const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')

const app = express()

axios('https://www.thehindu.com/')
.then(response => {
    const html = response.data
    const $ = cheerio.load(html)
    const articles = []
    $('h3', html).each(function(){
        const title = $(this).text()
        const url = $(this).find('a').attr('href')
        articles.push({ 
            title, 
            url 
        })
    })
    console.log(articles)
}).catch(err => console.log(err))



app.listen(PORT, () => console.log(`server running on port ${PORT}`))