# Rick & Morty characters world

![Rick&Morty](https://github.com/Adalab/modulo-3-evaluacion-final-VirginiaMSordo/blob/main/r&m%20readme.jpg?raw=true)

Hello there! I can tell that you are keen to know more about the series characters. Guess what? You are in the right place.
This website allows you to find your favorite characters and get more details about their story.

## Developing

The site is developped with HTML, Sass and React JS. Layout with css flex and grid.
The characters list is fetched from Rick and Morty's API [Api] (https://rickandmortyapi.com/documentation/#get-all-characters)

#### `npm `

To run the app and make contributions on it you must have installed node-moduls in your computer.

## How does it work for users?

### Multiple search options

Find the favorite character searching by name, clicking by status or selecting by specie is allow for the user. It can be reset just by clicking on the reset button attached below and the filter values will return to their starting point. The search will remain in the user's Local Storage. Clicking in the button Detail of each character,the user will be able to access their character details getting to know them better. The Url is ready to be share with everybody that needs to see it.

![](https://github.com/Adalab/modulo-3-evaluacion-final-VirginiaMSordo/blob/main/cap-readme.PNG?raw=true)

## How does it work for developers?

### Components

#### App components:

1. Filters
   -FilterByName
   -FilterByStatus
   -FilterBySpecie
2. UserList
   -UserItem
3. Details
4. NotFound

#### SaaS Components

1. Layout
   -Cards: used in Detail and UserList
   -Filters: used in Filters
2. Pages
   -NotFound: used in NotFound

### Functionalities

- Api
- Search options
- Reset option
- Detail card in another shareable url
- LocalStorage
- Not found page available
- Others : alphabetic order, icon showing status
