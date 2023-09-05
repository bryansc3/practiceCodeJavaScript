function checkCashRegister(price, cash, cid) {
  let changes={"status":"", change:[]};
  const units={"PENNY":0.01, "NICKEL":0.05, "DIME":0.1,
               "QUARTER":0.25, "ONE":1, "FIVE":5, 
               "TEN":10, "TWENTY":20, "ONE HUNDRED":100};
  let minus=cash-price;
  let cant=cid.map(m=>{m[1]=(m[1]*10/units[m[0]])/10; return m});
  let pushValues=[];
  
  for(let i=cant.length-1; i<cant.length;i--){
    let unit=cant[i];
    while(minus>0){
      let cont=0;
      while(minus<unit[1] && unit[1]>0){
        minus-=unit[1];
        unit[1]-=1;
        cont+=1;
        if(minus==0)
        minus+=unit[1];
      }
      pushValues.push([unit[0],cont*units[unit[0]]]);
    }
  }
  if(minus<0){
    changes["status"]="INSUFFICIENT_FUNDS";
  }
  return changes;
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
