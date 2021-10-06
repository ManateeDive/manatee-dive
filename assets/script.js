// Dynamically generated list element
var ingredientList = document.getElementById('ingredientList');
// To remove items from ingredientList
var removeItem = document.getElementById('removeItem');
// Empty array to fill with ingredients!
var ingredients = [];

// List of ingredient options for autocomplete. 
ingredientsList = [
  {a:  ["avocado", "apple", "asparagus", "almonds", "arugula"]},
  {b:  ["banana", "broccoli", "beets", "blueberries", "bell pepper"]},
  {c:  ["chocolate", "cherries", "cauliflower", "corn", "cucumber"]},
  {d:  ["durian", "dates", "dill", "dragonfruit", "damson plums"]},
  {e:  ["eggs", "eggplant", "edamame beans", "elderberries", "endive"]},
  {f:  ["feta", "fennel", "figs", "fava beans", "flaxseed"]},
  {g:  ["grapes", "garlic", "ginger", "green beans", "grapefruit"]},
  {h:  ["halibut", "hazelnuts", "honey", "honeydew", "hominy"]},
  {i:  ["iodized salt", "iceberg lettuce", "icaco", "ice cream", "idaho potato"]},
  {j:  ["jicama", "jalepeno peppers", "jello", "jackfruit", "jaboticaba"]},
  {k:  ["kiwi", "kale", "key lime", "ketchup", "kidney beans"]},
  {l:  ["lemon", "leek", "lime", "lentils", "lima beans"]},
  {m:  ["mango", "mushrooms", "mandarins", "mustard", "miso"]},
  {n:  ["nopale", "nectarine", "nutella", "noodles", "naan bread"]},
  {o:  ["oregano", "olives", "okra", "orange", "onion"]},
  {p:  ["pickles", "papaya", "peach", "peanuts", "pumpkin"]},
  {q:  ["quinoa", "quince", "quail", "queso"]},
  {r:  ["raisins", "rhubarb", "rosemary", "rasberries", "radish"]},
  {s:  ["shallots", "spinach", "sweet potato", "serrano peppers", "strawberries"]},
  {t:  ["tofu", "tangerine", "tarragon", "tomato", "turnip"]},
  {u:  ["ume", "ugli fruit", "umbrella fruit", "ube", "urda cheese"]},
  {v:  ["valerian", "veal", "vanilla", "valerian root", "venison"]},
  {w:  ["wombat pate", "walnuts", "watermelon", "wasabi", "white chocolate"]},
  {x:  ["mystery meat", "xanthan gum", "xylitol"]},
  {y:  ["yams", "yucca root", "yogurt", "yeast", "yolks"]},
  {z:  ["zucchini", "zest"]}
]


// Spoonacular API Integration Below
// 
// First get 5 recipes, query contents of: 
// <ul id="ingredientList"></ul> 

var recipeList = document.querySelector('suggestResult');
var getRecipe = document.getElementById('getRecipe'); //the button

function getApi() {

  var queryString = "?q=apples";
  var apiKey = "&apiKey=fcd9342fe05d484285a789f3da6691c2";
  queryString = queryString.concat('', apiKey);
  var requestUrl = "https://api.spoonacular.com/recipes/complexSearch";
  requestUrl = requestUrl.concat('', queryString);

  fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        for (var i = 0; i < data.length; i++) {
          var listItem = document.createElement('li');
          var atag = document.createElement('a')
          atag.textContent = data.recipes[i].title
          atag.setAttribute("href", data.recipes[i].sourceUrl)
          listItem.appendChild(atag);
          recipeList.appendChild(listItem)

        };
      })
}

getRecipe.addEventListener('click', getApi);

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
// function init (){}
// init()

// Dynamically generate a list of ingredient below the input field
// Each ingredient also gets a remove item button

function addIngredient() {
  // event.preventDefault();
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

// Program the remove item button to remove it's parent li only
function removeItem() {

}

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