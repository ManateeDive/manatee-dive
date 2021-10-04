var recipeList = document.querySelector('ul');
var getRecipe = document.getElementById('getRecipe');

function getApi() {
var requestUrl = "https://api.spoonacular.com/recipes/complexSearch?apiKey=6b2994b0da2e49f2a7e66de1133a594f"

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