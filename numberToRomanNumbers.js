function convertToRoman(num) {
  const listNum={1: "I", 4:"IV", 5:"V", 9:"IX", 10:"X", 
                40:"XL", 50:"L", 90:"XC", 100:"C",
                400:"CD", 500:"D", 900:"CM", 1000:"M"};

  let num0=Math.floor(num/1000);
  let num1=Math.floor(num%1000/100)*100;
  let num2=Math.floor(num%100/10)*10;
  let num3=num%10;
  let arr=[listNum[1000].repeat(num0),
  
        num1<400?listNum[100].repeat(num1/100)
        :num1==400||num1==500?listNum[num1]:num1<900?
        listNum[500]+listNum[100].repeat((num1-500)/100):listNum[900],

        num2<40?listNum[10].repeat(num2/10)
        :num2==40||num2==50?listNum[num2]:num2<90?
        listNum[50]+listNum[10].repeat((num2-50)/10):listNum[90],

        num3<4?listNum[1].repeat(num3)
        :num3==4||num3==5?listNum[num3]:num3<9?
        listNum[5]+listNum[1].repeat(num3-5):listNum[9]]
 return arr.join("");
}

console.log(convertToRoman(83));
