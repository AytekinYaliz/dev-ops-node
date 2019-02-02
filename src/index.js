import app from './app';
import config from './config';

console.log( 'CONFIG:', config );

app.listen(config.port, () => {
   console.log( `Application is running on port ${config.port}` );
});


