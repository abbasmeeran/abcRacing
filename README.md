
# Setup Instructions
## Dev build
1. npm install
2. npm run dev
3. Access the dev build http://localhost:3000
4. Login using abbas/abbas as username/password
## Prod build
1. npm install
2. npm start
3. Access the prod build http://localhost:3000
4. Login using abbas/abbas as username/password

- Starting dev or prod also starts the mock api server on port 3001 
- npm-run-all is used to trigger multiple comamnds in parallel
- Click on bookmark links and see they are updated in bookmarks page

## Different themes and language urls
- Themes and translations are loaded based on language.
- Language is honored using query params, cookies, localstorage etc.
- Following is one of the patternusing query param
	- localhost:3001?lng=fr
	- localhost:3001?lng=en

# Project detail
Application has apis and the UI components

## APIs
Apis are mocked using module "node-server"
1. /bookmarks
	- GET- returns all the stored bookmarks
	- POST - stores the bookmarks
2. /drivers
	- GET - fetches all the drivers
3. /races
	 - GET - fetches all the races
4. /authenticate
	- POST - Matches the username/password and returns the dummy token

##  Front End
UI Layer is built using React, React router, redux, material ui

### Folders.
#### api 
Consists of all apis which invokes the mock apis and returns the promise
#### components 
Application is built using the following Components

1. App
	- Application Root component which wraps the entire application with themeProvider, Router, cssbaseline
2. common
	 - consists common componets Spinner, Icons, PrivateRoute(checks for login before any route)
3. login
	- Login page
4. Drivers
	- DriverPage
		- Components to display driver details
5. Races
	-  RacesPage
		- Components to display race details
6. bookmarks 
	- BookmarksPage - Displays stored bookmarks
	- BookmarkLink - Stores the boomark

## themes
- langugae specific themes are defined. 
- They are applied using material UI theme provider from root component APP

## i18n
- i18n is implemented using library [i18next](https://www.i18next.com/overview/getting-started "i18next")
- They are configured and initialized from index.js
- Hooks are used to access the translation functions inside components

# Technology choices
 - React - UI library to handle the routes and render the components
 - Redux - UI state management
 -  materialUI 
	 - Ready to use accessible, responsive react components
	 - well written  documentation, Javascript style sheets support, community,  free templates and demos
	 
- i18next - for loclaization 
- ServiceWorker
	- caches the images and serves onconsequent requests
- themes
	- Implemented using materialUI themeprovider
-  json-server
	- Wrapper on express to mock apis from predefined mockData
- localstorage  
	- stores language and logged in user 
- Unit tests
	- jest, enzyme - the default of create-react-app for  unit testing
