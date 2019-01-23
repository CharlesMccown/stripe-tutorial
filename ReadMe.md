# Welcome to my Gatsby Stripe Tutorial

## Setup
First you need to create an account with stripe.
Next find your secret test key in your account.
Create a file named .env.development inside the site directory.
Add this to the file (Including your secret key)
```
# Stripe secret API key
STRIPE_SECRET_KEY=
```
 NOTE: Make sure the gitignore file is ignoring .env.development files!!!

Also, for deployment you'll want a .env.production file that serves the name perpose.

## Development
open a terminal
cd to the site directory
Enter the following into the command prompt:
```
npm install
gatsby develop
```

