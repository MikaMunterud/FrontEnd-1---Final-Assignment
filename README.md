# **Final Assignment - FrontEnd 1**

>This Markdown file will explain how this program works and how it was created. It will also mention possible future improvements, but to start with, it will explain how to get this program started.<br><br>
The main function of this program is to to divide people into groups based on an attribute that the user can choose.

## **1. Definition of the problem**

>It can be difficult to divide people into groups. Whether it is for a work or a school project, the employees or students must sometimes be split into different groups to solve a problem. Very often dividing people into groups are usually made randomly without considering the different life situations people are in or what kind of personal attributes they have. <br><br>
This program will allow you to input certain data for each person which will be saved and stored. Afterwards you have the option to create groups based on a certain personal attribute and input how  many people should be placed in each group. <br><br>
Teachers or project leaders who have to divide their students or employees into groups are this programs primary user target. However this program works for any users who have the need to  divide people into groups and wish for a more structured way to  create the project groups.<br><br>
You can read more about how this program works, how it was created and how it could be furthered improved  by clicking the below README.md button.

## **2. Quick Start**

### **2.1. Step 1**

>Download this repository by either forking it or [clone](https://github.com/Mumsizzz/FrontEnd-1---Final-Assignment.git) this link into to your own account. Open the repository in Visual Studio Code and download the extension "Live Server".

![Live Server](img/LiveServer.png)

### **2.2. Step 2**

>Open index.html with Live Server.

**These are the files included in this repository:**

```css
    Final-Assignment
        -> css
            # grouping.css
            # index.css
            # members.css
            # register.css
        -> html
            <> grouping.html
            <> index.html
            <> members.html
            <> register.html
        -> img
             ☐ LiveServer.png
        -> js
            JS grouping.js
            JS members.js
            JS register.js
            JS script.js
        {} members.json
        ⓘ README.md
```

## **3. Program structure**

### **3.1. Starting page**

>On the starting page when opening the index.html file the user will have the option to choose between four different options.

1. Register a new member
2. Check members
3. Create groups
4. Check out README.md

#### **3.1.1. Relevant files**

```css
    -> css
        # index.css
    -> html
        <> index.html
    -> js
        JS script.js
    {} members.json
```

#### **3.1.2. JSON-file**

>This members.json file is fetched in script.js and stored into localStorage variables to make it possible to use the same members "file" throughout the whole program.

### **3.2. Register a new member**

#### **3.2.1. Relevant files**

```css
    -> css
        # register.css
    -> html
        <> register.html
    -> js
        JS register.js
```

>When the user choose to "Register a new member" they will be redirected to a form where they can input information about a new member. All fields needs to be filled to be able to register a new member. If the e-mail address is already registered on another member, the user will be informed about the existing member and and asked to input another email. Another error message will be shown as well if the e-mail format is invalid.

>When all information is correctly inputted the user can submit the information and a new object of the new user will be saved into the localStorage variable myData.

>Afterwards the user can input more users or Return to the main paige.  

### **3.3. Check members**

#### **3.3.1. Relevant files**

```css
    -> css
        # members.css
    -> html
        <> members.html
    -> js
        JS members.js
```

>When the user press the button "Check members", they will be redirected to a paige which lists all current members and shows clearly how many members are registered. Below the list of members, the user have different options they can choose.

1. Show members / Hide members
2. Show member [index] / Hide member
3. Delete members
4. Delete member [index]
5. Retrieve original members
6. Return to main page

#### **3.3.2. Show members / Hide members**

>These buttons will show or hide all the specified data of all members.

#### **3.3.3. Show member [index] / Hide member**

>These buttons will show or hide all the specified data of one member. If no index is inputted an error message will be visible for the user, requesting an index.

#### **3.3.4. Delete members**

>This allows the user to delete all members in the localStorage myData. A confirm message will be shown to the user before deletion of all members can be made.

#### **3.3.5. Delete member [index]**

>This allows the user to delete a member based on the members index. A confirm message will be shown to the user before the requested member can be deleted.

#### **3.3.6. Retrieve original members**

>If the user would like to retrieve the original members file, this button will reset the current members list to the original one if the member confirms their decision.

#### **3.3.7. Return to main pages**

>This will redirect the user to the main paige.

### **3.4. Create groups**

#### **3.4.1. Relevant files**

```css
    -> css
        # grouping.css
    -> html
        <> grouping.html
    -> js
        JS grouping.js
```

>When the user choose to "Create groups", they will be redirected to a page where they have the option to choose which premises the groups should be based on.

The groups can be based on the members:

* Age
* Personality type (red, blue, green, yellow)
* Work status
* Relationship status (grouped by below pairing)
  * Single & Separated
  * In a relationship, Engaged & Married
  * Divorced & Widowed
* Family status (if they have children)
* Random

>After an attribute has been chosen, the user must write how many people should be put into each group. The minimum value the user can input is 2 people per group and the maximum amount is half of the total amount of members. If the total amount of members is uneven the maximum value is half of the total amount of members and rounded up to avoid having 1 person alone in a group. If no attribute is chosen the members will be divided into groups based on their current index position.

>Only after groups have been created the user can use the buttons to show all the groups or if they want, input the group index to just show the requested group members. To each of those options there is a button to hide the shown members as well.

### **3.5. README.md**

#### **3.5.1. Relevant files**

```css
    -> html
        <> index.html
    ⓘ README.md
```

>When pressing the Check out README.md button the user will be redirected to the github webpage where this file is stored.

## **4. Future improvements**

This program has many future improvement possibilities.

Each component of this program has be analyzed and below follows a few possible future improvements for each part.

### **4.1 Register a new member**

>The form to register a new member could be further elaborate by making it possible for the user to add their own attributes that they wish for the registered members to have. In this current program, the attributes have been pre-chosen and the user have to input all the chosen information before a new member can be registered and created. By that note the possibility for the user to remove an already chosen attribute could as well be a possible program improvement.

### **4.2 Check members**

>This program's page could be further improve adding a function so the user can edit a current member. At the moment if the user wants to edit a current member the only possibility to do so is to delete the member and register it again with the correct information.

### **4.3 Create groups**

>Creating groups could be further improved by making the dividing of groups more precise. At the moment the function that is used only sorts the current members based on the external attribute. Thereafter the members are splint into groups based on the index of how many people should be placed in each group. This means that at this moments there are no guarantees that the grouping is fully precise.

>Another improvement could be to make it possible for the user to download the list of members and their groups after they have created them. THis will make it easier for the user to use the outcome of this program and share the groupings to relevant people.

### **4.4 README.md**

>An improvement to read this README.md file could be to convert and render this file to a html page so so the user can get a better reading view. If this would be done, it is important that the webpage and the README.md file is linked so the webb browser is automatically updated if any changes would be made to the file.
