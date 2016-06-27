var connect = require('connect');
var serveStatic = require('serve-static');
var PORT = process.env.PORT;

console.log("Port = PORT");

connect().use(serveStatic(__dirname, {'index': ['gp-home-portal.html']})).listen(PORT, function(){
   console.log('Server running on $PORT...');
});
