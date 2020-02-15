function deepSum (arr) {
    // Code disini
    // var test = arr
    // console.log (test[0])
    // console.log (test[0][0][0])
    // console.log (test[1])
    // console.log (test[2])
    // var length03;
    // var length02;
    // var length01 = arr.length;
    // var length02 = arr[0].length;
    // var length03 = arr[0][0].length
    // console.log (length01)
    // console.log (length02)
    // console.log (length03)

    var total = 0

for (var i=0 ; i<arr.length ; i++){
    for (var j=0 ; j<arr[i].length; j++){
        for (var k=0 ; k<arr[i][j].length ; k++){
            total=total+arr[i][j][k]
        }
    }
}
if(total == 0) {
    return "no number"
}else{
return total
}




  }
  
  //TEST CASE
  console.log(deepSum([
    [
      [4, 5, 6],
      [9, 1, 2, 10],
      [9, 4, 3]
    ],
    [
      [4, 14, 31],
      [9, 10, 18, 12, 20],
      [1, 4, 90]
    ],
    [
      [2, 5, 10],
      [3, 4, 5],
      [2, 4, 5, 10]
    ]
  ])); // 316
  
  console.log(deepSum([
    [
      [20, 10],
      [15],
      [1, 1]
    ],
    [
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      [2],
      [9, 11]
    ],
    [
      [3, 5, 1],
      [1, 5, 3],
      [1]
    ],
    [
      [2]
    ]
  ])); // 156
  
  console.log(deepSum([])); // No number