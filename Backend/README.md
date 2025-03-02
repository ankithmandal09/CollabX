# API Documentation

## Overview

This API allows users to manage their profiles, posts, and collaborations. It supports CRUD operations for users, profiles, and posts, along with additional functionality such as liking posts, adding/removing collaborators, and managing comments.

---

## Base URL

`https://localhost:8090`

---

## Endpoints

### User Endpoints

#### 1. `GET /collabx/username`
Retrieve post data of connections for a specific user.

**Response:**
- Status: 200 OK
- Body: Post details (if any)

#### 2. `GET /users/username`
Retrieve details of a specific user by their username.

**Response:**
- Status: 200 OK
- Body: User information (e.g., username)

#### 3. `POST /users`
Create a new user.

**Request Body:**
- `username` (string)
- `password` (string)

**Response:**
- Status: 201 Created
- Body: New user details

#### 4. `PATCH /users/username`
Update details of a specific user by their username.

**Request Body:**
- Fields that need to be updated (e.g., email, password)

**Response:**
- Status: 200 OK
- Body: Updated user details

#### 5. `DELETE /users/username`
Delete a specific user by their username.

**Response:**
- Status: 204 No Content
- Body: None

---

### Profile Endpoints

#### 6. `GET /profiles/username`
Retrieve a user’s profile.

**Response:**
- Status: 200 OK
- Body: User profile data (e.g., bio, profile picture)

#### 7. `POST /profiles/username`
Create a new profile for a user.

**Request Body:**
- `bio` (string, optional)
- `profile_picture` (string, optional)

**Response:**
- Status: 201 Created
- Body: New profile details

#### 8. `PATCH /profiles/username`
Update an existing user’s profile.

**Request Body:**
- Fields to update (e.g., bio, profile picture)

**Response:**
- Status: 200 OK
- Body: Updated profile details

#### 9. `DELETE /profiles/username`
Delete a user’s profile.

**Response:**
- Status: 204 No Content
- Body: None

#### 10. `PATCH /profiles/username/add-connection`
Add a connection to a user’s profile.

**Request Body:**
- `connectionUsername` (string)

**Response:**
- Status: 200 OK
- Body: Updated connections list

#### 11. `PATCH /profiles/username/remove-connection`
Remove a connection from a user’s profile.

**Request Body:**
- `connectionUsername` (string)

**Response:**
- Status: 200 OK
- Body: Updated connections list

---

### Post Endpoints

#### 12. `GET /posts/username`
Retrieve a list of posts by a user.

**Response:**
- Status: 200 OK
- Body: List of user posts

#### 13. `POST /posts/username`
Create a new post for a user.

**Request Body:**
- `caption` (string)
- `content` (string)

**Response:**
- Status: 201 Created
- Body: Post details

#### 14. `PATCH /posts/username/postId`
Update a specific post by postId.

**Request Body:**
- Fields to update (e.g., caption, content)

**Response:**
- Status: 200 OK
- Body: Updated post details

#### 15. `DELETE /posts/username/postId`
Delete a specific post by postId.

**Response:**
- Status: 204 No Content
- Body: None

#### 16. `PATCH /posts/username/postId/increment-likes`
Increment the like count for a specific post by postId.

**Response:**
- Status: 200 OK
- Body: Updated post with increased likes

#### 17. `PATCH /posts/username/postId/decrement-likes`
Decrement the like count for a specific post by postId.

**Response:**
- Status: 200 OK
- Body: Updated post with decreased likes

#### 18. `PATCH /posts/username/postId/add-comment`
Add a comment to a specific post.

**Request Body:**
- `comment` (string)

**Response:**
- Status: 200 OK
- Body: Updated post with added comment

#### 19. `PATCH /posts/username/postId/delete-comment`
Delete a comment from a specific post.

**Request Body:**
- `commentId` (string)

**Response:**
- Status: 200 OK
- Body: Updated post with removed comment

#### 20. `PATCH /posts/username/postId/add-collaborators`
Add collaborators to a specific post.

**Request Body:**
- `collaboratorUsername` (string)

**Response:**
- Status: 200 OK
- Body: Updated post with added collaborators

#### 21. `PATCH /posts/username/postId/delete-collaborators`
Remove collaborators from a specific post.

**Request Body:**
- `collaboratorUsername` (string)

**Response:**
- Status: 200 OK
- Body: Updated post with removed collaborators

---

## Error Handling

The API returns standard HTTP status codes. In case of errors, the response body will include a message describing the issue.

### Common Error Responses
- `400 Bad Request`: The request is malformed or missing required fields.
- `401 Unauthorized`: The request is missing valid authentication.
- `404 Not Found`: The requested resource does not exist.
- `500 Internal Server Error`: A server error occurred.

---

