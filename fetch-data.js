document.addEventListener("DOMContentLoaded", function() {

fetchUserData()
    
})

async function fetchUserData () {
     const apiUrl = 'https://jsonplaceholder.typicode.com/users';
     const dataContainer = document.getElementById('api-data');
       dataContainer.innerHTML = '';
     const userList = document.createElement('ul');
     const users = [
        {name: 'Charles Effiong'},
        {name: 'Emediong Francies'},
        {name: 'Charles Effiong'},
        {name: 'Emediong Francies'},
        {name: 'Charles Effiong'},
        {name: 'Emediong Francies'},
        {name: 'Charles Effiong'},
        {name: 'Emediong Francies'},
        
    ]
    users.forEach(user => {
        const li = document.createElement('li');
        li.textContent = user.name;
        userList.appendChild(li);
    })
    dataContainer.appendChild(userList);
     try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json()
     }
     catch(error){
        dataContainer.innerHTML = '';
        dataContainer.textContent("Failed to load your user data")
     }
     
    
}