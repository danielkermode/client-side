const test = require('tape');
const cheerio = require('cheerio');

const exampeTemplateFunction = require('../views/greeting.js');

test('test example template function', function (t) {
  const renderedTemplate = exampeTemplateFunction({name: 'Benedict'});
  const $ = cheerio.load(renderedTemplate.outerHTML);

  t.equal($('h1').text(), 'Welcome Benedict!');

  t.end();
});