# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Getting started](#getting-started)
  - [Requirement](#requirement)
  - [Npm start](#npm-start)
  - [Npm build](#npm-build)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode

### Screenshot

![Desktop preview](./challenge/design/desktop-preview.jpg)

### Links

- Demo: [Preview here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties for dark/light mode
- Flexbox
- CSS Grid
- Mobile-first workflow with [Tailwindcss](https://tailwindcss.com/)
- [React](https://reactjs.org/) - JS library

### What I learned

I learned so many things in this challenge : 

- create components and composable with ReactJs
- structure this challenge through Github Project kanban
- use svg as component
- lazy load card component on countries list
- manage env variable
- dark mode toggle

### Continued development

To improve this project, it will be nice to use Typescript and try unit testing for react component.

### Useful resources

- [VueJs developers guide to react](https://dev.to/_masahiro_h_/vue-js-developers-guide-to-react-lg0) - This helped me for multiple situations. I'm currently learning ReactJs and it was more easy to compare some behavior with VueJs.
- [Object-fit](https://tailwindcss.com/docs/object-fit) - The documentation of TailwindCss is just amazing. I was faced with this problem very quickly for displaying flags.
- [Heroicons](https://heroicons.com/) - Beautiful hand-crafted SVG icons, by the makers of Tailwind CSS.

## Getting started

### `requirement`

You need to create `.env` file with the following content : 
```
REACT_APP_COUNTRIES_API_URL=https://restcountries.com/v3.1
```

This application is based on the latest [REST COUNTRIES](https://restcountries.com/#api-endpoints-v3-all) version, but you can change to v2.

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


## Author

- Github - [Geminii](https://github.com/Geminii)
- Dev.to - [Geminii](https://dev.to/geminii)
- Frontend Mentor - [@Geminii](https://www.frontendmentor.io/profile/Geminii)

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.
