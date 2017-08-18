## Project Overview
In the MyReads project, you'll create a bookshelf app that allows you to select and categorize books you have read, are currently reading, or want to read. The project emphasizes using React to build the application and provides an API server and client library that you will use to persist information as you interact with the application.

Either fork and clone the starter template or use create-react-app to create a new application. Even if you create your own application from scratch you'll still need to use the booksAPI.js file that comes with the starter template to interact with the backend API. Instructions for using the API methods are provided in the README in the starter template repository.

The starter template contains all the CSS and HTML markup that may be used but omits the React code that is required to complete the project. This can save you some time if you don't wish to write all the CSS and HTML from scratch. The provided code will demonstrate a static HTML page of the finished application, but with no interactive functionality.

App Functionality
In this application, the main page displays a list of "shelves" (i.e. categories), each of which contains a number of books. The three shelves are:

Currently Reading
Want to Read
Read
![alt text](https://d17h27t6h515a5.cloudfront.net/topher/2017/May/590c0f12_react-project1-a/react-project1-a.png)

Each book has a control that lets you select the shelf for that book. When you select a different shelf, the book moves there. Note that the default value for the control should always be the current shelf the book is in.

![alt text](https://d17h27t6h515a5.cloudfront.net/topher/2017/May/590c0f26_react-project1-b/react-project1-b.png)

The main page also has a link to /search, a search page that allows you to find books to add to your library.

The search page has a text input that may be used to find books. As the value of the text input changes, the books that match that query are displayed on the page, along with a control that lets you add the book to your library. To keep the interface consistent, you may consider re-using some of the code you used to display the books on the main page.

![alt text](https://d17h27t6h515a5.cloudfront.net/topher/2017/May/590c0f40_react-project1-c/react-project1-c.png)

When a book is on a bookshelf, it should have the same state on both the main application page and the search page.

![alt text](https://d17h27t6h515a5.cloudfront.net/topher/2017/July/595d48a9_correct-use-of-state/correct-use-of-state.gif)

The search page also has a link to / (the root URL), which leads back to the main page.

When you navigate back to the main page from the search page, you should instantly see all of the selections you made on the search page in your library.


## Getting Started
```
git clone 'https://github.com/cagigas/MyReads-A-Book-Lending-App'
cd MyReads-A-Book-Lending-App
npm install
npm start
```
