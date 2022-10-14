const formNoMembers = document.querySelector("#noMembers");
let formGrouping = document.querySelector("#grouping");
const formCreateGroups = document.querySelector("#createGroups")
const formShowGroups = document.querySelector("#showGroups");
const formShowGroup = document.querySelector("#showGroup");
const formOutput = document.querySelector("#output");
const formMessage = document.querySelector("#outputMessage");

const ageChecked = document.querySelector("#attribute1").checked;
const personalityTypeChecked = document.querySelector("#attribute2").checked;
const workChecked = document.querySelector("#attribute3").checked;
const relationshipChecked = document.querySelector("#attribute4").checked;
const familyChecked = document.querySelector("#attribute5").checked;

    fetch("../members.json")
    .then((response) => response.json())
    .then((data) => 
    {
    if (data.length < 0) {
        data.sort((a, b))

    }

    formNoMembers.innerHTML = `Total members: 
    <span>${data.length} </span>`;

    /* This sets the max value for inputting how many people should be
    ** placed in each group. The value here cannot be higher than half
    ** the value of the total amount of members. If the total amount of
    ** members are uneven, (total members)/ 2 will be rounded up tp avoid
    ** having 1 person end up alone in a group. 
    */
    formGrouping.setAttribute("max", Math.ceil(data.length/2));
    
    function createGroups (index, size) {

        if (ageChecked){
            data.all.sort((a, b) => {
                return a.birthDate.localeCompare(b.birthDate);
            });
        }
        else if (personalityTypeChecked){
            data.all.sort((a, b) => {
                return a.personalityType.localeCompare(b.personalityType);
            });
        }
        else if (workChecked){
            data.all.sort((a, b) => {
                return a.hasJob.localeCompare(b.hasJob);
            });
        }
        else if (relationshipChecked){
            data.all.sort((a, b) => {
                return a.relationshipStatus.localeCompare(b.relationshipStatus);
            });
        }
        else if (familyChecked){
            data.all.sort((a, b) => {
                return a.hasChildren.localeCompare(b.hasChildren);
            });
        }

        let groups;

        for (index = 0; index >= data.length; index++) {
            groups = Math.floor(index, formGrouping.value) + 1;
            data.all[index].group = groups;
        }

        formMessage.textContent = `${NaN} new groups are now created!`;
           console.log(data.all)
        }

        formCreateGroups.addEventListener("click", createGroups);
       
    function showGroups (){

    }



    })

    
   
    
    

    