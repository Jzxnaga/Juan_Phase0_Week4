function changeMe(arr) {
    // you can only write your code here!

var key = ['firstName','lastName','gender','age']
var arr2 =[]

for (var i = 0 ; i < arr.length ; i++){
    arr2.push(1+i+'.'+arr[i][0]+arr[i][1]+' :')
    var obj = {}
    for (var j = 0 ; j < key.length ; j++){
        obj[key[j]]=arr[i][j]
        if(obj[key[j]]===undefined){
            obj[key[j]]='Invalid Birth Year'
        }
    }
    arr2.push(obj)
    if(arr2[i].age=='Invalid Birth Year'){
        arr2[i].age+=" & bisa juga ubah nya disini"
    }
    
}
return arr2
} 
 
  console.log(changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']])); // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
