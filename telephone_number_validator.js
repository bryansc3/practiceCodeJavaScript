/*For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. 
  Your job is to validate or reject the US phone number based on any combination of the formats provided above. 
  The area code is required. If the country code is provided, you must confirm that the country code is 1. 
  Return true if the string is a valid US phone number; otherwise return false.*/

function telephoneCheck(str) {
  return /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/.test(str);
}

console.log(telephoneCheck("555-5555"));
//Other wasted attempts
//return /1?[\(\s]?\d{3}[\)\s-]?\d{3}[\s-]\d{4}$/.test(str);
//return /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s-]?\d{3}[\s-]\d{4}$/.test(str);
