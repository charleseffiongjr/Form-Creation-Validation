async function fetchUserData () {
     const apiUrl = 'https://jsonplaceholder.typicode.com/users';
     const dataContainer = document.getElementById("api-data");
     try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json('https://jsonplaceholder.typicode.com/users')
     }
    
}