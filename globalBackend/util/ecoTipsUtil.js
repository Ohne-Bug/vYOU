const http = require('http');
const cheerio = require('cheerio')

let sentences = [];

module.exports.init = async function () {
    const resp = await fetch('https://www.britannica.com/explore/savingearth/everyday-tips');
    const plainHTML = await resp.text();
    const jquery = cheerio.load(plainHTML);
    sentences = jquery('h3.elementor-cta__title').text().replaceAll('\t', '').trim().split('\n');
    console.log('Initialized ecoTipsUtil');
}

module.exports.get = function () {
    //return random sentence
    return sentences[Math.floor(Math.random() * sentences.length)];
}
