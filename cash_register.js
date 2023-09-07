function checkCashRegister(price, cash, cid) {
  let changes={status:"", change:[]};
  const units={"PENNY":1, "NICKEL":5, "DIME":10,
               "QUARTER":25, "ONE":100, "FIVE":500, 
               "TEN":1000, "TWENTY":2000, "ONE HUNDRED":10000};
  let minus=(cash-price)*100;
  let cant=cid.map(m=>{m[1]=(m[1]*1000/units[m[0]])/10; return m});
  let pushValues=[];
  for(let i=cant.length-1; i>=0; i--){
    let unit=[].concat(cant[i]);
    let cont=0;
    while(minus>=units[unit[0]] && unit[1]>0){
      minus-=units[unit[0]]; 
      cont=cont+1;
      unit[1]-=1;
      if(minus<units[unit[0]] || unit[1]==0){
      pushValues.push([unit[0],cont*units[unit[0]]/100]);
      cant[i]=[unit[0],unit[1]];
      }
    }
  }
  if(minus>0){
    changes["status"]="INSUFFICIENT_FUNDS";
  }
  if(minus==0){
    changes["status"]="OPEN";
    changes["change"]=pushValues;
  }
  if(minus==0 && cant.every(m=>m[1]==0)){
    changes["status"]="CLOSED";
    changes["change"]=cid.map(m=>{m[1]=(m[1])/100; return m});
  }
  return changes;
}

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
