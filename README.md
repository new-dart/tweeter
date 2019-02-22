# Tweeter Project

Tweeter is a simple, single-page Twitter clone.

This repository is the completed code for a project: Students have forked and cloned this repository from <https://github.com/lighthouse-labs/tweeter>, then built upon it to practice their HTML, CSS, JS, jQuery and AJAX front-end skills, and their Node, Express and MongoDB back-end skills.

This completed product could not have been done without the help of the Lighthouse Lab Mentors and the other students in the cohort.

## Getting Started

1. Fork this repository, then clone your fork of this repository.
2. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.
5. To compose a new tweet, click the Compose button in the top-right corner.
   !["The Main Page: The form to enter a new tweet is currently hidden. Clicking the Compose button will trigger the reveal."](https://github.com/new-dart/tweeter/blob/master/docs/Compose%20Box%20Hidden.png?raw=true)
   !["The Main Page: The form is visible! The form can disappear again if you click the Compose button a second time."](https://github.com/new-dart/tweeter/blob/master/docs/Compose%20Box%20Revealed.png?raw=true)

   1. To hide the form, click the Compose Button a second time.

6. The Form's submission is conditional. If the form is empty or exceeds 140 characters, an error will prevent it from being added to the Database.
   ![Tweet Form Error Message: If the form is empty, submission will be denied and an error message will reveal itself."](https://github.com/new-dart/tweeter/blob/master/docs/Empty%20Tweet%20Error%20Message.png?raw=true)
   ![Tweet Form Error Message: If the length of the tweet exceeds 140 characters, submission will be denied and an error message will reveal itself."](https://github.com/new-dart/tweeter/blob/master/docs/Too%20Many%20Characters%20Error%20Message.png)

## Dependencies

- Express
- Node 5.10.x or above
- Body-Parser
- Chance
- MD5
- MongoDB
