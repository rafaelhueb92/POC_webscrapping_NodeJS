const cheerio = require('cheerio');
const request = require('request-promise');
const interval = require('interval-promise');

const _formataScrap = async $ => {
  let products = [];
  $('#searchResults li.article').each(function(){
    products.push({
      productML:$(this).find('div.rowItem').attr('id'),
      url:$(this).find('.item__info-link').attr('href'),
      name:$(this).find('.list-view-item-title').text(),
      shipping:$(this).find('div.item__shipping > p').text(),
      decimal:$(this).find('div.item__price > span.price__decimals').text(),
      price:$(this).find('div.item__price > span.price__fraction').text()
    })
})
return products;
}

module.exports = url => 
    new Promise((resolve, reject) => {
      const options = {
        url,
        transform: function(body) {
          return cheerio.load(body);
        }
      };
      request.get(options)
        .then(($) => resolve(_formataScrap($)))
        .catch((err) => {
          reject(err);
        })
    });