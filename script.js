// Function to fetch a joke from Official JokeAPI
function fetchJokeFromOfficial() {
    fetch('https://official-joke-api.appspot.com/jokes/programming/random')
      .then(response => response.json())
      .then(jokeData => {
        const jokeText = jokeData[0].setup + " " + jokeData[0].punchline;
        const jokeElement = document.getElementById('jokeElement');
        jokeElement.innerHTML = jokeText + ' &#128516;';
      })
      .catch(error => {
        console.log('Error:', error);
      });
  }
  
  // Function to fetch a joke from JokeAPI.io
  function fetchJokeFromJokeAPI() {
    fetch('https://v2.jokeapi.dev/joke/Programming?type=single')
      .then(response => response.json())
      .then(jokeData => {
        const jokeText = jokeData.joke;
        const jokeElement = document.getElementById('jokeElement');
        jokeElement.innerHTML = jokeText + ' &#128517;';
      })
      .catch(error => {
        console.log('Error:', error);
      });
  }
  
  // Function to randomly choose an API and fetch a joke
  function fetchRandomJoke() {
    const randomAPI = Math.random() < 0.5 ? 'official' : 'jokeapi';
  
    if (randomAPI === 'official') {
      fetchJokeFromOfficial();
    } else {
      fetchJokeFromJokeAPI();
    }
  }
  
  // Event listener for the button click
  const changeJokeButton = document.getElementById('changeJokeButton');
  changeJokeButton.addEventListener('click', fetchRandomJoke);
  
  // Fetch a joke when the page loads
  fetchRandomJoke();
  