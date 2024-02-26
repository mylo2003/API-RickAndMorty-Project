console.log('Wubba Lubba Dub Dub!!!');

const URL = 'https://rickandmortyapi.com/api'; 


async function getCharacters() {
  const response = await fetch(`${URL}/character/`);
  let data = await response.json();
  let newData;
  let amount = data.info.pages

  console.log(amount);

  console.log(data);
  
  const img = document.getElementById('img-random');
  img.src = data.results[0].image;
  img.alt = data.results[0].name;


  const btn = document.querySelector('button');

  btn.addEventListener('click', ()=> {
    const randomNum = Math.floor(Math.random() * data.results.length);
    img.src = data.results[randomNum].image;
    img.alt = data.results[randomNum].name;
  });
} 

getCharacters();