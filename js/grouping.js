const formNoMembers = document.querySelector("#noMembers");
const formGrouping = document.querySelector("#grouping");
const formCreateGroups = document.querySelector("#createGroups");
const formShowGroups = document.querySelector("#showGroups");
const formShowGroup = document.querySelector("#showGroup");
const formOutput = document.querySelector("#output");
const formMessage = document.querySelector("#outputMessage");
const formOutputGroups = document.querySelector("#outputGroups");
const formOutputGroup = document.querySelector("#outputGroup");
const clearGroupsButton = document.querySelector("#clearGroups");
const clearGroupButton = document.querySelector("#clearGroup");
const formGroupNo = document.querySelector("#groupNumber");

//these variables are used to see which attribute has been chosen by the user.
const ageChecked = document.querySelector("#attribute1");
const personalityTypeChecked = document.querySelector("#attribute2");
const workChecked = document.querySelector("#attribute3");
const relationshipChecked = document.querySelector("#attribute4");
const familyChecked = document.querySelector("#attribute5");
const randomChecked = document.querySelector("#attribute6");

/* Variable myData is declared to access the Object data from localStorage and
 * makes it possible to use the same objects throughout the entire project.
 */
let myData = JSON.parse(localStorage.getItem("myData"));

//this shows how many members are registered.
function showTotalRegisteredMembers() {
  const span = document.createElement("span");
  span.id = "totalMembers";
  const h3 = document.createElement("h3");

  span.textContent = myData.length;
  h3.textContent = `Total members: `;
  h3.append(span);
  formNoMembers.append(h3);
}
showTotalRegisteredMembers();

/* This sets the max value for inputting how many people should be
 ** placed in each group.
 */
formGrouping.setAttribute("max", Math.ceil(myData.length / 2));

/* this function sorts all members depending on which attribute the
 ** user wants the groupings to be based on.
 */
function createGroups(event) {
  event.preventDefault();

  if (ageChecked.checked) {
    myData.sort((a, b) => {
      return a.birthDate.localeCompare(b.birthDate);
    });
  } else if (personalityTypeChecked.checked) {
    myData.sort((a, b) => {
      return a.personalityType.localeCompare(b.personalityType);
    });
  } else if (workChecked.checked) {
    myData.sort((a, b) => {
      return a.hasJob.localeCompare(b.hasJob);
    });

    /* if the user want to divide the members based on their relationship status,
     * this for-loop/ switch case will turn all the different relationship options
     * into numbers. These given numbers are made so that the order when sorting
     * the members will be as close as possible to the pre-decided pairing.
     */
  } else if (relationshipChecked.checked) {
    for (index = 0; index < myData.length; index++) {
      switch (myData[index].relationshipStatus) {
        case "Single":
          myData[index].relationshipStatus = "1";
          break;
        case "Separated":
          myData[index].relationshipStatus = "2";
          break;
        case "In a relationship":
          myData[index].relationshipStatus = "3";
          break;
        case "Engaged":
          myData[index].relationshipStatus = "4";
          break;
        case "Married":
          myData[index].relationshipStatus = "5";
          break;
        case "Divorced":
          myData[index].relationshipStatus = "6";
          break;
        case "Widowed":
          myData[index].relationshipStatus = "7";
          break;
      }
      myData.sort((a, b) => {
        return a.relationshipStatus.localeCompare(b.relationshipStatus);
      });
    }
  } else if (familyChecked.checked) {
    myData.sort((a, b) => {
      return a.hasChildren.localeCompare(b.hasChildren);
    });
    // this sorts all members in a random order.
  } else if (randomChecked.checked) {
    function sortRandom(a, b) {
      return Math.random() - 0.5;
    }
    myData.sort(sortRandom);
  }
  /* If the user chose to sort the members by relationship status, this
   * for-loop/ switch case will turn the previous changes values back to
   * the original text value.
   */
  for (index = 0; index < myData.length; index++) {
    switch (myData[index].relationshipStatus) {
      case "1":
        myData[index].relationshipStatus = "Single";
        break;
      case "2":
        myData[index].relationshipStatus = "Separated";
        break;
      case "3":
        myData[index].relationshipStatus = "In a relationship";
        break;
      case "4":
        myData[index].relationshipStatus = "Engaged";
        break;
      case "5":
        myData[index].relationshipStatus = "Married";
        break;
      case "6":
        myData[index].relationshipStatus = "Divorced";
        break;
      case "7":
        myData[index].relationshipStatus = "Widowed";
        break;
    }
  }

  let groups;

  /* after all members have been sorted based on the chosen external attribute
   * this for-loop will assign all members a group based on how many members
   * the user have requested should exist in each group.
   */
  for (index = 0; index < myData.length; index++) {
    groups = Math.floor(index / formGrouping.value) + 1;
    myData[index].group = groups;
  }

  let message;
  /* if the members have been assigned a group the user will see a message telling
   * how many groups have been created.
   */
  if (myData[0].group) {
    clearMsg(event, formMessage);

    /* this message will be written if the user haven't checked any of the external
     * attributes and the groups will be made based on the order they have in the
     * JSON-file.
     */
    if (
      !ageChecked.checked &&
      !personalityTypeChecked.checked &&
      !workChecked.checked &&
      !relationshipChecked.checked &&
      !familyChecked.checked
    ) {
      message = `${Math.ceil(
        myData.length / formGrouping.value
      )} new groups are now created and sorted without any external attribute!`;

      formMessage.append(message);
    } else {
      message = `${Math.ceil(
        myData.length / formGrouping.value
      )} new groups are now created!`;

      formMessage.append(message);
    }

    /* This sets the max value for which single group the user wants to see.
     * The user cannot input a value higher than the total amount of groups
     */
    formGroupNo.setAttribute(
      "max",
      Math.ceil(myData.length / formGrouping.value)
    );
  } else {
    /* If no groups have been assigned due to an external attribute or the group
     * index haven't been specified, the user will see an error message.
     */
    clearMsg(event, formMessage);
    message = `Error, please input a valid group index!`;

    formMessage.append(message);
  }
} // end of function createGroups.

