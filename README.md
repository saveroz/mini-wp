Fancy To Do By Savero
===
## Usage
```javascript
$ npm install
$ npm run dev
```
Access client via `http://localhost:8080`
Access server via `http://localhost:3000`

##  Routes
|Routes|HTTP|Header(s)|Body|Response|Description| 
|:--:|:--:|:--:|:--:|:--:|:--:|
|/users/register  |POST  |none|username: String (**required**), email: String (**required**),  password: String (**required**)|**Success**: Register a user, **Error**: Internal server error (Validation)|Register a user|
|/users/login  |POST  |none|email: String (**required**),  password: String (**required**)|**Success**: Login as a user, **Error**: Internal server error (Wrong e-mail/password)|Login as a user|
|/users/signIn  |POST  |none|email: String (**required**),  password: String (**required**)|**Success**: Login as a user (**via Google**), **Error**: Internal server error (Wrong e-mail/password)|Login as a user (**via Google**)|
|/articles  |GET  |token|none|**Success**: Show all articles of alluser, **Error**: Internal server error|Show tasks of logged in user|
|/articles  |POST  |token|title: String (**required**), content: String (**required**), featured_image: String  (**required**), UserId : String(**required**)|**Success**: Create a new todo, **Error**: Internal server error (Validation)|Create a new articles
|/articles/:id  |PATCH  |token|title: String, content: String, featured_image: String, UserId : String(**required**)|**Success**: Successfully Edited Article, **Error**: Internal server error (Validation)| Edited Article
|/articles/:id  |DELETE|token|none|**Success**: Delete a todo, **Error**: Internal server error|Delete a article|