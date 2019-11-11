import React from 'react';

/*
 * Changed this to use ES6 arrow function and export default at the bottom of the class.
 * This is just another way to write a functional component.
 */

/*
* In this version I've just destructured the company prop, which makes it a little prettier
*/
const Footer = ({company}) => {
  const date = new Date().getFullYear();

  return <h6>Copyright {company} (c) {date}</h6>
};
//If you look in App.js, you'll see that this syntax (export default) means you don't need destructuring to do your import
export default Footer;
