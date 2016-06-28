var xhr = require('xhr')
var greeting = require('./views/greeting.hbs')
//console.log(xhr)
var endpoint = 'https://localhost:3000/pens'

// document.getElementById("getData").addEventListener('click', function(){
  xhr.get(endpoint, function (err, data) {
    if (err) {
      console.error(err)
    }
    // In case you're curious
    console.log(data.body) // FYI: data.body is a string

    // Replace 'Space' below with the response
    var target = document.getElementsByTagName('main')[0]
    target.innerHTML = greeting({
      name: 'Dan',
      pens: JSON.parse(data.body)
    })
  })
// })
