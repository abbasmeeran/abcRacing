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
	
ABC racing company demo has  3 main routes to view hte content
/login
	Rendered by Components/Login
	Logsin the  user
/drivers
	Rendered by Components/drivers/DriverPage
	Displays al lthe drivers of racing company
	Each driver can be bookmarked
/races
	Rendered by Components/races/RacePage
	Displays hte history of races
	Each race can be bookmarked

/bookmarks
	Rendered by Components/bookmarks/BookmarkPage
	Displays al lthe bookmarks of loggedin user