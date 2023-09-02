function convertToRoman(num) {
  const listNum={1: "I", 4:"IV", 5:"V", 9:"IX", 10:"X", 
                40:"XL", 50:"L", 90:"XC", 100:"C",
                400:"CD", 500:"D", 900:"CM", 1000:"M"};
  let romanNum="";
  let num0=Math.floor(num/1000);
  let num1=Math.floor(num%1000/100);
  let num2=Math.floor(num%100/10);
  let num3=num%10;
  let arr=[num0*1000,num1*100,num2*10,num3]
  for(let numb of arr){
    if(100<=numb && numb<400 ){
      
      romanNum+=listNum[100]
    }
  }

  ///let a=num.toString().split("").map((ele,ind,arr)=>ind==0?ele);
  //if(num==4)
    //romanNum+=listNum[4];
  //if(num<4){
    //for(let i=0; i<num; i++){
      //romanNum+=listNum[1];
    //}
  //}
 return romanNum;
}

console.log(convertToRoman(332));
