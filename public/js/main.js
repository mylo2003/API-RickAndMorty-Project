console.log('Wubba Lubba Dub Dub!!!');

const API = 'https://rickandmortyapi.com/api'; 

const getCharacters = async () => {
  let randomPage = Math.floor(Math.random() * 43);

  const response = await fetch(`${API}/character/?page=${randomPage}`);
  const data = await response.json();

  let randomNum = Math.floor(Math.random() * data.results.length);
  let randomNum2 = Math.floor(Math.random() * data.results.length);
  let randomNum3 = Math.floor(Math.random() * data.results.length);

  while(randomNum == randomNum2 || randomNum == randomNum3 || randomNum2 == randomNum3) {
    randomNum = Math.floor(Math.random() * data.results.length);
    randomNum2 = Math.floor(Math.random() * data.results.length);
    randomNum3 = Math.floor(Math.random() * data.results.length);
  }

  const img = document.getElementById('img-random');
  const img2 = document.getElementById('img-random2');
  const img3 = document.getElementById('img-random3');

  const name = document.getElementById('name');
  const name2 = document.getElementById('name2');
  const name3 = document.getElementById('name3');

  const status = document.getElementById('status');
  const status2 = document.getElementById('status2');
  const status3 = document.getElementById('status3');

  img.src = data.results[randomNum].image;
  img.alt = data.results[randomNum].name;
  name.innerText = data.results[randomNum].name;
  status.innerText = data.results[randomNum].status;

  img2.src = data.results[randomNum2].image;
  img2.alt = data.results[randomNum2].name;
  name2.innerText = data.results[randomNum2].name;
  status2.innerText = data.results[randomNum].status;

  img3.src = data.results[randomNum3].image;
  img3.alt = data.results[randomNum3].name;
  name3.innerText = data.results[randomNum3].name;
  status3.innerText = data.results[randomNum].status;
}

getCharacters();

const btn = document.querySelector('button');

btn.addEventListener('click', getCharacters);
