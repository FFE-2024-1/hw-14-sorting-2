const users = [
    { name: "Charlie", age: 35, gender: "Male" },
    { name: "Bob", age: 25, gender: "Male" },
    { name: "Diana", age: 28, gender: "Female" },
    { name: "Alice", age: 30, gender: "Female" },
    { name: "Eve", age: 22, gender: "Female" },
    { name: "Alice", age: 20, gender: "Female" },
    { name: "Bob", age: 55, gender: "Male" },
];

const ascButton = document.querySelector('.asc');
const descButton = document.querySelector('.desc');
const mainBlock = document.querySelector('.not-ordered');
const resultBlock = document.querySelector('.ordered');

addListOfUsersToHTML(users, mainBlock);

ascButton.addEventListener('click', () => {
    clearList();
    const orderedList = orderUsersASC(users);
    console.log(orderedList);
    addListOfUsersToHTML(orderedList, resultBlock);
});

descButton.addEventListener('click', () => {
    clearList();
    const orderedList = orderUsersDESC(users);
    console.log(orderedList);
    addListOfUsersToHTML(orderedList, resultBlock);
});

function orderUsersASC(list) {
    return list.sort((a, b) => {
        return (a.name.localeCompare(b.name)) || (a.age - b.age) || (a.gender.localeCompare(b.gender));
    });
}

function orderUsersDESC(list) {
    return list.sort((a, b) => {
        return (b.name.localeCompare(a.name)) || (b.age - a.age) || (b.gender.localeCompare(a.gender));
    });
}

function addListOfUsersToHTML(users, el) {
    const ulTag = document.createElement('ul'); 
    
    for (const user of users) {
        const liTag = document.createElement('li');
        liTag.innerHTML = `${user.name}, ${user.age}, ${user.gender}`;
        ulTag.appendChild(liTag); 
    }
    el.appendChild(ulTag);
}

function clearList() {
    const liTags = document.querySelectorAll('.users-list.ordered > ul > li');
    for (const li of liTags) {
        li.remove();
    }
}
