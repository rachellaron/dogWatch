// if(process.env.NODE_ENV !== 'production'){
//   require('dotenv').config();
// } // Ask Alex re this 


const express = require('express')
const session = require('express-session');


// Optional if you want to use EJS to build the base of your app
// Still use your API in the front end as much as possible
// app.set('view engine', 'ejs');
// app.set('views', './views');

// const sess = {
//   secret : process.env.SESSION_SECRET,
//   cookie : {}
// }

// if(process.env.NODE_ENV === 'production'){
//   sess.cookie.secure = true;
//   // app.set('trust proxy', 1); // not sure if strictly required
// }


// middlewares
const logger = require('./middlewares/logger')
const errorHandler = require('./middlewares/error_handler');

// controllers
const usersController = require('./controllers/users_controller.js');
const parksController = require('./controllers/parks_controller');

const app = express()

// process.env.PORT is for Heroku
const port = process.env.PORT || 3000;

// API KEYS should be in your ENV
// ON HEROKU, you would set this as an environment variable
// Locally, we used that development thing called dotenv

// const BING_MAPS_KEY = process.env.BING_MAPS_API_KEY;

// start the web server
app.listen(port, () => {
  console.log(`listening on port ${port}`)
})

// app.use(logger)
// //    |
// //    V
// // (middleware) builtin mini router for static files
app.use(express.static('client'))
// //    |
// //    V
// // parse JSON Body to req.body

app.use(express.json())
// app.use(session(sess));  // From Alex's session on Sessions

// //    |
// //    V
// // routes (middleware)

// app.use('/api/users', usersController);

// app.use('/api/parks', parksController);
// //    |
// //    V
// //--handle any errors that are thrown _anywhere_ in the stack of middlewares
// app.use(errorHandler);

// /api/third-party/spoontacular/recipes?name=Whatever
// app.get('/api/third-party/spoontacular/recipes', (req, res)=>{
//   axios.get('https://spoontactular.com/?apiKey')// + add whatever the front end sent via req.params
// })