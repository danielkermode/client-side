const test = require('tape');
const cheerio = require('cheerio');

const exampleTemplateFunction = require('../views/greeting.js');

const pens = [
  { id: 1, name: 'one', length: '12 inches', color: 'blue' },
  { id: 2, name: 'ting', length: '6 inches', color: 'red' },
  { id: 3, name: 'hullo', length: '1 inch', color: 'magenta' }
];

const renderedTemplate = exampleTemplateFunction({ name: 'Benedict', pens });
const $ = cheerio.load(renderedTemplate.outerHTML);

test('test example template function', (t) => {
  t.equal($('h1').text(), 'Welcome Benedict!');

  t.end();
});

test('test that 6 lis exist', (t) => {
  t.equal($('li').length, 6);

  t.end();
});

test('test that 6 lis exist', (t) => {
  t.equal($('li').length, 6);

  t.end();
});