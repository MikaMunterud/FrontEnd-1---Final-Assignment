const formTotalMembers = document.querySelector("#totalMembers");
const formOutput = document.querySelector("#output");

fetch("../members.json")
    .then((response) => response.json())
    .then((data) => 

    {for(i = 0; i < data.length; i++){
        formOutput.innerHTML += `<li>${data[i].firstName} 
            ${data[i].surname}</li> `;
    }

    formTotalMembers.innerHTML = `Total members: 
        <span>${data.length} </span>`;
    }
    )


