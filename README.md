# Bookify
Web development project made my Kristiana and Andrew for Web Development II. The project uses NodeJS for the back-end integration and React for the front-end. 

# Project Idea
The purpose of Bookify is to provide an online platform for users to explore, purchase, and read books convenietly. We based this project off of Kindle/Apple Books. Bookify will have a user-friendly interface that encourages user to browse books, search/discovery, user registration, shopping cart and checkout, and users should be able to manage their profile. The target audience for Bookify include book lovers of all age groups who prefer browsing and purchasing books online or individuals who enjoy exploring a range of genres. Book browsing and searching, user registration, and shopping cart and checkout are some of Bookify's functionality. We are also hoping to implement a personalized recommendations to users based on their reading history and preference. Say you liked reading 'Harry Potter and the Sorcerer's Stone', then Bookify would recommend a novel similar.  It could be The Chamber of Secrets or something entirely different.

# Planning
Please visit our [planning](https://github.com/kristiana11/Bookify/tree/main/Planning) page to look at the detailed plan for both the front-end and back-end development of the project.

# Deliverables
Please visit our [deliverables](https://github.com/kristiana11/Bookify/tree/main/Deliverables) page to look at the deliverables for this project. 

# Technologies Used / Special Instructions
We are using MongoDB, Postman (API), and React. One instruction we learned was to 'npm run deploy' which update our GitPages in order to see if our front-end was working. Running the project locally might be hard as you will have to download some of the packages that is already in the node module folder for us (but is ignored in this repository)

# Phase-1 Deliverable Plan
For Phase-1 of our deliverable, we split up the tasks into front-end and back-end of the features instead of doing all front-end and waiting for the back-end. This helped so we could each do a chunk of the work for our project. 

### Features/Functionalities implemented:
+ Navbar (search bar): Kristiana made this navbar and was able to style it to the Bookify look. I was able to make it work functionally in the front-end. I connected it to an API website where you can look up items. Unfortunately, I am unable to implement it fully due to our database not working properly. With that being said, we are taking the databse implementation into phase-2 of our deliverable.
<img width="394" alt="Screenshot 2023-07-30 at 11 44 00 PM" src="https://github.com/kristiana11/Bookify/assets/93414377/75ed7c3d-d6d4-4994-abe5-e36a17babe4b">

+ Book Database: Andrew was in charge of this implementation. To start out, he used the Harry Potter books as a basis for what we wanted to display. This included the id, title, author, description, cover image, and the price of the book. Unfortunately, he was unable to implement it fully in time for phase-1. He was able to create the book title and everything like that.
<img width="227" alt="Screenshot 2023-07-30 at 11 45 58 PM" src="https://github.com/kristiana11/Bookify/assets/93414377/f3a41bd0-4b2f-4751-b3ee-9d0826fe88f5">

+ User Sign In: Corey was in charge of this implementation. He created the beginner logic to allow users to create and sign into their account. He was able to implement the login, but not the create yet. He will do that in phase-2 of our deliverable.
<img width="354" alt="Screenshot 2023-07-30 at 11 48 08 PM" src="https://github.com/kristiana11/Bookify/assets/93414377/dc8d878c-f112-4f28-b852-4ede4196d6e7">


+ What our page looks like so far:
<img width="989" alt="Screenshot 2023-07-30 at 11 45 08 PM" src="https://github.com/kristiana11/Bookify/assets/93414377/247af22f-1b0c-4443-af06-74e757a3e9bf">

# Phase-2 Deliverable Plan
For Phase-2 of our deliverable, we will have more implementations to due in order to finish up our project. Originally we only had three tasks, but with the complications from the first phase, we decided it was best to push it to phase-2.

### Features/Functionalities that will be implemented:
#### From Phase-1:
+ Book Database: Krsitiana/Andrew
+ Book Details: Kristiana/Andrew
+ Create Account: Corey
### Phase-2:
+ Navigation (home page) & Sign Up: Corey
+ Shopping Cart/Checkout: Kristiana
+ Bookshelf: Andrew

### Features/Functionalities implemented:
+ Navbar w/ functionality: Kristiana was able to successfully implemented the search bar to work with the database we created. She was able to fetch the data with axios.get and was able to read the data that Andrew put in the books.json file. As you can see, she added a search button and the book detail that Andrew and her created are available to see.
<img width="586" alt="Screenshot 2023-08-06 at 5 44 52 PM" src="https://github.com/kristiana11/Bookify/assets/93414377/4592211b-0997-43f8-87c3-dcedaa0c392f">
<img width="492" alt="Screenshot 2023-08-06 at 5 47 58 PM" src="https://github.com/kristiana11/Bookify/assets/93414377/fc49f9fc-3345-4a82-85f1-947e3cdd6011">

+ Shopping Cart/Checkout: Kristiana was able to successfully implement this feature. She was able to have a shopping cart icon on the page. When you click it, it opened up the shopping cart to the right of it and you could see the book title, price, a trash icon to delete it, and the total price. The checkout button was available there as well. When clicked, it prompts you to enter in details which will be sent to our database.
![Screenshot 2023-08-06 at 5 48 55 PM](https://github.com/kristiana11/Bookify/assets/93414377/445401d7-0f34-4c26-8b06-1f83c34a6c8c)
<img width="343" alt="Screenshot 2023-08-06 at 5 51 43 PM" src="https://github.com/kristiana11/Bookify/assets/93414377/cf777c3c-bbf1-466c-bc49-add4c0dccedd">
The backend was a bit trickier to connect it all, but Kristiana created a model for the order and set up a POST request to save the order details.When sent to our database, we get a console log showing what was inserted.
<img width="602" alt="Screenshot 2023-08-06 at 5 55 23 PM (1)" src="https://github.com/kristiana11/Bookify/assets/93414377/71c36030-99e8-4133-b3c2-470fd25ad2db">

![Screenshot 2023-08-06 at 5 54 18 PM (1)](https://github.com/kristiana11/Bookify/assets/93414377/086e3828-5800-4971-b926-18ea7b04ba70)

+ Book details: Andrew was in charge of implementing this. He started out with the Harry Potter series so that Kristiana could implement this. Once implemented, Andrew and Kristiana worked on the css together. They stuck with having three books in a row that showed the title, book cover, author, and price. After that happened, Andrew implemented more books from young adult to literature classics.
![Screenshot 2023-08-05 at 1 34 13 PM](https://github.com/kristiana11/Bookify/assets/93414377/d13596f4-bb9e-489a-abe9-8f5e322427b2)

+ Sign in/sign up: Corey was able to implement this feature. Corey added all three of us onto a users.json file. He got it so when you login, if an account does not exist and you try, there will be an error message. Since we implemented it through a json file, we could not implement adding new users to it from the site itself. 
![pasted image 0](https://github.com/kristiana11/Bookify/assets/93414377/3dd9f774-e402-4499-ab24-e43f699f31cd)
Corey coded so the project login feature will fetch data from the json file and turn it into an array. It will notify if they are signed in.
![pasted image 0 (1)](https://github.com/kristiana11/Bookify/assets/93414377/77402a60-06e2-4ec1-b691-70535b00da49)
Corey also implemented a feature to allow a user to sign up. Although we could not get the username email or password to save to the .json file or a database, the logic is implemented to check to see if those inputted credentials were unique from the .json file.
![image](https://github.com/kristiana11/Bookify/assets/102387612/64a61e4d-70f7-4d19-98b6-82c033d9b2ff)
![image](https://github.com/kristiana11/Bookify/assets/102387612/a512eae4-f165-4e4c-9e34-5e93f83bbafe)




# Overview of Final Project Proposal Plan
Our final plan for Bookify is to implement a list of React components like a navigation bar,book listing/details, user authentication, and a shopping cart/checkout This requires us to know back-end and front-end development. We have functions and logics for each component that is listed in our Group Project Final Draft in our planning foler. This will help us keep track of which function is for what. With that being said, we will also have API request-response formats and endpoint routes. We want our design to be user-friendly. We are basing it off of a simple Kindle or Apple books. Having a simple way of looking at their bookshelf, searching up books, and loggin in/signing out. We originally wanted a ton of books, but to make it on a do-able scale, we decided to do the Harry Potter books for right now until we implement everything.

# Final Implementations
Our final implementation included a multitude of what we had planned to include. We were able to make a search bar that takes input and lists all available books based on what was typed in. The shopping cart feature can hold a user's items and calculate the total price. It also allows for the user to delete from the cart. The checkout feature includes all necessary components, including the ability to have every field required to fill out, and send order details to the database to store. The users can also login to an account that exists into our .json file. The user can also check to see if they can sign up with their account on the website. Overall, we completed a lot of what we aspired this website to be.

# Team Information
### Andrew Ortega
#### GitHub: aortega789
I am from Los Angeles, California. I am a double major, Mathematics and Computer Science. My interesting fact is that I am a gamer.  With my degrees, I want to go into the gaming industry and do what I love, which would be to make video games and work on them.

### Kristiana Kirk
#### GitHub: kristiana11
I am from Colorado Springs, Colorado. My major is in Computer Science with a minor in Cybersecurity. A fun fact about me is that I love the outdoors (climbing, biking, hiking, snowboarding, etc). With my degree, I know I want to do something with front-end and talking to people.

### Corey Moreno
#### GitHub: CoreyjMoreno
I am from Temecula, California. My major is in Computer Science with a minor in Spanish. Fun fact about be is that I am an EDM producer. With my major, I want to go into web developement and on the side create mods for video games.
