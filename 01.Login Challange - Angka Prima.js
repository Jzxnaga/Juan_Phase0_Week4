function angkaPrima(angka) {
    // you can only write your code here!
var check= false
for(var i = 2; i <= angka/2; ++i)
{
    if(angka % i == 0)
    {
        check = true;// bukan angka prima kalo true
        break;
    }
}
if (!check)
    return true
else
    return false
}
  
  // TEST CASES
  console.log(angkaPrima(3)); // true
  console.log(angkaPrima(7)); // true
  console.log(angkaPrima(6)); // false
  console.log(angkaPrima(23)); // true
  console.log(angkaPrima(33)); // false