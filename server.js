import express from 'express';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import cors from 'cors';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(__dirname + '/app'));

app.get('*', (req, res) => {
	res.sendfile('./app/index.html');
});

app.set('port', process.env.PORT || 8000);

app.listen(app.get('port'), () => {
  console.log('App listening on port', app.get('port'));
});
