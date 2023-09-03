function convertToRoman(num) {
  const listNum={1: "I", 4:"IV", 5:"V", 9:"IX", 
                 10:"X", 40:"XL", 50:"L", 90:"XC", 
                 100:"C", 400:"CD", 500:"D", 900:"CM", 
                 1000:"M"};

  const arr=[Math.floor(num/1000),
             Math.floor(num%1000/100),
             Math.floor(num%100/10),
             num%10];
  
  const romanNumber=arr.map((m,ind)=>
                      {let a=Math.pow(10,3-ind); 
                          return ind!=0?
                                    m<4?
                                      listNum[a].repeat(m):
                                    m==4||m==5?
                                      listNum[m*a]:
                                    m<9?
                                      listNum[5*a]+listNum[a].repeat((m-5)):
                                    listNum[9*a]
                                 :listNum[a].repeat(m)
                      });
  return romanNumber.join("");
}

console.log(convertToRoman(3243));
