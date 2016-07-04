var connect = require('connect');
var serveStatic = require('serve-static');
var PORT = process.env.PORT;

console.log("Port = PORT");

connect().use(serveStatic(__dirname, {'index': ['index.html']})).listen(PORT, function(){
   console.log('Server running on $PORT...');
});
