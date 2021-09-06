const xssFilters = require('xss-filters'); 
const util = require('util');  
const app = require('http');
app.get('/', (req, res) => {   const unsafeFirstname = req.query.firstname;   
// const safeFirstname = xssFilters.inHTMLData(unsafeFirstname);    
res.send(util.format('<h1>Tom%s</h1>', unsafeFirstname)); });  

app.listen(3000);