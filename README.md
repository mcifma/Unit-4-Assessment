# Unit-4-Assessment
Skip to content
Search or jump to…

Pulls
Issues
Explore
 
@chifee20 
Learn Git and GitHub without any code!
Using the Hello World guide, you’ll start a branch, write comments, and open a pull request.


sei-toronto
/
SEI-36-8
Private
0
0
13
Code
Issues
Pull requests
Projects
Wiki
Insights
SEI-36-8/assessments/project-4/
Latest commit
@alexanderghose
alexanderghose add assessment 4
…
3 hours ago
Git stats
 History
Files
Type
Name
Latest commit message
Commit time
. .
readme.md
add assessment 4
3 hours ago
readme.md


Unit 4 - Assessment
GOAL
The goal of this assessment is to gauge your ability to develop a minimal ReactJS application that renders user-defined components, incorporating dynamic styling and reacts to some basic user interaction.

OVERALL APPLICATION REQUIREMENTS
The application, as you will soon see in the demo, requires that you code two components, <CircleSelector> and <Circles>, and render them within the existing <App> component.

When the user clicks one of the four buttons in <CircleSelector>, the corresponding "circle" within the <Circles> component will be styled differently to make it appear "selected".

In addition, the button clicked within <CircleSelector> has its text changed and is also styled differently to make it look "selected" as well.

Let the hi-fi wireframes guide you.

A few more notes about the application:

It will be a front-end only application - no server-side code is required.

It will not require the use of client-side routing and thus has no dependency on react-router-dom.

All necessary CSS has been provided below. You will simply have to ensure that your components include the proper classnames (dynamically at times). Pay special attention to the provided CSS's selectors as their names will need to be incorporated into the design of the two components!

PROCESS
This assessment is an individual assignment - no collaboration please.

This assessment is "open book" - you may reference anything on your computer, Google, use notes, etc.

Be wary of spending too much time researching unless you're stuck - do not over-think this application!

It is anticipated that this challenge will take approximately 45 - 60 minutes to complete, however, you have up to three hours to complete this assessment.

CREATE AND SET UP THE REACT APP
You will be using the create-react-app CLI to generated the application.

Create the Application
Open your laptop, then:

Open Terminal.
Move to a directory that is not a git repository.
Create the React app with this command $ create-react-app project-4-assessment.
When the process has completed, $ cd project-4-assessment.
Set Up the Generated Application
Replace the contents of App.js with this "cleaned up" starter code:

import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          YOUR TWO COMPONENTS WILL GO HERE
        </main>
      </div>
    );
  }
}

export default App;
Replace the contents of App.css with the following CSS that uses flexbox to layout <App>:

body, * {
  box-sizing: border-box;
}

.App {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.App-header {
  width: 100%;
  padding: 20px;
  font-size: 24px;
  background-color: grey;
  color: white;
  text-align: center;
  letter-spacing: 3px;
}

.App main {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex: 1;
}
Use $ npm start to spin up the dev server and ensure that the application looks like this: 

Close your laptop.

WIREFRAME/COMPONENT HIERARCHY
Here is a diagram of the application's component hierarchy:



Note that both the <App> and <header> components are already in place.

Instructions & Time Guidelines (You've Got This!)
Please follow the following steps in order:

STEP 1 - Prepare
STEP 2 - Implement the App's Requirements
STEP 3 - Deploy to GitHub Pages
Assessment Steps to Complete
STEP 1 - Prepare
Briefly read through the rest of this assignment to better understand what is required before starting to code.

After watching the demo of the app and once again examining the component hierarchy, you should identify what state is necessary. Here's a hint: There's VERY little!

In addition to coding the <CircleSelector> and <Circles> components, additional code will need to be added to <App>.

STEP 2 - Implement the App's Requirements
The <CircleSelector> Component
The <CircleSelector> component can be defined as a Function Component and is responsible for letting <App> know that the user wants to select a certain circle in the <Circles> component.

Here's CSS that should be used for <CircleSelector>:

.CircleSelector {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 200px;
  width: 150px;
  border: 4px solid purple;
  border-radius: 8px;
  margin-right: 20px;
}

.CircleSelector button {
  height: 30px;
  width: 125px;
  background-color: purple;
  color: white;
  border-radius: 4px;
  text-transform: uppercase;
  cursor: pointer;
  outline: none;
}

.CircleSelector button:hover {
  background-color: limegreen;
}

/* Adding a class of 'selected' to the selected button dynamically is secret sauce */
.CircleSelector button.selected {
  background-color: white;
  color: limegreen;
  border: none;
  cursor: default;
}
After the <CircleSelector> is coded, styled with the above CSS, and rendered within <App>, your app should look like this:



Note that the app should load with the first button selected (think: state initialization). If the user were to click the third button, <CircleSelector> would look like this:



The <Circles> Component
The <Circles> component can also be defined as a Function Component that renders four "circles" (<div>s) with the currently "selected" circle styled differently courtesy of the following CSS:

.Circles {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  height: 200px;
  width: 200px;
  border: 4px solid limegreen;
  border-radius: 8px;
}

.Circles div {
  height: 75px;
  width: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: limegreen;
  color: white;
  font-size: 30px;
  border: 5px solid limegreen;
  border-radius: 50%;
  margin: auto 10px;
}

/* Another dose of dynamic className goodness is the winning ticket */
.Circles div.selected {
  background-color: white;
  color: purple;
  border: 5px solid purple;
}
When <Circles> is coded, styled with the above CSS, and rendered within <App>, your app should look like this:



Or this when the user selects the second circle:



You get the idea...

That's all there is to it!

STEP 3 - Deploy to GitHub Pages
The following instructions allow you to deploy any of your front-end only React apps using GitHub Pages (GitHub Pages is unable to hostfull-stack apps).

Please follow these steps to deploy your app to GitHub Pages:

In Terminal, create a local git repo: $ git init

In your GitHub account, create a new repository named project-4-assessment.

Back in Terminal, add the origin remote:
$ git remote add origin https://github.com/<your github username>/project-4-assessment.git

Be sure to replace <your github username> with your personal GitHub username!

To save time, there's no need to make a commit, the tool we are going to use will automatically make a commit and create a gh-pages branch.

In VS Code, open your package.json and add an additional top-level key/value pair:
"homepage": "https://<your github username>.github.io/project-4-assessment",.

Also in package.json, add two additional key/value pairs, "predeploy" and "deploy", within the existing "scripts" key:

	"scripts": {
  		// add these two new keys, don't forget to add a comma above
  		"predeploy": "npm run build",
  		"deploy": "gh-pages -d build"
	}
In Terminal, let's install the gh-pages npm package we just referenced in the "deploy" entry:
$ npm i gh-pages

Now run the command $ npm run deploy to deploy! (enter your GitHub credentials if asked).

The "predeploy" script automatically builds the app.

The https://<your github username>.github.io/project-4-assessment link might take a minute to become active.

Slack the deployed app's link to your instructor - congrats, you are done!

Hints
A ternary expression can be used to conditionally add a CSS class to a React element like this:

 	<div className={<conditional expression> ? 'name-of-class' : ''}>
© 2021 GitHub, Inc.
Help
Support
API
Training
Blog
About
GitHub Enterprise Server 2.22.6
