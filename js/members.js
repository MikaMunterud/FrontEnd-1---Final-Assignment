const formTotalMembers = document.querySelector("#totalMembers");
const formOutput = document.querySelector("#output");

const formShowMembers = document.querySelector("#showMembers");
const formShowMember = document.querySelector("#showMember");
const formOutputMembers = document.querySelector("#outputMembers");
const formOutputMember = document.querySelector("#outputMember");
const clearMembersButton = document.querySelector("#clearMembers");
const clearMemberButton = document.querySelector("#clearMember");
const formMemberNo = document.querySelector("#memberNumber");
const formDeleteNumber = document.querySelector("#memberDeleteNumber");
const formDeleteMember = document.querySelector("#deleteMember");
const formOutputDeleteMember = document.querySelector("#outputDeleteMember");
const formDeleteMembers = document.querySelector("#deleteMembers");

const fromRetrieveMembers = document.querySelector("#retrieveMembers");

/* Variable myData is declared to access the Object data from localStorage and
 * makes it possible to use the same objects throughout the entire project.
 */
let myData = JSON.parse(localStorage.getItem("myData"));

/* This sets the max value for inputting which member the user would
 * like to get more information about or delete. The user cannot input
 * a value higher than the total amount of members.
 */
formMemberNo.setAttribute("max", myData.length);
formDeleteNumber.setAttribute("max", myData.length);

// this lists all the members full name
function showListOfMembers() {
  for (i = 0; i < myData.length; i++) {
    const li = document.createElement("li");

    li.textContent = `${myData[i].firstName} ${myData[i].surname}`;

    formOutput.appendChild(li);
  }
}
showListOfMembers();

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

// This function makes it possible for the user to get all the members information.
function showMembers(event) {
  event.preventDefault();
  //this clears the data of all members every time the user clicks on the "Show members" button.
  clearMembers(event);

  renderMember(myData, formOutputMembers);
}

formShowMembers.addEventListener("click", showMembers);

/* This function makes it possible for the user to get a specific member based
 * on the members index number. It will give an error message if no member index
 * has been given.
 */
function showMember(event) {
  event.preventDefault();
  //this clears the data of all members every time the user clicks on the "Show member" button.
  clearMember(event);

  if (!formMemberNo.value) {
    formOutputMember.textContent = "Please enter a valid member index!";
  } else {
    const filterData = myData.filter(
      (member, index) => index + 1 == formMemberNo.value
    );
    renderMember(filterData, formOutputMember);
  }
}

/* This function goes through all the data and switch the given object keys to a
 * new value that is more reader friendly. Afterwards all requested objects/ members
 * information are put into a div so they can be visible on the webb page when
 * requested.
 */
function renderMember(data, parent) {
  for (index = 0; index < data.length; index++) {
    const div = document.createElement("div");
    Object.keys(data[index]).map((key) => {
      //this converts the object key text into a more reader friendly text.
      switch (key) {
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
      const span = document.createElement("span");
      const p = document.createElement("p");

      span.textContent = text;
      p.textContent = ` ${data[index][key]}`;
      p.prepend(span);
      div.appendChild(p);
    });

    const br = document.createElement("br");
    div.appendChild(br);
    parent.appendChild(div);
  }
}
formShowMember.addEventListener("click", showMember);

/* this makes it possible for the user to delete all the members in the
 * localStorage myData.
 */
function deleteMembers(event) {
  event.preventDefault();

  let warning = confirm(`Are you sure you want to delete all members?`);
  if (warning) {
    localStorage.setItem("myData", "[]");
    alert(`All members have been deleted!`);
    window.location.reload();
  } else {
    formOutputDeleteMember.textContent = `Deletion of all members are cancelled!`;
  }
}

formDeleteMembers.addEventListener("click", deleteMembers);

function deleteMember(event) {
  event.preventDefault();

  if (!formDeleteNumber.value) {
    formOutputDeleteMember.textContent = "Please enter a valid member index!";
  } else {
    let deleteMember = myData.filter(
      (member, index) => index + 1 == formDeleteNumber.value
    );

    let memberName = `\n${formDeleteNumber.value}. ${deleteMember[0].firstName} ${deleteMember[0].surname}`;

    let warning = confirm(`Are you sure you want to delete ${memberName}?`);
    if (warning) {
      const membersLeft = myData.filter(
        (member, index) => index + 1 != formDeleteNumber.value
      );
      localStorage.setItem("myData", JSON.stringify(membersLeft));

      alert(`${memberName} is now deleted!`);
      window.location.reload();

      //this reloads the window so the members information updates.
    } else {
      formOutputDeleteMember.textContent = `Deletion of member \n${memberName} is cancelled!`;
    }
  }
}

formDeleteMember.addEventListener("click", deleteMember);

/* this function makes it possible for the user to retrieve all the original members
 * data if the current members data differ in any way from the original one.
 */
function retrieveMembers(event) {
  event.preventDefault();

  const members = JSON.parse(localStorage.getItem("members"));
  if (JSON.stringify(members) === JSON.stringify(myData)) {
    alert(`The current members are the same as the original members!`);
    window.location.reload();
  } else {
    let confirmation = confirm(
      `Are you sure you want to change the current members to the original members?`
    );
    if (confirmation) {
      localStorage.setItem("myData", JSON.stringify(members));
      alert(`All original members have been restored!`);
      window.location.reload();
    } else {
      alert(`The new members list is still in use!`);
    }
  }
}

fromRetrieveMembers.addEventListener("click", retrieveMembers);

//this function clears the data of the member when the user clicks on the "Clear member" button.
function clearMembers(event) {
  event.preventDefault();
  while (formOutputMembers.hasChildNodes()) {
    formOutputMembers.removeChild(formOutputMembers.firstChild);
  }
}

clearMembersButton.addEventListener("click", clearMembers);

//this function clears the data of the member when the user clicks on the "Clear member" button.
function clearMember(event) {
  event.preventDefault();
  while (formOutputMember.hasChildNodes()) {
    formOutputMember.removeChild(formOutputMember.firstChild);
  }
}

clearMemberButton.addEventListener("click", clearMember);
