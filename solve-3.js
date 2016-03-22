var argv = require('yargs')
 .usage('Usage: node $0 --l=[num] --b=[num]')
 .demand(['l','b'])
 .argv;
 
 var rect = require('./rectangle-2);
 
