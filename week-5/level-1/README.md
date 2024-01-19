# React Business Card App

## Problem Statement

### Basic

You have to create a simple React App which has a reusable Card Component with the following features:

- Ability to pass in props to the Component.
- The Card must show a person's:
  - Name
  - A short description
  - LinkedIn, Twitter, and other Social Media Handle buttons
  - Interests Section
- You can assume that this is kind of an e-business card, so feel free to put in your creativity.

### Advanced

- Create a page where you can add these kinds of Cards by taking input from the user.
- Create a backend server where these cards get stored in a DB and can handle basic CRUD operations.
- Give the feature to perform CRUD operations from the frontend (Can be restricted to the admin only as well).

---

## Run the Project

- Backend: `node index.js`
- Frontend: `npm run dev`
- Login: {username: "admin@one.com" | password: "adminOnePass"}

## Features

1. Admins can login and create cards:

   - Create cards with live preview.
   - Login with persistent user data in localStorage.

2. Users can login and see all created cards:
   - Context API to create user context upon login.

## `useState`

**Components: CreateCards**

Usage: States used to manage and preview real-time changes in the default card.

## `useEffect`

**Components: AllCards**

Usage: Fetches all the cards from the DB as the user logs in via user context.

## Context API

**Component: userContext**

Usage: Creates user context and stores it in localStorage via `useContext` hook.
