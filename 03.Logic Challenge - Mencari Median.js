function cariMedian(arr) {
var mediangenap = (arr.length)/2
    medianganjil = (arr.length+1)/2

if (arr.length%2==0){
    console.log("genap")
    return (arr[mediangenap-1] + arr[mediangenap])/2
}else{
    console.log("ganjil")
    return arr[medianganjil-1]
}
}
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 7
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5