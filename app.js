// const DOMAIN = 'https://www.thecocktaildb.com';
// const API_KEY = '9973533';
// const BASE_URL = `${DOMAIN}?apikey=${API_KEY}&`
// const RANDOM_COCKTAIL = 'www.thecocktaildb.com/api/json/v1/1/random.php'
// random cocktail = 'www.thecocktaildb.com/api/json/v1/1/random.php'
// multiple ingredients = 'www.thecocktaildb.com/api/json/v1/1/filter.php?i=Dry_Vermouth,Gin,Anis'
// popular cocktails = 'www.thecocktaildb.com/api/json/v1/1/popular.php'

// const mainSearch = document.querySelector('#search')
// console.log('Starting Search...' + `${BASE_URL}` + document.querySelector('#blank').value)

const pickDrink = document.querySelector('#pick-drink')
const form = document.querySelector('form')
const dataContainer = document.querySelector('#data-container')

fetch("www.thecocktaildb.com/api/json/v1/1/random.php")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Not working")
    }
  })
  .then(function (data) {
    console.log(data);
    displayCocktail(data);
  })
  .catch((error) => {
    console.error("Fetch error:", error)
  });

function displayCocktail(data) {
  const cocktail = data.drinks[0];
  const cocktailDiv = document.getElementById("cocktail");
}

const cocktailName = cocktail.strDrink;
const heading = document.createElement("h1");
heading.innerHTML = cocktailName;
cocktailDiv.appendChild(heading);

const cocktailImg = document.createElement('img');
cocktailImg.src = cocktail.strDrinkThumb;
cocktailDiv.appendChild(cocktailImg);
document.body.style.backgroundImage = "url('" + cocktail.strDrinkThumb + "')";


// const getCocktailList = async () => {
//   try {
//     const cocktailLink = 'www.thecocktaildb.com/api/json/v1/1/search.php?f=a'
//     const response = await axios.get(cocktailLink)
//     const cocktailList = Object.keys(response.data.message)
//     setOptions(cocktailList)
//   } catch (error) {
//     console.error(error)
//   }
// }

// getCocktailList()

// function removeElement(element) {
//   while (element.lastChild) {
//     element.removeChild(element.lastChild)
//   }
// }