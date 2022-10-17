const formNoMembers = document.querySelector("#noMembers");
let formGrouping = document.querySelector("#grouping");
const formCreateGroups = document.querySelector("#createGroups")
const formShowGroups = document.querySelector("#showGroups");
const formShowGroup = document.querySelector("#showGroup");
const formOutput = document.querySelector("#output");
const formMessage = document.querySelector("#outputMessage");
const formOutputGroups = document.querySelector("#outputGroups");
const formOutputGroup = document.querySelector("#outputGroup");
const formGroupNo = document.querySelector("#groupNumber")

const ageChecked = document.querySelector("#attribute1");
const personalityTypeChecked = document.querySelector("#attribute2");
const workChecked = document.querySelector("#attribute3");
const relationshipChecked = document.querySelector("#attribute4");
const familyChecked = document.querySelector("#attribute5");

const p = document.createElement("p");
const li = document.createElement("li");
const span = document.createElement("span");


    fetch("../members.json")
    .then((response) => response.json())
    .then((data) => 
    {  
    //this shows how many members are registered.
    const noOutput = document.createTextNode(data.length)
    span.appendChild(noOutput);

    const noText = document.createTextNode("Total members: ")

    formNoMembers.insertBefore(p, noText)
/*
    formNoMembers.innerHTML = `Total members: 
    <span>${data.length} </span>`;
*/
    /* This sets the max value for inputting how many people should be
    ** placed in each group.
    */
    formGrouping.setAttribute("max", Math.ceil(data.length/2));
    
    function createGroups (event) {
        event.preventDefault();

        if (ageChecked.checked){
            data.sort((a, b) => {
                return a.birthDate.localeCompare(b.birthDate);
            });
        }
        else if (personalityTypeChecked.checked){
            data.sort((a, b) => {
                return a.personalityType.localeCompare(b.personalityType);
            });
        }
        else if (workChecked.checked){
            data.sort((a, b) => {
                return a.hasJob.localeCompare(b.hasJob);
            });
        }
        else if (relationshipChecked.checked){
            data.sort((a, b) => {
                return a.relationshipStatus.localeCompare(b.relationshipStatus);
            });
        }
        else if (familyChecked.checked){
            data.sort((a, b) => {
                return a.hasChildren.localeCompare(b.hasChildren);
            });
        }

        let groups;

        for(index = 0; index < data.length; index++) {
            groups = Math.floor(index/ formGrouping.value) + 1;
            data[index].group = groups;
        }
        

        
/*
        let groups = Math.floor(index/ formGrouping.value) + 1;
        data[index].group = groups;

        index++;

        if (index >= data.length) {
            console.log(data)
            return true;
        }
        createGroups(index, size);
*/      if (data[0].group){
        formMessage.textContent = `${data.length/formGrouping.value} new groups are now created!`;
        console.log(data)    
        }      
        else {
            formMessage.textContent = `Error, please input a valid attribute and groups index!`;
        } 
    }  

    formCreateGroups.addEventListener("click", createGroups);
   
    function showGroups (event){
        event.preventDefault();

        


        if (data[0].group) {
        for (index = 0; index < data.length; index++){
            Object.keys(data[index]).map((key) => {

                switch (key){
                    case "firstName":
                        text = "First name:";
                        break;
                    case "surname":
                        text = "Surname:";
                        break;
                    case "email":
                        text = "E-mail:";
                        break;
                    case "birthDate":
                        text = "Birth date:";
                        break;
                    case "personalityType":
                        text = "Surname:";
                        break;
                    case "hasJob":
                        text = "Has a job:";
                        break;
                    case "relationshipStatus":
                        text = "Relationship status:";
                        break;
                    case "hasChildren":
                        text = "Has children:";
                        break;
                    case "group":
                        text = "Group:";
                        break;
                }
                formOutputGroups.innerHTML += `<span>${text} </span>  ${data[index][key]}<br><br>`

            })
        }
    }
        else {
            formOutputGroups.innerHTML = `<p>No groups have been created! </p>`
}
    }
    formShowGroups.addEventListener("click", showGroups);

    function showGroup (event){
        event.preventDefault();

        const result = data.filter((member) => member.group == formGroupNo);
            
            for (index = 0; index < result.length; index++){
                Object.keys(result[index]).map((key) => {
                    formOutputGroup.innerHTML += `<span>${key} </span> ${data[index][key]}<br>`;
        })
        
    }
}
    formShowGroup.addEventListener("click", showGroup);



});

    

    

    
    
   
    
    

    