# Project Overview

https://aleksandrgorbach.github.io/5-o-clock-somewhere/

## Project Name

5 O'clock Somewhere - Mixology web app. 

## Project Description

A web based app that allows users to search for various mixed drinks and retrieve the required ingredients and image(s) of the drink.

## API and Data Sample
[TheCocktailDB](https://www.thecocktaildb.com/api.php)
``` {
    "drinks": [
        {
            "idDrink": "11007",
            "strDrink": "Margarita",
            "strDrinkAlternate": null,
            "strTags": "IBA,ContemporaryClassic",
            "strVideo": null,
            "strCategory": "Ordinary Drink",
            "strIBA": "Contemporary Classics",
            "strAlcoholic": "Alcoholic",
            "strGlass": "Cocktail glass",
            "strInstructions": "Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.",
            "strInstructionsES": null,
            "strInstructionsDE": "Reiben Sie den Rand des Glases mit der Limettenscheibe, damit das Salz daran haftet. Achten Sie darauf, dass nur der äußere Rand angefeuchtet wird und streuen Sie das Salz darauf. Das Salz sollte sich auf den Lippen des Genießers befinden und niemals in den Cocktail einmischen. Die anderen Zutaten mit Eis schütteln und vorsichtig in das Glas geben.",
            "strInstructionsFR": null,
            "strInstructionsIT": "Strofina il bordo del bicchiere con la fetta di lime per far aderire il sale.\r\nAvere cura di inumidire solo il bordo esterno e cospargere di sale.\r\nIl sale dovrebbe presentarsi alle labbra del bevitore e non mescolarsi mai al cocktail.\r\nShakerare gli altri ingredienti con ghiaccio, quindi versarli delicatamente nel bicchiere.",
            "strInstructionsZH-HANS": null,
            "strInstructionsZH-HANT": null,
            "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
            "strIngredient1": "Tequila",
            "strIngredient2": "Triple sec",
            "strIngredient3": "Lime juice",
            "strIngredient4": "Salt",
            "strIngredient5": null,
            "strIngredient6": null,
            "strIngredient7": null,
            "strIngredient8": null,
            "strIngredient9": null,
            "strIngredient10": null,
            "strIngredient11": null,
            "strIngredient12": null,
            "strIngredient13": null,
            "strIngredient14": null,
            "strIngredient15": null,
            "strMeasure1": "1 1/2 oz ",
            "strMeasure2": "1/2 oz ",
            "strMeasure3": "1 oz ",
            "strMeasure4": null,
            "strMeasure5": null,
            "strMeasure6": null,
            "strMeasure7": null,
            "strMeasure8": null,
            "strMeasure9": null,
            "strMeasure10": null,
            "strMeasure11": null,
            "strMeasure12": null,
            "strMeasure13": null,
            "strMeasure14": null,
            "strMeasure15": null,
            "strImageSource": "https://commons.wikimedia.org/wiki/File:Klassiche_Margarita.jpg",
            "strImageAttribution": "Cocktailmarler",
            "strCreativeCommonsConfirmed": "Yes",
            "dateModified": "2015-08-18 14:42:59"
        }
```        

## Wireframes

![5 O'clock Somewhere Wireframe](https://i.imgur.com/RLYPeJi.png)

### MVP/PostMVP

MVP: 
- Setup API with app to pull data
- Allow user(s) to input a liqour and retrieve data showcasing different cocktails followed by the ingredients and image(s).  
- Style the page using flexbox
- Add media query 

PMVP:
- Add additional options: 'dealers choice' which provides the user with a random cocktail. ✅
- Add animations to the drink images. ✅
- Create a small mixer animation when fetching data.
- Have the background image transition through a few photos of cocktails like a mini slideshow.

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|June 21| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|June 22| Project Approval / Core Application Structure (HTML, CSS, etc.) | Complete
|June 23| Pseudocode / actual code | Complete
|June 24| MVP  | Complete
|June 25| PVMP & Additional Touchups | Complete
|June 28| Presentations | Incomplete

## Priority Matrix
[Priority Matrix](https://i.imgur.com/Q6mfwFa.png)

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| HTML/CSS Skeleton | H | 2hrs | 3.5hrs | 3.5hrs |
| Initial JS with API Skeleton | H | 1hrs | 3hrs | 3hrs |
| Making sure it is viable on mobile devices | H | 3hrs | 2hrs | 2hrs |
| Adding a media query | H | 3hrs | 2hrs | 2hrs |
| Setting up search functionality for user | H | 2hrs | 2hrs | 2hrs |
| Displaying the text and images from the API | H | 3hrs | 6hrs | 6hrs |
| Additional styling with flexbox | H | 3hrs | 5hrs | 5hrs |
| Formatting results into gallery | H | 2hrs | 3hrs | 3hrs |
| Working with API | H | 3hrs | 2.5hrs | 2.5hrs |
| Debugging & troubleshooting | H | 3hrs | 4hrs | 4hrs |
| Getting user feedback | M | 2hrs | 3hrs | 3hrs |
| Testing functionality | H | 2hrs | 3hrs | 3hrs |
| Mock Presentation(s) | M | 1hr | 1.5 hrs | 1.5 hrs |
| Total | H | 34hrs| hrs | 5hrs | 40.5 | 40.5 | 

## Code Snippet
```
body {
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
}
  
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
```  
Creates a gradient animation for the background with the specified colors shifting.


## Change Log
I cut out a lot of PMVP ideas because I couldn't figure out how to implemenet them in a way that they didn't appear forced. The layout also changed about 3-4 times. 
