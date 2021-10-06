
// Dynamically generated list element
var ingredientList = document.getElementById('ingredientList');
// To remove items from ingredientList
var removeItem = document.getElementById('removeItem');
// Empty array to fill with ingredients!
var ingredients = [];

//actual list of ingredients

// List of ingredient options for autocomplete. 
const autofill = ["avocado", "apple", "asparagus", "almonds", "arugula", "banana", "broccoli", "beets", "blueberries", "bell pepper", "chocolate", "cherries", "cauliflower", "corn", "cucumber", "durian", "dates", "dill", "dragonfruit", "damson plums", "eggs", "eggplant", "edamame beans", "elderberries", "endive", "feta", "fennel", "figs", "fava beans", "flaxseed", "grapes", "garlic", "ginger", "green beans", "grapefruit", "halibut", "hazelnuts", "honey", "honeydew", "hominy", "iodized salt", "iceberg lettuce", "icaco", "ice cream", "idaho potato", "jicama", "jalepeno peppers", "jello", "jackfruit", "jaboticaba", "kiwi", "kale", "key lime", "ketchup", "kidney beans", "lemon", "leek", "lime", "lentils", "lima beans", "mango", "mushrooms", "mandarins", "mustard", "miso", "nopale", "nectarine", "nutella", "noodles", "naan bread", "oregano", "olives", "okra", "orange", "onion", "pickles", "papaya", "peach", "peanuts", "pumpkin", "quinoa", "quince", "quail", "queso", "raisins", "rhubarb", "rosemary", "rasberries", "radish", "shallots", "spinach", "sweet potato", "serrano peppers", "strawberries", "tofu", "tangerine", "tarragon", "tomato", "turnip", "ume", "ugli fruit", "umbrella fruit", "ube", "urda cheese", "valerian", "veal", "vanilla", "valerian root", "venison", "wombat pate", "walnuts", "watermelon", "wasabi", "white chocolate", "mystery meat", "xanthan gum", "xylitol", "yams", "yucca root", "yogurt", "yeast", "yolks", "zucchini", "zest"]

//function to autosuggest based on matching key elemtns
document.getElementById('inputId').addEventListener('input', (e)=>{

let autofillArray = [];
   
if(e.target.value){
     autofillArray = autofill.filter(autofill=> autofill.toLowerCase().includes(e.target.value));
     autofillArray =autofillArray.map(autofill => `<li>${autofill}</li>`)
   }
   showIngredients(autofillArray);

})

function showIngredients(autofillArray){
  const html = !autofillArray.length ? '' : autofillArray.join('');
  document.querySelector('ul').innerHTML =html;
}




// Spoonacular API Integration
// 
// Surprise Me! Gets a random recipe.

var surpriseRecipe = document.getElementById('surpriseRecipe'); 
var surpriseResult = document.getElementById('surpriseResult');

function surpriseMe (){
    // Gets one random recipe from list above
    var requestUrl = "https://api.spoonacular.com/recipes/random?apiKey=fcd9342fe05d484285a789f3da6691c2"
    console.log("clicked")
    fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var listItem = document.createElement('li');
      listItem.setAttribute("class", "btn");
      var atag = document.createElement('a')
      atag.textContent = data.recipes[0].title;   
      atag.setAttribute('target', 'blank')
      atag.setAttribute("href", data.recipes[0].sourceUrl)
      atag.style.color = "white"
      atag.style.width = "fit-content" //unsure if this is working
      console.log(data.recipes[0].sourceUrl)
      listItem.appendChild(atag)
      surpriseResult.appendChild(listItem);
    })
};

surpriseRecipe.addEventListener('click', surpriseMe);

// Initialize
//    Load any ingredients that were previously entered 
//    autofill the ingredients list

function init (){ 
  var storedIngredients = JSON.parse(localStorage.getItem("ingredient"));

  // If anything was retrieved from localStorage, update the array
  if (storedIngredients !== null) {
    ingredient = storedIngredients;
  }

  // Make the ingredients list with another function
  addIngredient();
}

// Dynamically generate a list of ingredient below the input field
// Each ingredient also gets a remove item button

function addIngredient() {
  // Clear ingredientList element
  ingredientList.innerHTML = "";

  // Render a new li for each ingredient
  for (var i = 0; i < ingredients.length; i++) {
    var ingred = ingredients[i];

    var li = document.createElement("li");
    li.textContent = ingred;
    li.setAttribute("data-index", i);

    var button = document.createElement("button");
    button.textContent = "X";

    li.appendChild(button);
    ingredientList.appendChild(li);
  }
}


// Store ingredients in local storage
function storeIngredients() {
  // Stringify and set key in localStorage to todos array
  localStorage.setItem("ingredients", JSON.stringify(ingredients));
}

// Add submit event to form
const form = document.getElementById("form");
const inputId = document.getElementById("inputId")
form.addEventListener("submit", function(event) {
  event.preventDefault();

  var text = inputId.value.trim();
  // return if nothing entered
  if (text === "") {
    return;
  }
  ingredients.push(text);
  inputId.value = "";

  // Store ingredients in localStorage, re-render the list
  storeIngredients();
  addIngredient();

});

// Spoonacular API Integration Below
// 
// First get 5 recipes, query contents of: 
// <ul id="ingredientList"></ul> 

var recipeList = document.querySelector('#suggestResult');
var getRecipe = document.getElementById('getRecipe'); //the button

function getApi() {

  var queryString = "&ingredients=" + "bananas"; //bananas is a test... need to add var ingredients 
  var apiKey = "?apiKey=fcd9342fe05d484285a789f3da6691c2";
  apiKey = apiKey.concat('', queryString);
  var requestUrl = "https://api.spoonacular.com/recipes/findByIngredients";
  requestUrl = requestUrl.concat('', apiKey);
  console.log(requestUrl)
    
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
    console.log(data)
      for (var i = 0; i < data.length-5; i++) { 
        var listItem = document.createElement('li');
        listItem.textContent = data[i].title;
        var foodImage = document.createElement('img');
        foodImage.src = (data[i].image);

        recipeList.appendChild(listItem);
        recipeList.appendChild(foodImage);
      }
    })
}
getRecipe.addEventListener('click', getApi);

// Program the remove item button to remove it's parent li only
function removeItem() {

}

// Add click event to todoList element
ingredientList.addEventListener("click", function(event) {
  var element = event.target;

  // Checks if element is a button
  if (element.matches("button") === true) {
    // Get its data-index value and remove the todo element from the list
    var index = element.parentElement.getAttribute("data-index");
    ingredients.splice(index, 1);

    // Store updated todos in localStorage, re-render the list
    storeIngredients();
    addIngredient();
  }
});

//init()


// Make cards
//     Instead of making a list of recipes, 
//     make a card for each recipe
//     Spoonacular returns an image url so card could have image!
// function renderCards (){}

// Get Recipe Button
    // Calls spoonacular api with the inputs as ingredients 
    // gets 5 recipes back in order of most ingredients used
    // if recipe uses more of an ingredient than the use has on hand
    // ignore
// function getRecipe (){ }

// // Add autocomplete for ingredients list
//  
// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.autocomplete');
//     var instances = M.Autocomplete.init(elems, options);
//   });