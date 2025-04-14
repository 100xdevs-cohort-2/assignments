What are Route handlers?

You often define methods which you expect to run when the user requests a particular thing and now you might seem to be happy
if you can somehow group them together so that you need not specify each and every combination of methods and routes

For example, you might want to serve the same resource even when user tries to give PUT request or a GET request on 
https://domain/app/users

These methods , which handle all these requests to various routes are called Route handlers.
The way Express defines on what handler to be attached to what routes is bit tricky. Sometimes you might endup attaching two different handlers which might match the same route. 