formCreateGroups.addEventListener("click", createGroups);

/* This function makes it possible for the user to get all the members information.
 * It will give an error message if no groups have been made.
 */
function showGroups(event) {
  event.preventDefault();
  //this clears the data of members every time the user clicks on the "Show groups" button.
  clearGroups(event);
  if (myData[0].group) {
    renderGroup(myData, formOutputGroups);
  } else {
    message = "No groups have been created!";
    formOutputGroups.append(message);
  }
}
formShowGroups.addEventListener("click", showGroups);

/* This function makes it possible for the user to get all the members in a specific
 * group. It will give an error message if no groups have been made. It will also give
 * an error message if groups have been made but no group index has been given.
 */
function showGroup(event) {
  event.preventDefault();
  //this clears the data of members every time the user clicks on the "Show group" button.
  clearGroup(event);

  if (myData[0].group) {
    if (!formGroupNo.value) {
      message = "Please enter a valid group index!";
      formOutputGroup.append(message);
    } else {
      const filterData = myData.filter(
        (member) => member.group == formGroupNo.value
      );
      renderGroup(filterData, formOutputGroup);
    }
  } else {
    message = "No groups have been created!";
    formOutputGroup.append(message);
  }
}

/* This function goes through all the data and switch the given object keys to a
 * new value that is more reader friendly. Afterwards all requested objects/ members
 * information are put into a div so they can be visible on the webb page when
 * requested.
 */
function renderGroup(data, parent) {
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

formShowGroup.addEventListener("click", showGroup);

//this function clears the data of all members when the user clicks on the "Clear groups" button.
function clearGroups(event) {
  event.preventDefault();

  while (formOutputGroups.hasChildNodes()) {
    formOutputGroups.removeChild(formOutputGroups.firstChild);
  }
}

clearGroupsButton.addEventListener("click", clearGroups);

//this function clears the data of all members when the user clicks on the "Clear group" button.
function clearGroup(event) {
  event.preventDefault();
  while (formOutputGroup.hasChildNodes()) {
    formOutputGroup.removeChild(formOutputGroup.firstChild);
  }
}

clearGroupButton.addEventListener("click", clearGroup);

/* this function allows the user to press the "Create groups" button several times
 * without having the information text being shown more than once.
 */
function clearMsg(event, parent) {
  event.preventDefault();
  while (parent.hasChildNodes()) {
    parent.removeChild(parent.firstChild);
  }
}
