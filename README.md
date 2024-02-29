# React/Bootstrap/Capacitor Example

Base project using:
- reactjs
- capacitorjs
- bootstrap, react-bootstrap

## Getting started

Install dependancies
npm i

Add Capcitor Types
npx cap add android

(or ios)

Start (web) project
npm start

Open Android Studio with Project
npx cap open android

Sync files between vs code project and android studio
npm run sync

To run the app in Android Studio - click run button

### Simple change to see effect

in the .env file you can chnage the brand name to see impact of chnages

A .env file needs a new
npm start
npm run sync

to be visible

## Requires

Android Studio

## Commands

npm start - starts in browser

npm run sync - builds project and syncs to Android Studio

## Styling

https://react-bootstrap.github.io/docs/getting-started/introduction
https://getbootstrap.com/docs/5.3/customize/overview/

## Creating a Splash Sceen
Provide icon and splash screen source images using this folder/filename structure:

resources/
├── icon-only.png
├── icon-foreground.png
├── icon-background.png
├── splash.png
└── splash-dark.png

https://capacitorjs.com/docs/guides/splash-screens-and-icons

npx capacitor-assets generate