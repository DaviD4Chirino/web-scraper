const PORT = 8000
const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express");

const app = express()

const url = `https://www.jimaxstudio.com/`; //<-- the url to search for

axios(url).then(response => {
  const html = response.data;
  const $ = cheerio.load(html);
  const articles = []
  $(`h2`, html).each(function()
  {
    const title = $(this).text();
    articles.push({
      title
    });
  });
  console.log(articles);
}).catch(err => {console.log(err);})
