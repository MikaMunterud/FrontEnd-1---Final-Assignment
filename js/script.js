// These are reference for text input for a member.
const formFirstName = document.querySelector("#firstName"); 
const formSurname = document.querySelector("#surname"); 
const formEmail = document.querySelector("#email"); 
const formBirthDate = document.querySelector("#birthDate"); 
const formPersonalityType = document.querySelector("#personalityType"); 
const formHasJob = document.querySelector("#hasJob"); 
const formRelationshipStatus = document.querySelector("#relationshipStatus"); 
const formHasChildren = document.querySelector("#hasChildren"); 

// These are references for buttons fields.
const formSubmit = document.querySelector("#registerMember"); 
const formMember = document.querySelector("#member");


function validateMember(event){
    event.preventDefault();

    fetch("../members.json")
    .then((response) => response.json())
    .then((data) => {

    if (!data.filter((person) =>
                person.email === formEmail.value))
                {
        document.querySelector("#formMsgFalse").innerText = 
        `E-mail "${formEmail.value}" is already registered! Member registration is cancelled.`;
    }
    else {
        document.querySelector("#formMsgTrue").innerText = 
        `A new member is now registered!`;
        
    }

    })
    
}
// This will add the data 
formSubmit.addEventListener("click", validateMember);

function addMember(event){
    event.preventDefault();

    let firstName = formFirstName.value.trim();
    let surname = formSurname.value.trim();
    let email = formEmail.value;
    let birthDate = formBirthDate.value;
    let personalityType = formPersonalityType.options[formPersonalityType.selectedIndex].innerText;
    let hasJob = formHasJob.options[formHasJob.selectedIndex].innerText;
    let relationshipStatus = formRelationshipStatus.options[formRelationshipStatus.selectedIndex].innerText;
    let hasChildren = formHasChildren.options[formHasChildren.selectedIndex].innerText;    

    console.log(`   
    ${firstName} 
    ${surname} 
    ${email} 
    ${birthDate} 
    ${personalityType}
    ${hasJob} 
    ${relationshipStatus} 
    ${hasChildren}`);

/*
    // this stores data in a JavaScript object.
    data = {
        "firstName":firstName,
        "surname":surname,
        "birthDate":birthDate,
        "personalityType":personalityType,
        "hasJob":hasJob,
        "relationshipStatus":relationshipStatus,
        "hasChildren":hasChildren
    }

    
    // This converts Javascript object to JSON
    member.innerText = JSON.stringify(data);
*/

}

function invalidInput(event) {
    let invalidCategory = event.innerText;

    if (event.value == '') {
        event.setCustomValidity
            (`Please enter correct ${invalidCategory} value!`)
    }
    else if (event.validity.typeMismatch){
        event.setCustomValidity
            (`Please enter valid ${invalidCategory}!`)
    }
    else {
        event.setCustomValidity('');
    }

return true;
}

