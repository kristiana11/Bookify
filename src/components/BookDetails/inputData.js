import express from "express";
import "./connect.js";
import { addBookToDB, getBooksFromDB } from "./services/TodoService.js";
import { updateBookToDB} from "./services/TodoService.js";
import cors from "cors";
import { isUserAuthenticated } from "./services/AuthService.js";
import { isAdmin, isUser } from "./services/AuthorizeService.js";
import cookieParser from "cookie-parser";

// TODOs: id, title, author, description, cover image, and price

const app = express();

app.use(express.json());

app.use(cors());

app.use(cookieParser());


// addUser
// method: POST
// request - body: {name, age, email}
// response: 200 - {"message":"success"}
// 500 - {"message":"error"}
app.post("/addUser", async function (request, response) {
  let { name, age, email } = request.body;

  // service/method to insert user to db
  await addUserToDB(name, age, email);

  let token = generateToken({
    email: email,
    roles: ["user"],
  });

  response.cookie("jwt", token);

  response.status(200).send({ message: "success" });
});

// addAdmin
// method: POST
// request - body: {name, age, email}
// response: 200 - {"message":"success"}
// 500 - {"message":"error"}
app.post("/addAdmin", async function (request, response) {
  let { name, age, email } = request.body;

  // service/method to insert user to db
  await addUserToDB(name, age, email);

  let token = generateToken({
    email: email,
    roles: ["user", "admin"],
  });

  response.cookie("jwt", token);

  response.status(200).send({ message: "success" });
});


// addBook
// method: POST
// request - body: {id, title, author, description, cover_image, and price}
// response: 200 - {"message":"success"}
// 500 - {"message":"error"}
async function addBookEndpoint(request, response) {
    let { id, title, author, description, cover_image, price } = request.body;
  
    // method to insert Product into DB
    await addBookToDB(id, title, author, description, cover_image, price);
  
    response.status(200).send({ message: "success" });
  }
  
  app.use("/addBook", isUserAuthenticated, isUser, addBookEndpoint);
  
  // updateBookProducts
  // method: PUT/POST
  // request - body: {status, createdbyuser}
  // response: 200 - {"message": "success"}
  // 500 - { "message":"error" }
  async function updateBookEndpoint(request, response) {
      
      // method to insert Product into DB
      await updateBookToDB();
    
      response.status(200).send({ message: "success" });
    }
    
    app.use("/updateBook", isUserAuthenticated, isUser, updateBookEndpoint);
  
  // ----------------------------ONLY ADMIN------------
  
  // getAllBooks
  // method: GET
  // request - X
  // response: 200 - {data:[{},{},.......]}
  // 500 - {"message":"error"}
  // app.get("/getAllTodos", async function (request, response) {
  //   // method to fetch all the todos from DB
  //   let data = await getTodosFromDB();
  
  //   response.status(200).send(data);
  // });
  
  async function getAllBookEndpoint(request, response) {
    // method to fetch all the todos from DB
    let data = await getBookFromDB();
  
    response.status(200).send(data);
  }
  
  app.use("/getBookProducts", isUserAuthenticated, isAdmin, getAllBookEndpoint);
  
  // ONLY ADMIN------------------------------------------------
  
  let PORT = 3000;
  
  app.listen(PORT, function () {
    console.log("API running at port", PORT);
  });
  
  