function tukarBesarKecil(kalimat) {
    // you can only write your code here!
var kalimatbaru = ""
var temp = kalimat.toLowerCase()
for(var i = 0 ; i < kalimat.length ; i ++){
    if(temp[i]==kalimat[i]){
        kalimatbaru+=kalimat[i].toUpperCase()
    }else{
        kalimatbaru+=kalimat[i].toLowerCase()
    }

}
return kalimatbaru




  }
  
  // TEST CASES
  console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
  console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
  console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
  console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
  console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"