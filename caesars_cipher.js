function rot13(str) {
  //A:65, Z:90
  return str.split("").map(m=>!/\W/.test(m)?
                                String.fromCodePoint(m.charCodeAt()+13>90?
                                  m.charCodeAt()-13:
                                  m.charCodeAt()+13)
                              :m).join("");
}

console.log(rot13("SERR PBQR PNZC")); //This return: FREE CODE CAMP
