var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(5137, function(){
   console.log('Server running on 5137...');
});