# Project Proposal

## Requirements:
### Purpose: 
The purpose of Bookify is to provide an online platform for users to explore, purchase, and read books convenietly. We based this project off of Kindle/Apple Books.

### Target Audience:
The target audience for Bookify include book lovers of all age groups who prefer browsing and purchasing books online or individuals who enjoy exploring a range of genres.

### Desired Functionality:
+ Browsing and searching
+ User registration and sign in
+ Shopping cart and checkout
+ Personalized recommendation
+ User profile management
+ User bookshelf 

### \*Please note that the proposed plan for front-end and back-end development is subject to revision as we cover NodeJS and backend integration later in the course*

## Front-End Development:
We intend on using React to develope the front-end.

### Project Setup and Layout:
+ Set up a new React project (Bookify)
+ Create basic file structure and install dependencies that are necessary
+ Setup initial layout of application, including the homepage and navigation menu

### Book Listing and Search:
+ Develop book listing page to display (grid of books)
+ Implement search functionality to allow users to search for books based on criteria we decide

### Search Criteria
+ Locate book titles similar to how they are searched up
+ If book does not exist, list is blank
+ If book is searched, return book title

### Book Details and User Authentication:
+ Create a detailed book page to display book information
+ Implement user authentication functionality
  + Sign In
  + Login

### Shopping Cart and Checkout:
+ Develop the shopping cart functionality to allow users to add and remove books
+ Implement the checkout process with payment options

### User Profile and Preferences:
+ Design and develop the user profile page to display user information
+ Implement preferences management
  + Saved searches
  + Favorite genres

### User Bookshelf:
+ Implement the Bookshelf feature, allowing users to add books to their personal bookshelf
+ Create a dedicated page to display the user's bookshelf with the added books
+ Add functionality to remove books from the bookshelf

## Back-End Development:
We intend on using NodeJS to develope the back-end.
### Back-End Setup and User Authentication:
+ Set up a Node.js project and install necessary dependencies
+ Implement user registration, login, and authentication

### Book Management and Database Integration:
+ Integrate a database (TBD) to store book and user information
+ Implement API endpoints for book details, searching, and managing the shopping cart

### Order Processing and Payment Integration:
+ Integrate a payment gateway API (TBD) for secure transactions
+ Implement API endpoints for handling payment requests and order processing

### User Profile and Preferences:
+ Implement API endpoints for user profile management
+ Handle preferences management, such as saved searches or favorite genres

### User Bookshelf:
+ Implement API endpoints to handle adding and removing books from the user's bookshelf
+ Integrate bookshelf functionality with user profiles

### API Usage
+ Use of microservice API's to sell books that interest the user
+ Use of private API's so that the interests and books are recommendations for a specific person
### Testing and Documentation:
+ Perform testing components for front-end and back-end
