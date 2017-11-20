# User-Management



## how to use
 ```
 	npm install
    npm run build
    npm run start	
 ```
 
 ## API's
 
  * /authorize
  		use username and passowrd to login. (username: "admin", "password": "password1234"). returns a token. set it in other request as 'Authorization' header
        
 
  ## /api/
  * POST /user
  * PUT /user
  * DELTE /user/:id
  * GET /user
  * GET /user/:id
 
 {
   "username" : <name>,
   "email": <email>,
   "password": <password>,
   "profilePic": <base64String>
 }
 
 
 P.S : pass image as base 64
 