
var removeItem = document.getElementById('removeItem')
var ingredientList = document.getElementById('ingredientList');


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

var recipeList = document.querySelector('suggestResult');
var getRecipe = document.getElementById('getRecipe'); //the button

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
        var atag = document.createElement('a')
        atag.textContent = data.recipes[i].title
        atag.setAttribute("href", data.recipes[i].sourceUrl)
        listItem.appendChild(atag);
        recipeList.appendChild(listItem)

    };
})
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




// Dynamically generate a list of ingredient below the input field, each ingredient also gets a remove item button
function addIngredient() {
  // event.preventDefault();
  var listEl = document.createElement('li');
  var ingredientTemp = document.getElementById('inputId').value;
  listEl.textContent = ingredientTemp;
  console.log(ingredientTemp);
  ingredientList.appendChild(listEl);
  // var removeButton = document.createElement("button");
  // listEl.appendChild(removeButton);

}

// const form = document.getElementById("#form");

// form.addEventListener('keyup', addIngredient(event)) {
//     document.getElementById('')
// }


// Program the remove item button to remove it's parent li only
function removeItem() {

  

}



var surpriseRecipe = document.getElementById('surpriseRecipe'); //the button
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
