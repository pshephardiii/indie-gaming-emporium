# Paul's Indie Gaming Emporium

## Description:

A full-stack react app that's set up for game browsing and purchases. Includes cart and checkout functionality, user authentication and authorization, as well as complete styling. Fifteen (totally made up!) games have been seeded in with the relevant genres, descriptions, and images.

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

## Route Explanations

### Users and other Models

The routes for users include POST routes to allow a user to either sign up or log in and a GET route that checks the JSON web token.

The routes for games, genres, and game descriptions are all GET resquests that gain access to either a specific component or an index of them.

### Orders

The routes for orders include two GET requests for checking the current state of the cart and the history and POST requests that add items to the cart, set the quantity of items in the cart, and user checkout.

## App Structure

The app has six pages that extend directly from the index, including the Home Page, the Authentication Page, the Index Page, the Show Page, the Order History Page, and the Cart Page.  

The genre list and genre list item components flow down from the Home Page.

The various game genre index components (like Adventure Index) flow down from the Index Page, as well as the game list and game list item components.

The game and game description components flow down from the Show Page.




