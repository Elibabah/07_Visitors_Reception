# 07_Visitors_Reception

Visitors Reception central built with JavaScript, HTML, CSS and Firebase.

![](https://media.giphy.com/media/d1FL3HftUyMPMUwM/giphy.gif)

---

The visitors entry registration has became an important task to do and that we can`t avoid since the track of people that have been together and get exposed to a positive COVID-19 person need to be informed and take care of theirselves inmediateley. In many countries, this is a mandatory feature to all the open spaces, events, buildings, offices, stores, everywhere the managers of the spaces have to take full responsability to provide the health care services a list of people that have match in one place. But, even before the pandemic the Digital Transformation have been changing already the way in which the register of entries into a building or an event have been managed, but this procedure still being a tedious task for many people that now are pushed to do manually and is as well very irrealistic that in this era, people have to be sitting all day into a entrance just to take the list of the people visiting and tracking every movement of the entrances, and making write the people's name, last name, reason to visit, timing, signature, etc, into a huge notebook, all with the same pen. Specially for the amount of exposure they have and the huge responsability that this implies, in the future this systems will be replaced for ones that makes the things easy for us and at the same time that provides a huge significant advantage; the analisys of the registration data because will be persistent and the prediction of the people confluence to avoid the crowds that in some scenarios can mean a big health problem.

In this current scenario we have to build a proper solution that allow a coworking building to register every visit, with the personal contact info, and a picture of their face, the reason and the people or office that visits and an administrators separate view to go see the current people registered and check basic analytics of it, like how many during the last days and other specific numbers that may be useful to take decisions.

---

Índice

    1. Description
    2. User Definition & User Stories (UX)
    3. Aceptance Criteria
    4. Technical Requirements
    5. Hacker edition
    6. Expected Learning Outcomes

---

## 1. Description

Web Application for a tablet to digital registration of visitors at the entrance of a coworking building with 8 floors, each floor with 2 offices, each office have at least one base worker. The web app also have a administrator view private, to see the current registers of the day and the important numbers as how many registers during the month, the week and the day. Also the offices with more visitors and the full list of total visitors.

## 2. User Definition:

**User 1: Visitors to the coworking building**

**User 2: Coworking building reception administrators, concierge**

## User Stories:

The interface should allow the visitors:

- To touch or click to register:
  - Name and Last Name
  - Email or phone number
  - Company or office that visits
  - People that visits
  - Reason to visit
  - If had appointment already or need to notify to the office that visits
  - After this data was captured, be able to take photo of the visitor face
  - Store all the registration and confirm the register have been done successfully and the entrance is allowed to the visitor

The interface for the co-working administrators (should not be visible as first view for visitors):

- Show a private view with password access
- Show the list of full visitors ordered by date of registration
- Show how many visitors have been registered until now
- Show how many visitors have been registered during the last 30 days
- Show how many visitors have been registered during the last week (7 days)
- Show how many visitors have been registered during the day.
- Be able to add a mark of the visitors that have leave the building as "Leave date" and the date of leaving.

## 3. Acceptance Criteria

- Responsive interface for tablets and desktops
- Cover all the US

---

![firebase](https://media.giphy.com/media/Me7C8ln2qbeAguJjzT/giphy.gif)

## 4. Technical Requeriments /

- Use only JavaScript Vanilla ES6 (ECMAScript 2015 or higher), HTML5, CSS3
- Pair team programming
- Fork this repository and clone your own, choose who will be the owner of the repository of the pair team.
- Start working doing `npm init`
- Set a .gitignore file to avoid the node_modules to be uploaded in GitHub.
- Create the Release branch (to deliver and deploy) and the Development branch (to work on it daily).
- Make a full responsive website considering responsive site specially for tablet or Ipad devices and Desktop.
- Follow up Semantic HTML rules, have header, navigation bar, main, sections, asides, footer, etc.
- Create an Assets folder to store the assets of the site.
- Document every Agile SDLC steps on ReadMe.md. During the planning step document a screenshot of your Backlog & the prioritized agenda per each one.
- Use Bootstrap Framework to speed your UI coding. Bootstrap is the unique library allowed.
- Ask for Operative System access to camera usage
- Data persistance: Data of the registrations must be persistent, store the data in Firestore Database.
- Read the Data from Database to show on the administrators view.
- Personalize the project for a coworking like: [Terminal 1](https://terminal1.mx/)
- Two sprints of one week each one with Bilingual demo on Thursdays by 10am. (to be confirmed)
- For the second Demo, be ready to have testing users that will test your product and see your demo.

The _boilerplate_ should contains a file structure as a starting point like thisas all the sample dependencies and tests configuration:

```text
./
├── .editorconfig
├── .eslintrc
├── .gitignore
├── README.md
├── package.json
├── assets
├── src
│   ├── app.js
│   ├── data.js
│   ├── index.html
│   ├── index.js
│   └── style.css
└── test
    ├── app.spec.js
    └── index.html
```

### Scripts / Files

- `README.md`: should explain the about of the project, the technology used, the users definitions and the flow chart and prototypes, as well document all the SDLC steps
- `assets /`: Should contain your assets like images, logos, etc.
- `src / index.html`: this is the entry point to your application. This file must contain to _markup_ (HTML). From this entry point the app must redirect if visitor wants to register or if loged as admin to other views.
- `src / app.js`: here you must listen to DOM events and generate the logic to redirect to each module, admin and view.
- `src / visitors.html`: This is the view for the visitors
- `src / visitors.js`: here you must write new Database entries to the Firestore Database.
- `src / admin.html`: This is the view for the administrators dashboard.
- `src / admin.js`: here you must implement the web application main functionality to interact with the users.
- `src / administration.js`: here you must fetch/get the database registrations to show it into the admin view

**CLUES:**

You have to identify the data you need to create your own JSON storing the co-working statis data as number as offices, people in charge of it and building name to create dinamically the selectable entries for the visitors.

- [Use a JSON format validator] (https://jsonformatter.curiousconcept.com/)
- [Read the Firebase documentation to learn how to use Firestore Cloud DB and create your developer account gmail email required](https://firebase.google.com/docs/firestore)
- [Learn more about Firebase (Google) database: Firestore](https://www.youtube.com/watch?v=itNsRn1kjLU)
- First get your Firebase SDK authentication code to add to your application, then add the Firestor services to your app as well.
- [Learn about the data sctucturing in Firestore, "Collections" and the data types allowed](https://firebase.google.com/docs/firestore/manage-data/data-types)
- [Plan and think very well the data structure that your objects "Collections" in Firebase will store, rember the data types and choose accordingly what you need to store.](https://firebase.google.com/docs/firestore/data-model)
- [Learn about the Date object in JavaScript](https://www.w3schools.com/js/js_dates.asp)
- Learn about the img storing in firebase
- Upgrade your skills changing promises use for fetching data to ASYNC & AWAIT Features to master asynchronous coding
- Learn and find how to access to the camera form HTML & JS.
- Learn how to get the camera snapshot and store it.

**Additional Resources**

These are some tips that can help you in organizing and carrying out your project, taking into account the development of your _soft skills_:

- To start an organization of your project, see with what resources
  accounts and the time you have to complete it.
- If there is something that you do not know, ask and try to solve it; you can start with
  a google search, then consulting your squad and finally your coach.
  If there is something that I do not know, someone else can help me. Learning is a
  collaborative process.
- Once you start to move forward ask for feedback, your colleagues may have
  excellent ideas or ways to solve the project that can help you.
- When you run into a problem, look for alternatives, and for that, consult
  different sources.
- If you already see yourself investing a lot of time in details, you should know how to prioritize and
  stick with the most important, projects have limited time and you must
  know how to manage it.
- Work as a team, ask questions and try to complete the project without giving up.
- Prepare your presentation, if I cannot communicate my ideas to others I do not know
  You will appreciate all the effort and work you put into it.

---

## 5. Hacker Edition

---

You are not limited to implementing only the mandatory part, you can go forward implementing this functionalities:

- The visitors can re-shoot the photo if they do not like it.
- The administrators can see the picture of the visitors as well on the lists.

---

## 6. Expected Learning Outcomes

---

- [ ] npm init
- [ ] JSON
- [ ] ASYNC AWAIT
- [ ] DB Firestore
- [ ] My first CRUD in Firebase
- [ ] My first Data Structuring project
- [ ] Access to Operative System feature: camera
- [ ] Array methods and iterators
- [ ] object iterators and key finders
- [ ] import & export modules
- [ ] GitHub Branch Modeling > Development > Release

---

# ReadMe

---

> This Readme should be replaced with the project documentation following the SDLC procedures for Agile Software Development Lyfe Cycle.
