var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen($PORT, function(){
   console.log('Server running on $PORT...');
});