Setup Instructions

Dev build
----------
npm install
npm run dev
Access the dev build http://localhost:3000
Please login using abbas/abbas as username/password

Prod build
----------
npm install
npm run build
npm start
Access the prod build http://localhost:3000
Please login using abbas/abbas as username/password

Starting dev or prod also starts the mock api server on port 3001 
npm-run-all is used to trigger multiple comamnds in parallel

Click on bookmark links and see they are updated in bookmarks page

Project detail
--------------
This application has both apis and the UI

Following apis are mocked using module "node-server"

/bookmarks
	GET- returns all the stored bookmarks
	POST - stores the bookmarks
	
/drivers
	GET - fetches all the drivers

/races
	GET - fetches all the races
	
/authenticate
	POST - Matches the username/password and returns the dummy token
	

UI Layer is built using React, React router, redux, material ui
Folders

api - Consists of all apis which invokes the mock apis and returns the promise

components - Following components builds the netire application
	App
		Application Root component which wraps the entire application with themeProvider, Router, cssbaseline
	common
		Consists common componets Spinner, Icons, PrivateRoute - checks for login before any route
	login
		Login page
	drivers
		DriverPage - Components to display driver details. Built using material ui components
	races
		RacesPage - Components to display race details. Built using material ui components
	bookmarks
		BookmarksPage - Displays stored bookmarks
		BookmarkLink - Stores the boomark
Technology choices
React - UI library to handle the routes and render the components
Redux - UI state management
materialUI - Ready to use accessible responsive react components
		   - https://www.npmtrends.com/antd-vs-grommet-vs-material-ui
		   - Good documentation, Javascript style sheet support, free templates and demos
i18next - for loclaization
ServiceWorker - caches the images and reserves
themes - Implemented using materialUI them provider
json-server - To mock apis
localstorage - to store language and loggedinuser
jest, enzyme - the default of create-react-app for unit testing	
