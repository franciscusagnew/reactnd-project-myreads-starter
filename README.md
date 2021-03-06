# My Bookshelf Project

Student Project for Google Front-End Development Nanodegree Program at Udacity made with React.

## Table of Contents

* [How to Run Application](#how-to-run-application)
* [About the project](#about-the-project)
* [Contributing](#contributing)

## How to Run Application

**Run it on your local machine:
* download or clone the repository
* next follow these [instructions](#instructions)

### Instructions
**Running application on local machine**

To get started:

* `cd` _react-project-myreads_ folder
* install all project dependencies with `npm install`
* start the development server with `npm start`
* with your server running, visit the site: `http://localhost:3000` if not open automatically

## About the project

In this application, the main page displays a list of "shelves" (i.e. categories), each of which contains a number of books. The three shelves are:

* Currently Reading
* Want to Read
* Read

Application is created to help you to managing your personal library and stack of books. There is 7 books as default but:

- You can search for new books in the `/search` page or click **+** button on the right bottom corner.

- Use menu below book cover to select shelf **Reading**, **Want to**, **Read** to put the book on right one

- **None** removes the book from each shelf in main page

#### Specification

This is the starter template for the final assessment project for Udacity's React Fundamentals course. The goal of this template is to save time by providing a static example of the CSS and HTML markup that may be used, but without any of the React code that is needed to complete the project. Student can choose to start with this template, His job is to add interactivity to the app by refactoring the static code in this template.

#### Backend Server

To simplify development process, there is provided a backend server for students to develop against. The provided file [`BooksAPI.js`](src/utils/BooksAPI.js) contains the methods that will be needed to perform necessary operations on the backend like:
* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

#### Important
The **backend API** uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).