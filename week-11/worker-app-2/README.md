
## Advance Blogging app
Same as the first assignment, but you need to support `tags` for every blog post as well

### User Management Endpoints:
 - POST /users/signup - User registration.
Inputs: username, email, password
Actions: Create a new user account. Perform validations and return a success message or error messages (e.g., email already in use, password requirements not met).

 - POST /users/signin - User login.
Inputs: email, password
Actions: Authenticate the user. Return a token (JWT) for authorization in subsequent requests if successful, or an error message if authentication fails.
Blog Platform Endpoints:

 - GET /posts - Retrieve all blog posts.
Actions: Fetch a list of all blog posts. Can be public or user-specific based on authentication.

 - POST /posts - Create a new blog post.
Inputs: title, body, tags (array of string)
Actions: Create a new blog post associated with the authenticated user. Require authentication.

 - GET /posts/:id - Retrieve a single blog post by ID.
Actions: Fetch details of a specific blog post. Can be public or have additional details/edit capabilities for the owner.

 - PUT /posts/:id - Update a blog post by ID.
Inputs: title, body, tags (array of string)
Actions: Update the specified blog post if the authenticated user is the owner. Require authentication.

 - DELETE /posts/:id - Delete a blog post by ID.
Actions: Delete the specified blog post if the authenticated user is the owner. Require authentication.

## Database
Try using `prisma` as the ORM and Postgres as the provider. You will have to use `relationships` between the `tags` and the `blogs` table. 

## Assumption
You can assume that you only support 10 tags that the user can choose from. User doesn't need to have the ability to add more tags (even better if you implement that)