# Recipe Builder

# User Story
```
AS A home cook
I WANT to enter ingredients that I have at home
SO THAT I find recipes that use them.

```

## Acceptance Criteria

```
GIVEN a dashboard with text form input
WHEN I input an ingredient into the fom
THEN I am shown the ingredient in a list with a remove item button

GIVEN an ingredient element existing
WHEN I input another ingredient
THEN it is appended to the list

GIVEN more than two ingredients in the list
WHEN I click 'search recipe' button
THEN I am presented with a list of recipes that use the ingredients

GIVEN an element in a list
WHEN I click on the 'X'
THEN the item is removed from the list

GIVEN a "surprise me" button
WHEN I click the surprise me button
THEN I get a single random recipe link in a card

GIVEN I have input a list of ingredients
WHEN I leave and return to the page
THEN my list of ingredients (not recipes) is still available

GIVEN a footer with the 'random food joke' button
WHEN I click on the button
THEN a joke appears at the end of the page
```


# Links

We will be using the following APIs:
[Spoonacular API](https://spoonacular.com/)
[Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)
[Tone.js](https://tonejs.github.io/)

and the CSS framework [Materialize](materializecss.com)

# Screenshots

[Screenshot](./assets/screenshot.png)
