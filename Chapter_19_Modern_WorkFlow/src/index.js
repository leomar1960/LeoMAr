// import { styleBody, addTitle, contact } from './dom';
import users, { getPremUsers } from './data';

const premUsers = getPremUsers(users);
console.log(users, premUsers);
// "babel": "node_modules/.bin/babel ./src/index.js -w -o ./dist/assets/bundle.js",