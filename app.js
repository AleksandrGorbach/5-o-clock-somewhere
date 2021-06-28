const DOMAIN = 'https://www.thecocktaildb.com/api/json/v1/1/search.php';
const API_KEY = '9973533';
const RANDOM_COCKTAIL = 'https://www.thecocktaildb.com/api/json/v2/1/randomselection.php'
const BASE_URL = `${DOMAIN}?apikey=${API_KEY}&`
const RANDOM_URL = 'https://www.thecocktaildb.com/api/json/v2/9973533/randomselection.php'

const cocktailList = document.querySelector('.display')
const mainSearch = document.querySelector('#search-drink')
const randomSearch = document.querySelector('#btn')
console.log('Starting Search...' + `${BASE_URL}` + mainSearch.value)

// Event Listener For The Search Bar
mainSearch.addEventListener('keypress', function (e) {
  const inputValue = document.querySelector('#search-drink')
  if (e.key === 'Enter') {
    removeDrinks()
    fetchDrinks(inputValue.value)
    document.querySelector('#search-drink').value = ''
  }
})

// Event Listener For The Random Button 
randomSearch.addEventListener('click', () => {
  const inputValue = document.querySelector('#btn');
  removeDrinks();
  fetchRandom(inputValue.value);
  document.querySelector('#btn').value = '';
})

// Random Results
async function fetchRandom() {
  const randomUrl = `${RANDOM_URL}`;
  console.log(randomUrl)

  try {
    const response = await axios(randomUrl)
    console.log(response)
    for (let i = 0; i < response.data.drinks.length; i++) {
      printArr(response.data.drinks[i])
    }

  } catch (error) {
    console.error(error)
  }
}
fetchRandom();

// Main Search
async function fetchDrinks(searchDrink) {
  console.log(searchDrink)
  const url = `${BASE_URL}s=${searchDrink}`
  console.log(url)

  try {
    const response = await axios(url)
    console.log(response)
    for (let i = 0; i < response.data.drinks.length; i++) {
      printArr(response.data.drinks[i])
    }

    // Return Response
  } catch (error) {
    console.error(error)
  }
}

function removeDrinks() {
  while (cocktailList.lastChild) {
    cocktailList.removeChild(cocktailList.lastChild)
  }
}

function printArr(arr) {
  const drinkContainer = document.createElement('div')
  drinkContainer.setAttribute('class', 'drink-container')

  const cocktailName = document.createElement('h2')
  cocktailName.setAttribute('id', 'cocktail-name')
  cocktailName.innerHTML = arr.strDrink;

  const cocktailInstructions = document.createElement('p')
  cocktailInstructions.setAttribute('class', 'cocktail-instructions')
  cocktailInstructions.innerHTML = arr.strInstructions;

  const cocktailImg = document.createElement('img')
  cocktailImg.setAttribute('id', 'cocktail-img')
  cocktailImg.setAttribute('src', arr.strDrinkThumb)
  cocktailImg.setAttribute('height', '200px')
  cocktailImg.setAttribute('class', 'img-container')

  drinkContainer.appendChild(cocktailName);
  drinkContainer.appendChild(cocktailImg);
  drinkContainer.appendChild(cocktailInstructions);
  cocktailList.appendChild(drinkContainer);
}







