# Auth0 TestCafe Login script

A simple [TestCafe](https://github.com/DevExpress/testcafe) script to test a user login using [Auth0](https://auth0.com/) Universal Login with a Single-page application.

### Setup
1. Create a Single-page Application in Auth0 and set the Allowed Callback URL to `https://jwt.io` 
2. Make sure you have a Connection enabled for the Application and a test user to login with.
3. Copy the Client ID of the Application and your Auth0 Domain/Custom Domain and add it to the `.example.env` file. Add the USERNAME and PASSWORD of a test user to the file as well.
4. Rename the `.example.env` file to `.env`.
5. Run `npm install` and `npm install -g testcafe`.
6. Run the test using `testcafe chrome auth0-login.js`.
