
# Veterinary-Clinic-v2

# Description

Your last customer was very happy with the microservice you made, but now he have a few more additions that he want you to put in this service.

So, your new mission is to adapt the service in order to allow some new features such as:

Features

Adapt the following features according to the requirements:

• GET /tutors -> Retrieves all tutors. Authentication required.

• POST /auth -> Authenticate the given user.

• POST/tutor -> Create a new tutor.

• PUT/tutor/:id -> Updates a tutor. Authentication required.

• DELETE/tutor/:id -> Deletes a tutor. Authentication required.

• POST/pet/:tutorId-> Creates a pet and adds it to a tutor. Authentication required.

• PUT/pet/:petId/tutor/:tutorId -> updates a pet's info. Authentication required.

• DELETE/pet/:petId/tutor/:tutorId -> deletes a pet from a tutor. Authentication required.

Mandatory Requirements

• Readability

• Private repository

• Small commits

• Commit pattern

• TypeScript

• Express

• Readme.md

• Explanation of how to run locally

• Share the repository's access with the class monitors for evaluation

• Controller/Service/Repository Pattern

• MongoDB

• Swagger

Optional Requirements (non-obligatory)

• Eslint

• Prettier

• Testing (chai/mocha, jest/supertest)

Some IMPORTANT business rules:

- There will be a group of tutors and a group of pets, tutors can have pets associated with them.

- It must not be possible to delete tutors with pets associated to them

## Clone GitHub

```bash
    git clone https://github.com/MateusFoppa/veterinary-clinic-v2.git
    cd .\veterinary-clinic-v2\
```
## Start

```bash
    npm install
    npm run dev
```
    
## Stack

**Back-end:** Node, Express, TypeScript


## Autores

- [@MateusFoppa](https://github.com/MateusFoppa)

