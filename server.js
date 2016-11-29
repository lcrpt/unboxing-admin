import express from 'express';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(methodOverride('X-HTTP-Method-Override'));
app.use(express.static(__dirname + '/app'));

app.get('*', (req, res) => {
	res.sendfile('./app/index.html');
});

app.set('port', process.env.PORT || 8000);

app.listen(app.get('port'), () => {
  console.log('App listening on port', app.get('port'));
});
