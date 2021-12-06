# Login system API

Login system with authentication and authorization for admin users. Feel free to use this repo for testing or making your own project.

**Languages and frameworks used**

<img align="left" width="46px"  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" /><img align="left" width="46px"  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" />
<img align="left" width="46px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" />

<br/><br/>

**Libraries**

* [Joi](https://joi.dev)
* [Bcrypt](https://www.npmjs.com/package/bcrypt)
* [JSON Web Token](https://www.npmjs.com/package/jsonwebtoken)
* [Mongoose](https://mongoosejs.com)
* [CORS](https://www.google.com/search?client=opera&q=cors+library&sourceid=opera&ie=UTF-8&oe=UTF-8)
* [Lodash](https://lodash.com)
* [Express async errors](https://www.npmjs.com/package/express-async-errors)
* [Config](https://www.npmjs.com/package/config)

## Installation

To download all the dependencies needed run
   ```sh
   npm install
   ```
## Usage

API Endpoint for the users is 
   ```sh
   /api/users
   ```
API Endpoint for the authentication is 
   ```sh
   /api/auth
   ```
You can register a user in the users endpoint with postman by submitting a request, fill the body with the next schema:
  
* **username:** minimum of 5 characters 
* **email:** this has to be a valid email
* **password:** minimum of 5 characters

Otherwise, if you want to test the login in the authentication endpoint fill the body with the next schema:
  
* **email:** this has to be a valid email
* **password:** minimum of 5 characters

<p align="right">(<a href="#top">back to top</a>)</p>
