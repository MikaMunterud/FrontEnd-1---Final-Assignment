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

const formTotalMembers = document.querySelector("#amountMembers");

// These are references for error messages.
const formErrorFirstName = document.querySelector("#errorFirstName");
const formErrorSurname = document.querySelector("#errorSurname");
const formErrorEmail = document.querySelector("#errorEmail");
const formErrorBirthDate = document.querySelector("#errorBirthDate");

/* Variable myData is declared to access the Object data from localStorage and
 * makes it possible to use the same objects throughout the entire project.
 */
let myData = JSON.parse(localStorage.getItem("myData"));
console.log(myData);

//this shows how many members are registered.
function showTotalRegisteredMembers() {
  const span = document.createElement("span");
  span.id = "totalMembers";
  const h3 = document.createElement("h3");

  span.textContent = myData.length;
  h3.textContent = `Total members: `;
  h3.append(span);
  formTotalMembers.append(h3);
}
showTotalRegisteredMembers();

/* This function validates the inputted member and checks if all fields
 * have a valid input.
 */
function validateMember(event) {
  event.preventDefault();

  clearMsg(event, formErrorFirstName);
  clearMsg(event, formErrorSurname);
  clearMsg(event, formErrorEmail);
  clearMsg(event, formErrorBirthDate);

  if (
    formFirstName.value !== "" &&
    formSurname.value !== "" &&
    formEmail.value !== "" &&
    formBirthDate.value !== ""
  ) {
    //this is to validate the e-mail address.
    const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (myData.find((member) => member.email == formEmail.value)) {
      message = `E-mail is already registered!`;
      formErrorEmail.append(message);
    } else if (!formEmail.value.match(emailValidation)) {
      message = `Please enter a valid e-mail address!`;
      formErrorEmail.append(message);

      /*if all information is correctly inputted the members value will be put
       * into an object and the addMember function will be called.
       */
    } else {
      const newMember = {
        firstName: formFirstName.value.trim(),
        surname: formSurname.value.trim(),
        email: formEmail.value.trim(),
        birthDate: formBirthDate.value,
        personalityType: formPersonalityType.value,
        hasJob: formHasJob.value,
        relationshipStatus: formRelationshipStatus.value,
        hasChildren: formHasChildren.value,
      };
      addMember(event, newMember);
    }
    //this will show an error message if any input boxes are empty.
  } else {
    if (formFirstName.value == "") {
      message = `First Name must be filled!`;
      formErrorFirstName.append(message);
    }
    if (formSurname.value == "") {
      message = `Surname must be filled!`;
      formErrorSurname.append(message);
    }
    if (formEmail.value == "") {
      message = `E-mail must be filled!`;
      formErrorEmail.append(message);
    }
    if (formBirthDate.value == "") {
      message = `Date of birth must be filled!`;
      formErrorBirthDate.append(message);
    }
  }
}

formSubmit.addEventListener("click", validateMember);

/* When all fields have valid input this function will add the member to the
 * localStorage "myData".
 */
function addMember(event, object) {
  event.preventDefault();

  myData.push(object);

  localStorage.setItem("myData", JSON.stringify(myData));

  alert(`A new member has been registered!`);
  window.location.reload();
}

// this function makes it easier to clear an error message.
function clearMsg(event, parent) {
  event.preventDefault();
  while (parent.hasChildNodes()) {
    parent.removeChild(parent.firstChild);
  }
}
