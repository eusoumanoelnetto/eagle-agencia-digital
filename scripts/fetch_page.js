const http = require('http');
http.get('http://localhost:3000/', res => {
  console.log('STATUS', res.statusCode);
  console.log('HEADERS', res.headers);
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log('\n---BODY START---\n');
    console.log(data.substring(0, 8000));
    console.log('\n---BODY END---');
  });
}).on('error', err => {
  console.error('ERROR', err.message);
});
