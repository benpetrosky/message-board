# message-board

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Planning

1. Configuration/dependencies
  * This should include ALL dependencies.
  * It should also include WHERE they are defined and used in the project
  * It could include a short description of what each does for you

2. Specs
  * Spec 1: description: user can add a question with their name and                                    their closest attempt at solving their problem to message-board,

    input example: question:"What is the difference between a class and an ID tag?"  author: "Thomas Anderson" what are your thoughts on the  question?: "I'm    thinking an ID is only used for inline tags but a class should be used for larger blocks of code. Not sure though.",

    output: "Thomas Anderson - What is the difference between a class and an ID                   tag? I'm thinking an ID is only used for inline tags but a class should be used for larger blocks of code. Not sure though.".

  * Spec 2: Description: users can answer questions and give their name,

    input example: author: "Trinity" answer: "That's what I thought initially, but they can both be used as either inline or block tags.  Conceptually, the only difference is that an ID can only apply to one chunk of code, but a class can be tagged in several different parts of your code.",

    output. "Trinity - That's what I thought initially, but they can both be used as either inline or block tags.  Conceptually, the only difference is that an ID can only apply to one chunk of code, but a class can be tagged in several different parts of your code."

    * Spec 3: Description: users can update their question,

      input example: question:"What is the difference between a class and an ID tag?" update: "Which is more powerful? A class or an ID TAG?",

      output. "Thomas Anderson - Which is more powerful? A class or an ID TAG?"

3. Integration
  * Initial routes or index pages with all dependencies in Controller/index.html head
  * Template/html page for  question
  * Template/html page for about
  * Template/html page for ... (one for each route/integrated user story)
  * Display...
  * Integrate feature that...

4. UX/UI
  * Include and modify bootstrap/materialize/Sass etc.
  * Develop custom style

5. Polish
  * Delete unused chunks of code
  * Add a header that will allow user to navigate to any page
  * Make README awesome

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* `cd message-board`
* `npm install`
* `bower install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
