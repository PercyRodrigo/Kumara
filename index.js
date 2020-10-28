const express = require('express');
const ehbs = require('express-handlebars');
const path = require('path');

const app = express();

//config
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', ehbs({
    defaultLayout: 'main', //nombre de la plantilla principal
    layoutsDir: path.join(app.get('views'), 'layouts'), //identifica la carpeta layouts
    partialsDir: path.join(app.get('views'), 'partials'), //identifica la carpeta partials
    extname: '.hbs', 
    helpers: require('./lib/handlebars') // funciones de handlebars
}));
app.set('view engine', '.hbs');

//server
app.listen(app.get('port'), () => {
    console.log('Server on port: ', app.get('port'));
});

//routes
app.use(require('./routes/index'));

app.use(express.static(path.join(__dirname, 'public')));