'use strict';
const Hapi = require('@hapi/hapi');
const Infiniteloop = require('infinite-loop');
const init = async () => {
  const server = Hapi.server({
      port: 8080,
      host: '0.0.0.0'
    });
    server.route({
      method: 'GET',
      path: '/',
    handler: (request, h) => {
      return 'API is running!';
  }
 });

 server.route({
  method: 'GET',
  path: '/hello',
handler: (request, h) => {
  return 'API is running at helloworld!';
}
});

2
 await server.start();
 console.log('Server running on %s', server.info.uri);
//  var loop = new Infiniteloop();
//  //use loop.add to add a function
//  //fisrt argument should be the fn, the rest is the fn's arguments
//  loop.add(say, 'Looping', ' Forever!');
//  //make it run
//  loop.run();
};

function say(word1, word2){
  console.log(word1 + word2);
};

process.on('unhandledRejection', (err) => {
 console.log(err);
 process.exit(1);
});
init();