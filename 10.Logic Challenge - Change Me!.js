function changeMe(arr) {
    // you can only write your code here!
var key = ['firstName','lastName','gender','age']
var arr2 = []
for (var i=0 ; i<arr.length ; i ++){
var obj = {}
for (var j=0 ; j<key.length ; j++){
    obj[key[j]]=arr[i][j]
    }
arr2.push(obj)
    }
return arr2
}
  
 
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
