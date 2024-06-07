# CRM Ticket System API

This API is a part of the CRM Ticket System with MERN Stack from scratch tutorial System. Link for the services in

## How to use

- run `git clone ...`
- run `npm start`

Note: Make sure you have nodemon installed in your system otherwise you can install as a dev dependencies in the project

## API Resources

### User API Resources

All the User API router follows `/v1/user/`

| #   | Routes                            | Verb | Progress | In Private | Description                                      |
| --- | --------------------------------- | ---- | -------- | ---------- | ------------------------------------------------ |
| 1   | `/v1/user/login`                  | POST | TODO     | No         | Verify User Authentication and return JWT        |
| 2   | `/v1/user/request-reset-password` | POST | TODO     | No         | Verify email and email pin to reset the password |
| 3   | `/v1/user/reset-password`         | POST | TODO     | No         | Replace with new password                        |
| 4   | `/v1/user/{id}`                   | GET  | TODO     | YES        | Get users Info                                   |

### Ticket API Resources

All the User API router follows `/v1/ticket/`

| #   | Routes                         | Verb | Progress | In Private | Description                             |
| --- | ------------------------------ | ---- | -------- | ---------- | --------------------------------------- |
| 1   | `/v1/ticket`                   | GET  | TODO     | YES        | Get all tickets for the logged in user  |
| 2   | `/v1/ticket/{id}`              | GET  | TODO     | YES        | Get a ticket details                    |
| 3   | `/v1/ticket`                   | POST | TODO     | YES        | Create a new ticket                     |
| 4   | `/v1/ticket/{id}`              | PUT  | TODO     | YES        | Update ticket details ie. reply message |
| 4   | `/v1/ticket/close-ticket/{id}` | PUT  | TODO     | YES        | Update ticket details ie. reply message |

### Ticket API Resources
