
<br />
<div align="center">
  <a href="https://github.com/matfaisall/recipe-frontend-redux" target="_blank">
    <img src="https://res.cloudinary.com/dmx0spvee/image/upload/v1696560135/web-recipe-redux/mamarecipe-logo_ofcf8k.png" alt="Mama Recipe" width="150px">
  </a>

  <h3 align="center">Food Recipes Rest API</h3>

  <p align="center">
    <a href="https://github.com/matfaisall/recipe-backend/issues" target="_blank">Report Bug</a>
    -
    <a href="https://github.com/matfaisall/recipe-backend/issues" target="_blank">Request Feature</a>
  </p>
</div>

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

Food Recipes Rest API is server api that used in [`Food Recipes application`](https://fe-food-recepies.vercel.app) . This server manage all function and endpoint in Food recipes app such as create, add , update and delete recipe, Authentication about login, register, getting profile, and also comment recipe, like, bookmark recipe.


### Built With

* [Node JS](https://nodejs.org/en/docs)
* [Express JS](https://expressjs.com/)
* [Nodemailer Package](https://www.npmjs.com/package/nodemailer)
* [Cloudinary](https://cloudinary.com/)
* [Morgan Package](https://www.npmjs.com/package/morgan)
* [DotEnv Package](https://www.npmjs.com/package/dotenv)
* [JWT Package](https://www.npmjs.com/package/jsonwebtoken)
* [Multer Package](https://www.npmjs.com/package/multer)
* [Argon2 Package](https://www.npmjs.com/package/bcrypt)
* [XSS middleware](https://www.npmjs.com/package/xss)
* [Helmet middleware](https://www.npmjs.com/package/helmet)
* Etc.

<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

Before going to the installation stage there are some software that must be installed first.

* [NodeJs V18.00^](https://nodejs.org/en/download/)

### Installation

1. Clone the repo
```
git clone https://github.com/matfaisall/recipe-backend.git
```
2. Go to repo
```
cd recipe-backend
```
3. Install NPM packages
```
npm install
```

4. Add .env file at root folder project, and add following
```
PORT=4000

DB_HOST=your_db_host
DB_PORT=your_db_port
DB_DATABASE=your_db_name
DB_USER=your_db_username
DB_PASSWORD=your_db_password

JWT_TOKEN=your_jwt_token

CLOUD_NAME=your_cloduinary_username
CLOUD_API_KEY=your_cloduinary_api_key
CLOUD_API_SECRET=your_cloduinary_api_secret

EMAIL_FOR_SENDEMAIL = email_for_sendemail_nodemailer
PASS_SEND_EMAIL = email_password_sendemail_nodemailer

```
5. Try it

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b your/branch`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/yourbranch`)
5. Open a Pull Request on Github



<!-- RELATED PROJECT -->
## Related Project
:books:  [`Food Recipes Rest API`](https://github.com/matfaisall/recipe-backend)
:books:  [`Food Recipes Frontend`](https://github.com/matfaisall/recipe-frontend-redux)
:books:  [`Food Recipes Mobile`](https://github.com/matfaisall/recipe-reactnative)


<!-- CONTACT -->
## Contact

Contributors names and contact info

* AUTHOR
<table>
  <tr >
    <td align="left">
      <a href="https://github.com/matfaisall">
          <img width="100" src="https://avatars.githubusercontent.com/u/88364541?v=4" alt="Muhammad Faisal"> <br/>
          <sub><b>Muhammad Faisal</b></sub> <br/>
          <sub>Lead Frontend | Frontend Web Developer</sub>
      </a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://www.linkedin.com/in/matfaisall/">[LinkedIn Account]</a>
    </td>
  </tr>
</table>