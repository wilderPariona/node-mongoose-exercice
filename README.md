# Nodejs - Express - MongoDB - practice
## Module 0 Setup

 - [x] Fork the repo
 - [x] Clone the repo on your local machine
 - [x] run npm install
 - [x] open the project folder
 - [x] execute `npm run test:module1` to start working
 
**Your goal is to create all the files and functions to pass all tests**

 ### Creating folder structure

 - [x] In the main directory, create a folder named src.
 - [x] Inside this folder add 4 folders named as follows: config, controllers, models, and routes. 

## Module 1 Server Creation & Project structure
To verify your work as you progress through this module, run the following command at the root of the project:`npm run test:module1`
The output will show the results of tests related to module 1.
> test are case sensitive

### 1.1. Set up the enviroment variables

 - [x] Create an enviroment variable called `PORT` and set the value to `4000`.
 - [x] Configure the enviroment variables in the index.ts file (you might need to install and configure `dotenv` library `npm i dotenv`).

### 1.2 Setting up the server

 - [x] Create a file `app.ts`.
 - [x] Import express and create an instance in a `app` variable.
 - [x] Export `app` as default.
 - [x] Create an `index.ts` file and import `app`.
 - [x] In the `index.ts` start the listening method.
 - [x]  Set the log message on the listening method using the `PORT` enviroment variable.
	* The message should say: `Server is running on port...` use the enviroment variable `process.env.PORT` to show the port.


## Module 2 mongoose configuration

To verify your work as you progress through this module, run the following command at the root of the project: `npm run test:module2`
The output will show the results of tests related to module 2.
> test are case sensitive

### 2.1 Add Mongoose to the project

 - [x] Install mongoose through `npm install mongoose`.

* Create an enviroment variable called MONGO_URI and set the value to the local connection for your database.
    
### 2.2 Create the connection to Mongoose  

 - [x] Create a `config.ts` file in the `config` folder.
 - [x] In `config.ts`, create a function that receive as parameter the
       URL to connect the database.
 - [x] add a mongoose connection with the function `connect`, passing the mongodb local URL where you'll create a database. 
 - [x] use the `on` and `once` methods from connection to verify the database connection or catch the error. (use `on` for error and `once`for connection).
 - [x] Import the function and invoke it in `index.ts` file passing the `MONGO_URI` env as the parameter to the function 

## Module 3 Schema Creation & First Route

To verify your work as you progress through this module, run the following command in the root of the project:`npm run test:module3`

The output will show the results of tests related to module 3.
> test are case sensitive


## 3.1 Create the model and schema

 - [x] Create a `bookModel.ts` file in the `models` folder.
 - [x] In `bookModel.ts`, import mongoose and then create a new variable  `schema` which will hold the Schema constructor. Then use this variable to create a new Schema where we'll add the types for each of our keys that our database takes.
 - [x] Create the BookSchema variable with these elements:
    *	A `title` item with String type, and make this one required.
    * A `overview` item with String type, and make this one required.
    * A `category` item with String type.
    * A `price` item with Number type, and make this one required.
    * A `created_date` item with Date type, and make this with a default value of Date.now.
  
 - [x] Create an `IBook` interface with the same properties and types.
	     * Do not forget to extends from `Document` .
 - [x] Create a new variable `bookModel` and initialize it with
       `mongoose.model`.
 - [x] Pass `book` as a first argument for the model and pass the `Bookschema` as a second argument.
 - [x] Set the model type as `IBook`.
 - [x] Export the interface and the model.

## 3.2 Creating controler for route
 
 - [x] Create a `bookController.ts` file in the `controllers` folder.
 - [x] In `bookController.ts`, import the `bookModel` we created previously  as `Book`.
 - [x] Create an exportable function addNewBook (tip: use arrow functions, this function should be async). Inside of this function do the following:
	 - [x] Create a new variable `newBook` which will equal a `new Book()` 
	 - [x] Use this `newBook` variable to save the new book into the database. You need to pass the `req.body` in the arguments.
	 - [x] save the response in a `book` variable.
	 - [x] Use a try-catch block to catch the error if the passed req.body is wrong or doesn't follow our schema.
	 - [x] Make sure the function is async and wait for the response.
	 - [x] Send the response with status `200` and send the `book` as a json.

