function checkAB(num) {
    // you can only write your code here!
    tempA = []
    tempB = []
    temp = ""

    for(var i = 0 ; i < num.length ; i++){
        if(num[i]=="a"){
            temp+=i
            tempA.push(temp)
            temp=""
        }else if (num[i]=='b'){
            temp+=i
            tempB.push(temp)
            temp=""
        }
    }
console.log(tempA)
console.log(tempB)

check = false

for(var i=0 ; i<tempA.length ; i++){
    for(var j=0 ; j<tempB.length ; j++){
        if(tempA[i]-tempB[j] == 4){
            check = true
        }
    }
}

for(var i=0 ; i<tempB.length ; i++){
    for(var j=0 ; j<tempA.length ; j++){
        if(tempB[i]-tempA[j] == 4){
            check = true
        }
    }
}

return check
}
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false
  console.log(checkAB('bbbbsdfa'))