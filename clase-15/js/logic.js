export function mapUserNames(users) {
    return users.map(user => user.name);
}

export function filterUsers(users, query) {
    const filtrados = users.filter(user => 
        user.name.toLowerCase().includes(query.toLowerCase()));
    return filtrados;


    }