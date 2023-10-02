
<p align="center">

  <h3 align="center">Food Recipes Rest API</h3>
  <p align="center">
    <image align="center" width="200" src='https://github.com/NisrinaNataraharja/FE-Food-Recipes/blob/main/public/images/screenshoot/logo.png' />
  </p>


<!-- TABLE OF CONTENTS -->
## Table of Contents

- [Table of Contents](#table-of-contents)
- [About The Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Contributing](#contributing)
- [Related Project](#related-project)
- [Contact](#contact)



<!-- ABOUT THE PROJECT -->
## About The Project

Food Recipes Rest API is server api that used in [`Food Recipes application`](https://fe-food-recepies.vercel.app) . This server manage all function and endpoint in Food recipes app such as create, add , update and delete recipe. Authentication about login, register and getting profile info.


### Built With

* [Node JS](https://nodejs.org/en/docs/)
* [Express JS](https://expressjs.com/)
* [Nodemailer Package](https://www.npmjs.com/package/nodemailer)
* [Cloudinary](https://cloudinary.com/)
* [Morgan Package](https://www.npmjs.com/package/morgan)
* [DotEnv Package](https://www.npmjs.com/package/dotenv)
* [JWT Package](https://www.npmjs.com/package/jsonwebtoken)
* [UUID Package](https://www.npmjs.com/package/uuid)
* [Multer Package](https://www.npmjs.com/package/multer)
* [Bcrypt Package](https://www.npmjs.com/package/bcrypt)

<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

* [nodejs](https://nodejs.org/en/download/)

### Installation

1. Clone the repo
```sh
https://github.com/NisrinaNataraharja/BE-Food-Recipes.git
```
2. Install NPM packages
```sh
npm install
```
3. Add .env file at root folder project, and add following
```sh

PORT = 5000
SECRET_KEY = 'secret shhhh' // or use your own
CLOUD_NAME = your cloduinary username
API_KEY = your cloduinary api key
API_SECRET = your cloduinary api secret
DB_USERNAME = your_db_username
DB_HOST = your_host
DB_DATABASE = your_db_name
DB_PASSWORD = your_password
DB_PORT = your_db_port

PORT = 5000 or your localhost port

NODE_ENV = dev or prod

SECRET_KEY = secret_key_for_JWT

EMAIL_FOR_SENDEMAIL = email_for_sendemail_nodemailer
PASS_SEND_EMAIL = email_password_sendemail_nodemailer

```


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b your/branch`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/yourbranch`)
5. Open a Pull Request



<!-- RELATED PROJECT -->
## Related Project
* [`Food Recipes Demo`](https://fe-food-recepies.vercel.app)
* [`Food Recipes Rest API`](https://food-recipes98.herokuapp.com/)
* [`Food Recipes Frontend Repository`](https://github.com/NisrinaNataraharja/FE-Food-Recipes)


<!-- CONTACT -->
## Contact

Contributors names and contact info

* AUTHOR
  * Nisrina Nataraharja [@NisrinaNataraharja](https://github.com/NisrinaNataraharja)
