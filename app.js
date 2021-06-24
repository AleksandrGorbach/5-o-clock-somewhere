const DOMAIN = 'https://www.thecocktaildb.com/api/json/v1/1/search.php';
const API_KEY = '9973533';
const BASE_URL = `${DOMAIN}?apikey=${API_KEY}&`

const cocktailList = document.querySelector('.display')
const mainSearch = document.querySelector('#search-drink')
console.log('Starting Search...' + `${BASE_URL}` + mainSearch.value)

mainSearch.addEventListener('keypress', function (e) {
  const inputValue = document.querySelector('#search-drink')
  if (e.key === 'Enter') {
    removeDrinks()
    fetchDrinks(inputValue.value)
    document.querySelector('#search-drink').value = ''
  }
})

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

    //return response
  } catch (error) {
    console.error(error)
  }
}

function removeDrinks() {
  // cocktailList.innerHTML = ''
  while (cocktailList.lastChild) {
    cocktailList.removeChild(cocktailList.lastChild)
  }
}

function printArr(arr) {
  console.log('Printing result: ' + arr.strDrink)

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





// const RANDOM_COCKTAIL = 'www.thecocktaildb.com/api/json/v1/1/random.php'
// random cocktail = 'www.thecocktaildb.com/api/json/v1/1/random.php'
// multiple ingredients = 'www.thecocktaildb.com/api/json/v1/1/filter.php?i=Dry_Vermouth,Gin,Anis'
// popular cocktails = 'www.thecocktaildb.com/api/json/v1/1/popular.php'

