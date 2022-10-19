/* this fetch the object members from the JSON file members.JSON. After that it
 * stringify it into localStorage and then parse it back to an JSON object. This
 * makes it possible to access the same local storage throughout the whole program.
 */
fetch("../members.json")
  .then((response) => response.json())
  .then((data) => {
    localStorage.setItem("members", JSON.stringify(data));
    if (!localStorage.getItem("myData")) {
      localStorage.setItem("myData", JSON.stringify(data));
    }
  });

let members = JSON.parse(localStorage.getItem("members"));
let myData = JSON.parse(localStorage.getItem("myData"));
