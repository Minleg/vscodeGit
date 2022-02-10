let user = {username:'Tenzin Minleg', password: 'kittens'} // user object

console.log(user.username)
console.log(user['username'])

console.log(user.password)
console.log(user['password'])

let userNameProperty = 'username'
let  userPasswordProperty = 'password'

console.log(user[userNameProperty])
console.log(user[userPasswordProperty])

user.password = 'elephant'
console.log(user)

user['password'] = 'alligator'
console.log(user)

//adding more properties to the object
user.email = 'minleg@minneapolis.edu'
console.log(user)
console.log(user['email'])

for ( let name in user){ // loops through each object
    console.log(name, user[name])
}