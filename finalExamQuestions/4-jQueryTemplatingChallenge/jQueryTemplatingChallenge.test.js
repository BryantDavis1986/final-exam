'use strict';

// to learn more about the cheerio library and what it is doing, look at their documentation: https://www.npmjs.com/package/cheerio
const cheerio = require('cheerio');

/* ------------------------------------------------------------------------------------------------

Write a function named templatingWithJQuery that uses jQuery to get the html template from the DOM, copy the contents, fill it with the Star Wars People, and append it to the DOM.
------------------------------------------------------------------------------------------------ */
const starWars = {
  page: 1,
  planet: 'home',
  force:['light', 'dark'],
  keyPlayers:{
    page: 2,
    force:{
      light:[
      {
        "name": "Luke Skywalker",
        "height": "172",
        "eye_color": "blue"
      },
      {
        "name": "C-3PO",
        "height": "167",
        "eye_color": "yellow"
      },
      {
        "name": "R2-D2",
        "height": "96",
        "eye_color": "red"
      }
    ]}
  }}

let $ = createSnippetWithJQuery(`
<main>
  <section id="template">
    <h2></h2>
    <h3></h3>
    <p></p>
  </section>
</main>
`);

const templatingWithJQuery = () => {
  // Solution code here ...
  console.log(starWars.keyPlayers.force.light[0])
  const starwars = starWars.keyPlayers.force.light.forEach(value =>{
   const section = (`<section><h2>${value.name}</h2><h3>${value.height}</h3><p>${value.eye_color}</p></section>`)
    // $('h2').text(value.name);
    // $('h3').text(value.height);
    // $('p').text(value.eye_color);
    $('main').append(section);
  })

console.log(starwars);
}

describe('Testing challenge', () => {
  test('It should append the star wars people to the DOM', () => {
    templatingWithJQuery();
    expect($('section:nth-child(2) h2').text()).toStrictEqual('Luke Skywalker');
    expect($('section:nth-child(3) h3').text()).toStrictEqual('167');
    expect($('section:nth-child(4) p').text()).toStrictEqual('red');
  })
});

function createSnippetWithJQuery(html){
  return cheerio.load(html);
};
