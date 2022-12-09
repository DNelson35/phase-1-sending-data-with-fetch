 /* MORE REUSABLE EXAMPLE FROM LECTURE */
//const formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle",
//   };
  
//   const configurationObject = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json",
//     },
//     body: JSON.stringify(formData),
//   };
  
//   fetch("http://localhost:3000/dogs", configurationObject)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (object) {
//       console.log(object);
//     });


function submitData(userName, userEmail){
    return fetch("http://localhost:3000/users" , {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail,
        }),
    })
    .then((resp) => resp.json())
    .then((resp) => showChange(resp))
    .catch((error) => handleError(error))
}

submitData('Damien', 'testEmail@test.com')

function showChange(resp){
    const body = document.querySelector("body")
    Object.keys(resp).forEach( key => {
        const h2 = document.createElement('h2')
        h2.textContent = resp[key]
        body.appendChild(h2)
    });
}

function handleError(error){
    const body = document.querySelector("body")
    const h1 = document.createElement('h1')
    h1.textContent = error.message
    body.appendChild(h1)
}

