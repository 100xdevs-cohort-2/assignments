SVN Handles for node.
I got tired of all the spawn() calls needed to run our custom Continuous Integration server.

Usage
------
`npm install svn`
```js
var SVN = require('svn');
var svn = new SVN('./working_copy');

svn.get_remote(function(error, result){
  console.log('remote is:', result);
});

svn.log({limit: 5}, function(error, result){
  console.log('The last 5 commit messages are:');
  result.forEach(function(rev){
    console.log(rev.message);
  });
});

svn.log({start: 4426, end:'HEAD'}, function(error, result){
  console.log('Changes since revision 4426:');
  result.forEach(function(rev){
    console.log(rev.message);
  });
})
```