## 3.3 Creating route for adding item

 - [x] Create a `bookRoutes.ts` file in the `routes` folder.
 - [x] In `bookRoutes.ts`, import the `Router`from express and the `addNewBook` controller. 
 - [x] Create a new instance of router, and save it in a `router` variable.
 - [x] Add the first endpoint `.post()` and pass the `/books` as first argument  and `addnewBook` as second argument.
	* Make sure you export your router by default so we can use it elsewhere in this application.
 - [x] Finally, in `index.ts`, import the `router`  as `bookRouter`and pass router as a middleware to the main app.

## 3.4 Manual testing

 - [x] You can use a http client (like postman) to create new books and save them into the database
 - [x] Make sure set the `express.json()` middleware correctly.

# Module 4 Basic CRUD Endpoints - 1

To verify your work as you progress through this module, run the following command in the root of the project: `npm run test:module4`
The output will show the results of tests related to module 4.
> test are case sensitive

## 4.1 Add controller to pull a list of items

 - [x] In `bookController.ts`, create an exportable new function `getBooks` which will be the controller to get all our books from the database. 
* Inside of this function do the following:
- [x] Use the `Book.find()` function of the model to get all the books.
- [x] save the response in a `books` variable. The type of books should be an array of IBook.
- [x] Use a try-catch block to catch the error and handle the errors.
- [x] Make sure the function is async and wait for the response.
- [x] Send the response with status `200` and send the `books` as a json.

## 4.2 Add route to pull a list of items

 - [x] In `bookRoutes.ts`,  import the new controller `getBooks` function we just created in the previous task.
- [x] Under the route `/books`, create a new endpoint `.get()` and pass the argument `getBooks` as controller.

## 4.3 Add controller to pull a single item

 - [x] In `bookController.ts`, create an exportable new function `getBookById` which will be our controller to get one book with an ID from the database. 
 * Inside of this function do the following:
 - [x] create a `bookId` variable and assign the book id comming in the params (`req.params.id`)
 - [x] Use the Boook.findById() function of the model and pass the `bookId` variable as a parameter of this function.
 - [x] Save the response in a `book` variable. The type of `book` should be `IBook` or `null`.
 - [x] Use a try-catch block to catch the error and handle the errors.
 - [x] Make sure the function is async and wait for the response.
 - [x] Send the response with status `200` and send the `book` as a json.
    
##  4.4 Add route to pull a single item

 - [x] In `bookRoutes.ts`, make sure you import the new controller `getBookById` function we just created in the previous task.
* Then in the function routes, do the following:
 - [x] Under the route `/books/:id`, create a new endpoint `.get()` and pass the argument `getBookById` as controller.

# Module 5 Basic CRUD Endpoints - 2

To verify your work as you progress through this module, run the following command in the root of the project:`npm run test:module5`.
The output will show the results of tests related to module 5.
> test are case sensitive

## 5.1 Add controller to update a single item

- [x] In `bookController.ts`, create an exportable new function `updateBook`. Inside of this function do the following:
- [x] create a `bookId` variable and assign the book id comming in the params (`req.params.id`).
- [x] create a `newBookInfo` variable and assing the book info comming from the body.
 - [x] Use the `Book.findOneAndUpdate()` function of the model and pass `_id` with `bookId` as a parameter of this function along with `newBookInfo` and the options to the function `new: true`. 
 *	To understand the structure of this function pay extra attention to its docs: https://mongoosejs.com/docs/api.html#model_Model.findOneAndUpdate
- [x] Save the response in a `book` variable. The type of `book` should be `IBook` or `null`.
 - [x] Use a try-catch block to catch the error and handle the errors.
- [x] Make sure the function is async and wait for the response.
- [x] Send the response with status `200` and send the `book` as a json.

## 5.2 Add route to update a single item

 - [x] In `bookRoutes.ts`, make sure you import the new controller `updateBook` .
 - [x] Under the same route `/books/:id`, add a new `.put()` endpoint in this new route and pass the argument `updateBook`.

## 5.3 Add controller to delete a single item
- [x] In `bookController.ts`, create an exportable new function `deleteBook` . Inside of this function do the following:
- [x] create a `bookId` variable and assign the book id comming in the params (`req.params.id`).
- [x] Use the `Book.deleteOne()` function of the model and pass `_id` with `bookId` as a parameter of this function.
- [x] Use a try-catch block to catch the error and handle the errors.
- [x] Make sure the function is async and wait for the response.
- [x] Send the response with status `200` and send  json with a  `message` property and value`book successfully deleted`.

## 5.4 Add route to delete a single item

 - [x] In `bookRoutes.ts`, make sure you import the new controller `deleteBook` .
 - [x] Under the same route `/books/:id`, add a new `.delete()` endpoint in this new route and pass the argument `deleteBook`.
