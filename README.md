# Tweeter Project

Tweeter is a simple program which mimics a twitter feed where users can post tweets anonymously.

This program uses a mongodb database to store the tweets.

The program consists of:

A textarea for user input, which is limited to 140 characters.

A scrollable feed of previously posted tweets.

A button which hides and shows the textarea input for readability of tweets,

Hover action of tweets which hides/shows non functional favourite, flag and retweet buttons.


## Getting Started

1. Fork this repository, then clone your fork of this repository.
2. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.
5. Press "Compose New Tweet" button to get started!


## Screenshots


!["Tweet icons hover functionality"](https://github.com/elijguy/tweeter/blob/master/docs/icons.png?raw=true)

!["Limit of textarea reached"](https://github.com/elijguy/tweeter/blob/master/docs/counter.png?raw=true)

!["Compose button hover and autofocus functionality"](https://github.com/elijguy/tweeter/blob/master/docs/composebutton.png?raw=true)



## Dependencies
- Moment.js
- Express
- Node 5.10.x or above
