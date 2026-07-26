# Frontend Mentor - IP address tracker solution

This is a solution to the [IP address tracker challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements on the page
- See their own IP address on the map on the initial page load
- Search for any IP addresses or domains and see the key information and location

### Links

- Solution URL: [here](https://github.com/wis-agh64/frontendmentor/tree/main/ip-address-tracker-master)
- Live Site URL: [here](https://wis-agh64.github.io/frontendmentor/ip-address-tracker-master/)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- JavaScript
- [TailwindCSS](https://tailwindcss.com/)

### What I learned

This was a fun review on mapping and using APIs. I also took the opportunity to set up a proxy on Cloudflare to protect the API key (even if not necessary for the purposes of this project). However, this ended up not working out well with viewing the user's own location on initial load, so I removed it.

### Continued development

I want to try my hand at React, but with a more sophisticated project. 

### Useful resources

- [The Tailwind CSS documentation!](https://tailwindcss.com/docs/installation/using-vite)

### AI Collaboration

Used Claude to debug an issue with the location icon becoming misaligned with the coordinates if the map zoom changes, and it pointed out that the iconAnchor can be used to resolve this :\)

## Author

- Frontend Mentor - [@wis-agh64](https://www.frontendmentor.io/profile/wis-agh64)