# Paul's Indie Gaming Emporium

## Description:

A full-stack react app that's set up for game browsing and purchases. Includes cart and checkout functionality, user authentication and authorization, as well as complete styling. Fifteen (totally made up!) games have been seeded in with the relevant genres, descriptions, and images.

## Live Link

https://cafe.paulshephard.me/

## User Stories:

+ "As a user, I want to be able to easily navigate around the site and browse the available games by genre."

+ "As a user, I want to be able to add games to the cart directly from the page display, but I also want to be able to edit the cart details on a page made solely for that purpose."

+ "As a user, I want to be able to log in and out easily."

+ "As a user, I want to have access to an in depth description of each game as well as the price and artwork."

+ "As a user, I want the styling to remind me that I'm in an indie gaming commerce space."

## App Installation Instructions:

**Global installations needed: node.js mongodb**

+ Install Gulp Globally with ```npmi -g gulp-cli```

+ Start the dev server with ```npm run dev```

+ Deploy for production with ```npm start```

## Model Attributions Diagram

![Model Attributions Diagram](https://i.imgur.com/U6J4IQ3.png)

## Route Explanations

### Users and other Models

The routes for users include POST routes to allow a user to either sign up or log in and a GET route that checks the JSON web token.

Sign up (POST): ```/api/users/```

Log in (POST): ```api/users/login```

Check Token (GET): ```api/users/check-token```

The routes for games, genres, and game descriptions are all GET resquests that gain access to either a specific component or an index of them.

Index games by genre (GET): ```api/games/genre/:genreId```

Show game (GET): ```api/games/:id```

Index all genres (GET): ```api/genres/```

Show index (GET): ```api/genres/genreId```

Show game description (GET): ```api/descriptions/:id```

### Orders

The routes for orders include two GET requests for checking the current state of the cart and the history and POST requests that add items to the cart, set the quantity of items in the cart, and user checkout.

Get cart (GET): ```/api/orders/cart```

Get order history (GET): ```/api/orders/history```

Add to cart (POST): ```/api/orders/cart/:id```

Checkout (POST): ```/api/orders/cart/checkout```

Set game quantity in cart (PUT): ```/api/orders/cart/qty```

## Frontend App Structure 

### Data Flow Diagram

![Data Flow Diagram](https://i.imgur.com/JFDpO8c.png)

The data flows from the router index in the direction of the arrows.

### Frontend Navigation Diagram

![Navigation Diagram](https://i.imgur.com/gvgL88y.png)

The dotted arrows represent navigation links from one component/page to another.

## Application Screenshots

### Home Page

![Home Page Screenshot](https://i.imgur.com/Rkxr0eG.png)

### Index Page - Adventure

![Index Page - Adventure](https://i.imgur.com/9TBXjdC.png)

### Show Page - Oblivion Rainbow

![Show Page - Oblivion Rainbow](https://i.imgur.com/STuvecG.png)

**NOTE**: the Show Page screenshot crops out the Navigation Bar that is above the game art and a majority of the game description below the "Add to Cart" button.
