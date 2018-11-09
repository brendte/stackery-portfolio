const fs = require('fs');

exports.handler = async event => {
  console.log(event);

  const responseBody = fs.readFileSync('./welcome.html', 'utf8');

  const response = {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html'
    },
    body: responseBody
  };

  return response;
}
