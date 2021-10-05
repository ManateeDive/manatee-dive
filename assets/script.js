var recipeList = document.querySelector('ul');
var getRecipe = document.getElementById('getRecipe');
var removeItem = document.getElementById('removeItem')
var ingredientsList = document.getElementById('ingredientsList');

ingredientsList = {
  a:  "avocado",
  b:  "banana",
  c:  "chocolate",
  d:  "durian",
  e:  "eggs",
  f:  "feta",
  g:  "grape",
  h:  "halibut",
  i:  "iodized salt",
  j:  "jicama",
  k:  "kiwi",
  l:  "lemon",
  m:  "mango",
  n:  "nopale",
  o:  "oregano",
  p:  "pickles",
  q:  "quinoa",
  r:  "raisin",
  t:  "tofu",
  u:  "ume",
  v:  "valerian",
  w:  "wombat pate",
  x:  "mystery meat",
  y:  "yams",
  z:  "zucchini"
}
function getApi() {
  var queryString = "?q=apples";
  var apiKey = "&apiKey=fcd9342fe05d484285a789f3da6691c2";
  queryString = queryString.concat('', apiKey);
  var requestUrl = "https://api.spoonacular.com/recipes/complexSearch"
  requestUrl = requestUrl.concat('', queryString);
  console.log(requestUrl);

fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (var i = 0; i < data.length; i++) {
        var listItem = document.createElement('li');
        listItem.textContent = data[i].html_url;
        recipeList.appendChild(listItem);
      }
    });
}
getRecipe.addEventListener('click', getApi);

// Code for the recipe builder site

// // Initialize
// function init (){
//     // Load any ingredients that were previously entered and autofill the ingredients list
// }

// // Get Recipe Button

// function getRecipe (){
//     // Calls spoonacular api with the inputs as ingredients 
//     // gets 5 recipes back in order of most ingredients used
//     // if recipe uses more of an ingredient than the use has on hand, 
//         // 

// }

// Surprise Me variables
// var surpriseRecipe = document.getElementById('surpriseRecipe');
// var surpriseResult = document.getElementById('surpriseResult');

// function surpriseMe (){
//     // Gets one random recipe from list above
//     var requestUrl = "https://api.spoonacular.com/recipes/random?apiKey=6b2994b0da2e49f2a7e66de1133a594f"
    
//     fetch(requestUrl)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       for (var i = 0; i < data.length; i++) {
//         var listItem = document.createElement('li');
//         listItem.textContent = data[i].recipe.;
//         surpriseResult.appendChild(listItem);
        
//       }
//     });
// }






// surpriseRecipe.addEventListener('click', surpriseMe);


// // Dynamically generate a list of ingredient below the input field, each ingredient also gets a remove item button
// function addIngredient(event) {
//   event.preventDefault();
//   var listEl = document.createElement('li');
//   var ingredient = document.getElementById('inputId').value;
//   listEl.textContent = ingredient;
//   ingredientsList.appendChild(listEl);
//   // var removeButton = document.createElement("button");
//   // listEl.appendChild(removeButton);

// }

// // const form = document.getElementById("#form");
// // const ingredientsList = document.getElementById('ingredientsList');
// form.addEventListener('keyup', addIngredient(event)) {
//     document.getElementById('')
// }


// Program the remove item button to remove it's parent li only
function removeItem() {

  

}



// Make cards

// function renderCards (){
//     // Build the cards with data sourced from the spoonacular API

// }

// init()
// // Add autocomplete for ingredients list
// // STILL NEED TO ADD DATA LIST with keys [ap = apples] etc.
// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.autocomplete');
//     var instances = M.Autocomplete.init(elems, options);
//   });

