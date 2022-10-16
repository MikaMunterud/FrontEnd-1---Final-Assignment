<head><link el="styleSheet" href="../css/index.css"></head>

# **Final Assignment - FrontEnd 1**

This Markdown file will explain how this program works and how it was created. It will also mention possible future improvements, but to start with, it will explain how to get this program started.

This programs main function is to to divide people into groups based on an attribute that the user can choose.

## **1. Quick Start**

### **1.1. Step 1**

Download this repository by either forking it or [clone](https://github.com/Mumsizzz/FrontEnd-1---Final-Assignment.git) this link into to your own account. Open the repository in Visual Studio Code and download the extension "Live Server".

![Live Server](img/LiveServer.png)

### **1.2. Step 2**

Open index.html with Live Server.

**These are the files included in this repository:**

```css
    Final-Assignment
        -> css
            # grouping.css
            # index.css
            # members.css
            # readme.css
            # register.css
        -> html
            <> grouping.html
            <> index.html
            <> members.html
            <> readme.html
            <> register.html
        -> img
             ☐ LiveServer.png
        -> js
            JS grouping.js
            JS markdown.js
            JS members.js
            JS script.js
        {} members.json
        ⓘ README.md
```

## **2. Program structure**

### **2.1. Starting page**

On the starting page when opening the index.html file the user will have the option to choose between four different options.

1. Register a new member
2. Check members
3. Create groups
4. README.md

#### **2.1.1. Relevant files**

```css
    -> css
        # index.css
    -> html
        <> index.html
    -> js
        JS script.js
```

### **2.2. Register a new member**

#### **2.2.1. Relevant files**

```css
    -> css
        # register.css
    -> html
        <> register.html
    -> js
        JS script.js
    {} members.json
```

When the user choose to "Register a new member" they will be redirected to a form where they can input information about a new member. All fields needs to be filled to be able to register a new member. If the e-mail address is already registered on another member, the user will be informed about the existing member and and asked to input another email.

When all information is correctly inputted the user can submit the information and a new object of the user will be saved into the members.json file.

Afterwards the user can input more users or Return to the main paige.  

### **2.3. Check members**

#### **2.3.1. Relevant files**

```css
    -> css
        # members.css
    -> html
        <> members.html
    -> js
        JS members.js
    {} members.json
```

When the user press the button "Check members", they will be redirected to a paige which lists all current members and shows clearly how many members are registered.

There are a few future possibilities to improve this page which will be further discussed in the Future improvements chapter below.

### **2.4. Create groups**

#### **2.4.1. Relevant files**

```css
    -> css
        # grouping.css
    -> html
        <> grouping.html
    -> js
        JS grouping.js
    {} members.json
```

When the user choose to "Create groups", they will be redirected to a page where they have the option to choose which premises the groups should be based on.

The groups can be based on the members:

* Age
* Personality type (red, blue, green, yellow)
* Work status
* Relationship status (grouped by below pairing)
  * Single & Separated
  * In a relationship, Engaged & Married
  * Divorced & Widowed
* Family status (if they have children)

After an attribute has been chosen, the user must write how many people should be put into each group. The minimum value the user can input is 2 people per group and the maximum amount is half of the total amount of members. If the total amount of members is uneven the maximum value is half of the total amount of members and rounded up to avoid having 1 person alone in a group.

Only after groups have been created the user can use the button to show all the groups or if they want, input the group index to just show the requested group members.

### **2.5. README.md**

#### **2.5.1. Relevant files**

```css
    -> css
        # readme.css
    -> html
        <> readme.html
    ⓘ README.md
```

When pressing the README.md button the user will be redirected to a webpage where this file has been converted to a HTML file and if they wish they can download the document locally.

## **3. Future improvements**

This program has many future improvement possibilities.

Each component of this program has be analyzed and below follows a few possible future improvements for each part.

### **3.1 Register a new member**

The form to register a new member could be further elaborate by making it possible for the user to add their own attributes that they wish for the registered members to have. In this current program, the attributes have been pre-chosen and the user have to input all the chosen information before a new member can be registered and created. By that note the possibility for the user to remove an already chosen attribute could as well be a possible program improvement.

### **3.2 Check members**

This program's page to check the current members is at this moment very basic. To further improve this page, an alternative would be to add a function so the user can edit a current member. Also it could be useful to add a function where the user can remove one or all current members so that they can create a new list with only relevant people for the user.

### **3.3 Create groups**

Creating groups could be further improved by making the dividing of groups more precise. At the moment the function that is used only sorts the current members based on the external attribute. Thereafter the members are splint into groups based on the index of how many people should be placed in each group. This means that at this moments there is no guarantee that the grouping is fully precise.

Another improvement could be to make it possible for the user to download the list of members and their groups after they have created them. THis will make it easier for the user to use the outcome of this program and share the groupings to relevant people.

### **3.4 README.md**

This current way of reading the information in this README.md file in the webb browser could be improved. At the moment this README.md file has been converted into a html file and isn't linked to the actual file. An improvement of this program could be to link and render this file to the html file so if any information would be updated, it will automatically be updated on the webb browser.

### Lös problemet

Skriv kod som löser problemet du formulerat ovan. Lösningen ska kunna demonstreras på index.html eller någon undersida genom att köra kod skriven i javascript. Utgå från script.js, men det går bra att skapa ytterligare filer, och att skriva javascript i script-taggar direkt på sidorna, om det fungerar bäst. Kommentera koden så att en kollega kan följa vad som händer när koden körs. Utgå från din egen kunskapsnivå när du skriver kommentarer.

### Teknisk dokumentation

Byt ut filen README.md till en fil du skrivit själv. Syftet med den tekniska dokumentationen är att beskriva vad din kod gör, och hur en annan utvecklare kan göra för att använda din lösning. Utgå från din egen kunskapsnivå och försök inleda med en så kortfattad beskrivning som möjligt av problemet. Exempel:
_This code will create groups of users based on how compatible their respective zodiac-signs are._

Beskriv sedan vilka steg en utvecklare behöver gå igenom för att nå samma resultat, samt vilka delar (om några) som kan modifieras.
