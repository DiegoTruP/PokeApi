
const url1 = 'https://pokeapi.co/api/v2/pokemon/6/'
const url2 = 'https://pokeapi.co/api/v2/pokemon/128/'
const url3 = 'https://pokeapi.co/api/v2/pokemon/214/'
const url4 = 'https://pokeapi.co/api/v2/pokemon/131/'
const url5 = 'https://pokeapi.co/api/v2/pokemon/155/'

fetch(url1)
.then(response => response.json())
.then(pokemon1 => {
  let element = document.getElementById('elemento')
  element.innerHTML = 
  `<div class="card" style="width: 12rem;">
  <div class="contenedorImg"><img src='${pokemon1.sprites.front_default}' class="card-img-top" alt="..."></div>
  <div class="card-body">
    <p class="card-text"><h3>${pokemon1.name}</h3> Altura: ${pokemon1.height/10} m</p>
  </div>
  </div>`
  // `<h3>${pokemon1.name}<h3>
  // <img src='${pokemon1.sprites.front_default}'><p>${pokemon1.height} Kg<p>`;
  // console.log(pokemon)
})
.catch(err=>console.log(err))

fetch(url2)
.then(response => response.json())
.then(pokemon2 => {
  let element2 = document.getElementById('elemento2')
  element2.innerHTML = 
  `<div class="card" style="width: 12rem;">
  <div class="contenedorImg"><img src='${pokemon2.sprites.front_default}' class="card-img-top" alt="..."></div>
  <div class="card-body">
    <p class="card-text"><h3>${pokemon2.name}</h3>Altura: ${pokemon2.height/10} m</p>
  </div>
  </div>`
  
  // `<h3>${pokemon2.name}<h3>
  // <img src='${pokemon2.sprites.front_default}'><p>${pokemon2.height} Kg<p>`;
  // console.log(pokemon2)
})
.catch(err=>console.log(err))

fetch(url3)
.then(response => response.json())
.then(pokemon3 => {
  let element3 = document.getElementById('elemento3')
  element3.innerHTML = 
  `<div class="card" style="width: 12rem;">
  <div class="contenedorImg"><img src='${pokemon3.sprites.front_default}' class="card-img-top" alt="..."></div>
  <div class="card-body">
    <p class="card-text"><h3>${pokemon3.name}</h3>Altura: ${pokemon3.height/10} m</p>
  </div>
  </div>`

  {/* `<h3>${pokemon3.name}</h3>
  <img src='${pokemon3.sprites.front_default}'><p>${pokemon3.height} Kg<p>`;
  console.log(pokemon3) */}
})
.catch(err=>console.log(err))

fetch(url4)
.then(response => response.json())
.then(pokemon4 => {
  let element4 = document.getElementById('elemento4')
  element4.innerHTML = 
  `<div class="card" style="width: 12rem;">
  <div class="contenedorImg"><img src='${pokemon4.sprites.front_default}' class="card-img-top" alt="..."></div>
  <div class="card-body">
    <p class="card-text"><h3>${pokemon4.name}</h3>Altura: ${pokemon4.height/10} m</p>
  </div>
  </div>`
  
  // `<h3>${pokemon4.name}</h3>
  // <img src='${pokemon4.sprites.front_default}'><p>${pokemon4.height} Kg<p>`;
  // console.log(pokemon4)
})
.catch(err=>console.log(err))

fetch(url5)
.then(response => response.json())
.then(pokemon5 => {
  let element5 = document.getElementById('elemento5')
  element5.innerHTML = 
  `<div class="card" style="width: 12rem;">
  <div class="contenedorImg"><img src='${pokemon5.sprites.front_default}' class="card-img-top" alt="..."></div>
  <div class="card-body">
    <p class="card-text"><h3>${pokemon5.name}</h3>Altura: ${pokemon5.height/10} m</p>
  </div>
  </div>`

  
  // `<h3>${pokemon5.name}</h3>
  // <img src='${pokemon5.sprites.front_default}'><p>${pokemon5.height} Kg<p>`;
  // console.log(pokemon5)
})
.catch(err=>console.log(err))