const app = require('./app');
const server = app.listen(8000, function(){
    console.log(`Express is running on port ${server.address().port}`);

});