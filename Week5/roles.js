let user = {
    username :'Tenzin Minleg',
    email : 'minleg@hotmail.com',
    password : 'pushpaRaj',
    contact : {
        phone : '1234567890',
        bulding : 'T-123'
    },
    roles : ['user','ProjectLeader']

}

user.salary = 12345

user.roles.push('server admin')
user.contact.location = 'Minneapolis'
console.log(user)
