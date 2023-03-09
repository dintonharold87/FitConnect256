# FitConnect256
## Introduction
### The project
[FitConnect256](https://fitconnect256.firebaseapp.com/)  is a web application to connect Ugandans to fitness and nutrition experts. It’s meant to solve the challenge of failure to find the right fitness and nutrition advice during your fitness journey. To achieve this goal, FitConnect256 provides a registration form, where coaches register on the platform and are able to be accessed by users. Users in this case being Ugandans.
Other features include Login for coaches and admins, registration for both coaches and admins.
### User Stories
- As a fitness and nutrition coach, I want to be able to register on the web application so that I can reach more clients and expand my business.
- As an admin, I want to be able to see all the coaches who are registered on the web application so that I can keep track of the coaches and their profiles.
- As a user of the web application, I want to be able to view the list of all the coaches who are registered on the web application so that I can choose a coach who is best suited for my fitness and nutrition needs
- As a fitness and nutrition coach, I want to be able to update my profile information such as my qualifications, experience, and services offered, so that users can see the latest information about me.
- As an admin, I want to be able to delete coaches' profiles if they are no longer offering their services so that users can see only active coaches on the web application.

### The Context
This project is our Portfolio Project, concluding our Foundations Year at ALX software Engineering program. We were able to choose who we wanted to work with and what we wanted to work on, as long as we present a working program at the end of the three weeks of development.
### The Team
This project was developed by [Dinton Harold Ainemukama](https://www.linkedin.com/in/dinton-harold-ainemukama-518394157/) a fitness enthusiast.
### Blog post
After the development phase, we had to write a blog to reflect on the journey while working on the project. you can find my blog [here](https://dintonharold.hashnode.dev/fitconnect256)

### Tutorial
[Here is a demo of how the web application works](https://youtu.be/dK6XvLupgCY)
## Usage
### Built with
- [React Js](https://reactjs.org/) 
- [Tailwind Css](https://tailwindcss.com/)
- [Material Ui]( https://material-ui.com/)
- [Node js](https://nodejs.org/)
- [Mongo db](https://www.mongodb.com/)
- [Express](https://expressjs.com/)
### Installation
FitConnect256 requires [Node.js](https://nodejs.org/) v10+ to run.
Installing the programs necessary to view this project is pretty simple!
First clone the repo using
```git clone https://github.com/dintonharold87/FitConnect256.git```
**Backend**
```sh
cd backend
npm i
npm run dev
```
This installs all the necessary  dependencies and devDependencies and start the  server.
**Frontend**
```sh
cd frontend
npm i
npm run start
```
This installs all the necessary  dependencies and devDependencies and start the react server. This command should be run in the frontend directory.
**API**
These are different api's created to perform crud operations
- Register a coach
API endpoint:``` /api/coaches```
Method: POST
- Register a admin
API endpoint:``` /api/admins```
Method: POST
- View all coaches
API endpoint:``` /api/coaches```
Method: GET
- View one coach
API endpoint:``` /api/coach/:{coach_id}```
Method: GET
- Delete a coach
API endpoint:``` /api/coach/:{coach_id}```
Method: DELETE
- Update a coach
API endpoint:``` /api/coach/:{coach_id}```
Method: PUT
#### Authentication
I used [JWT (JSON Web Token)](https://github.com/auth0/node-jsonwebtoken) which is a popular method for implementing authentication in web applications.
When the user logs in, their credentials are verified against the database. If the credentials are valid, a JWT is generated and returned to the client.
The client then stores the JWT in local storage or a cookie, and sends the JWT with each subsequent request to the server.
When the server receives a request with a JWT, it verifies the authenticity of the JWT by checking its signature, expiration time, and other claims. If the JWT is valid, the server allows the request to proceed.
#### Security
I used [bycrypt](https://github.com/kelektiv/node.bcrypt.js) which is a password-hashing function used to securely store passwords. It works by taking a password and hashing it multiple times with a salt, which is a randomly generated string of characters that is added to the password before hashing. The resulting hash is then stored in the database.
## Future
There are lots of improvements i need to make on this project because of time constraints, I wasn't able to implement everything I wanted to implement. Like search bar for users to search for coaches based on location. Improve on the UI for coaches, coach profile, Admin dashboard. 
## Author
Dinton Harold Ainemukama
If you would like to contact [Dinton](https://www.linkedin.com/in/dinton-harold-ainemukama-518394157/) about any opportunities, feel free to reach out!
## Acknowledgements
- [ALX SE](https://www.alxafrica.com/software-engineering/) staff - For the help, advice and resources they provided us with during this project and during all our curriculum.
- Cohort 7 students - For your friendship, invaluable support, and insight not only for this project, but over the nine months.
## License

MIT