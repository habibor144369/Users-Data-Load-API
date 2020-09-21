// dynamicly data load to API and dinplay in my website....
// This is API = {https://jsonplaceholder.typicode.com/users}

document.getElementById('LoadUsers').addEventListener('click', function(){
    const countText = document.getElementById('userCount').value;
    const count = parseInt(countText)
    
    if(count < 1){
        alert('Zero ande Negetive number not allow, please type to positive number')
    }
   
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(respons => respons.json())
    .then(data => {
        data = data.slice(0, count)
        const usersName = document.getElementById('users');
        usersName.innerHTML = '';
    
        for(let i = 0; i < data.length; i++){
           const users = data[i];
           const p = document.createElement('p')
           p.innerHTML = `<h3 class = " user"> Name : ${users.username}<br>   User-id : ${users.id} 
           <button onClick="getUserdetails(${users.id})">Get Details</button></h3>
          `;
           usersName.appendChild(p); 
        }
    })
})

    function getUserdetails(userId){
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(respons => respons.json())
        .then(data => {
            console.log(data)
           const allDetails = document.getElementById('AllUsersDetails');
           allDetails.innerHTML = `
           <h2>ID : ${data.id}</h2>
            <h2>Name : ${data.name}</h2>
            <h2>User Name : ${data.username}</h2>
            <h2>Email : ${data.email}</h2>
            <h2>Phone : ${data.phone}</h2>
            <h2>Website: ${data.website}</h2>`
        })
    }