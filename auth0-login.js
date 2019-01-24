import {Selector} from "testcafe";
import { ClientFunction } from 'testcafe';
require('dotenv').config();

const AUTH0_DOMAIN = process.env.AUTH0_DOMAIN;
const CLIENT_ID = process.env.CLIENT_ID;
const USERNAME = process.env.USERNAME;
const PASSWORD = process.env.PASSWORD;

// slice out "/" at end of URL if exists
const REDIRECT_URL = (process.env.REDIRECT_URL[process.env.REDIRECT_URL.length - 1] == "/") ? (process.env.REDIRECT_URL.slice(0, -1)) : process.env.REDIRECT_URL;

fixture('Auth0 hosted database login test')
  .page(`https://${AUTH0_DOMAIN}/authorize?client_id=${CLIENT_ID}&response_type=token&redirect_uri=${REDIRECT_URL}`);


test('Auth0 Login test', async t => {

  await t
    .typeText('input[name="username"]', USERNAME)
    .typeText('input[name="password"]', PASSWORD)
    .click('.auth0-label-submit')

  const currentURL = ClientFunction(() => document.location.href);
  console.log(currentURL);

  await t
    .expect(currentURL()).contains(`${REDIRECT_URL}/#access_token=`); 
  });