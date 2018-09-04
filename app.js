let listings = document.querySelector('#job-listings')
let title = document.querySelector('#title')
let pay = document.querySelector('#pay')
let description = document.querySelector('#description')
let submit = document.querySelector('#submit')
let arr = []

document.addEventListener("DOMContentLoaded", function (event) {
  fetch('https://dino-1-server.herokuapp.com/')
  .then(function(response) {
    return response.json();
  })
  .then(function(result) {
    for (let i = 0; i < result.length; i++) {
            let listElement = document.createElement('li')
            let title = result[i]['title']
            let pay = result[i]['pay']
            let description = result[i]['description']
            let interested = result[i]['interested'].length
            console.log(title, pay, description)
            listElement.innerHTML = `<h4>${title}</h4>
            <small>${pay}</small>
            <p>${description}</p>
            <small> ${interested} Dinos are interested in this position</small>`
            listings.appendChild(listElement)
    }
  })

  })
  submit.addEventListener('click', function (element) {
    element.preventDefault()
    let newElement = document.createElement('li')

    newElement.innerHTML = `<h4>${title.value}</h4>
    <small>${pay.value}</small>
    <p>${description.value}</p>`
    listings.appendChild(newElement)

  })
  


