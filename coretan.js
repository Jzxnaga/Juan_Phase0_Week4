// // INVENTARIS KERAN MASJID
// // =======================
// // [INSTRUCTION]
// // Terdapat function inventarisKeran yang menerima 1 parameter berupa string ,
// // string input menggambar kondisi keran masjid
// // keran yang berjalan dengan baik dilambangkan dengan symbol ^,
// // keran yang rusak dilambangkan dengan ?,
// // symbol X melambangkan dinding pemisah keran wudhu
// // [EXAMPLES]
// // input: 'XX^XX^XX^XX?XX^XX'
// // output :
// // 'terdapat 4 keran yang berjalan nomor(1, 2, 3, 5) , dan 1 keran rusak nomor(4)'
// // input: 'XX?XX?XX^XX'
// // output:
// // 'terdapat 1 keran yang berjalan nomor(3), dan 2 keran rusak nomor(1,2)'
// // input : 'XX^XX^XX'
// // output :
// // 'Semua keran berjalan dengan baik'
// // input : 'XX?XX?XX'
// // output :
// // 'Semua keran rusak'
// // [RULES]
// // - WAJIB MENGGUNAKAN PSEUDOCODE !
// // - dilarang menggunakan splice, slice, split, substring, substr
// // // YOUR PSEUDOCODE/ALGORITHM HERE

// function inventariskeran (keran) {
// var totalrusak = 0
// var totalbenar = 0
// var keranrusak = []
// var keranbenar = []
// var kerans=[]
// kerans.push('L')
// for (var i = 0 ; i < keran.length ; i++){
        
//     if(keran[i]=='^' || keran[i]=='?'){
//         kerans.push(keran[i])
//     }
// }

// console.log(kerans)

//     for (var i = 0 ; i < kerans.length ; i ++){
//         if(kerans[i]=='?'){
//             totalrusak++
//             keranrusak.push(i)
//         } else if (kerans[i]=='^'){
//             totalbenar++
//             keranbenar.push(i)
//         }
//     }

//     console.log (keranbenar)
//     console.log (keranrusak)
//     console.log (totalbenar)
//     console.log (totalrusak)


//     if(totalbenar==0){
//         return 'semua keran rusak'
//     } else if (totalrusak==0){
//         return 'semua keran berjalan dengan baik'
//     } else if (totalrusak>0){
//         var laporan =""
//         laporan = 'terdapat '+totalbenar+'keran yang berjalan pada nomor ' + 
//         keranbenar + ' & ' + totalrusak+' keran rusak pada nomor '
//         + keranrusak

//         return laporan
//     }
// }
// console.log(inventariskeran('XX^XX?XX?XX'))




// AGE VERIFICATION
// =================

// [INSTRUCTION]
// Terdapat function ageVerification , function akan mengembalikan list
// orang yang memiliki umur diatas 19 tahun. Setiap nama juga akan diberikan imbuhan :
// - jika gender male diberikan imbuhan Mr.
// - jika gender female dan umur diatas 30 akan diberikan imbuhan Mrs.
// - jika gender female dan umur dibawah 30 akan diberikan imbuhan Ms.

// [EXAMPLE]
// input : ['Miftah,male,21', 'Dhimas,male,25', 'Budi,male,13', 
// 'Toni,male,22', 'Nita,female,77', 'Nana,female,21', 'Nani,female,19']
// output : ['Mr. Miftah', 'Mr. Budi', 'Mr.Toni', 'Ms. Nita']

// [RULES]
// - dilarang menggunakan REGEX
// - dilarang menggunakan substring, substr, slice, splice
// */







// [INSTRUCTION]
// Diberikan sebuah function yang menerima parameter array bilangan bulat. Dimana
// function ini berfungsi untuk mengembalikan jumlah maksimum dari dua buah nilai
// yang dijumlahkan didalam array tersebut

// [EXAMPLE]
// - Bila array adalah [-2, 1, 3, -4, 5], maka nilai maksimum adalah 8 karena dua nilai yang
// dapat menghasilkan nilai maksimum adalah 3 + 5

// [RULE]
// 1. dilarang menggunakan indexOf(), find(), filter(), shift(), unshift(), sort()
// 2. dilarang menggunakan regex
// 3. dilarang menggunakan map, filter, reduce, apply
// */


// function nilaimax(nilai){

// var lalu;
// var urutkan = []


// for(var i = 0 ; i < nilai.length ; i ++){
//     for(var j = 0 ; j < nilai.length ; j++){
//         if(nilai[i] !== nilai[j]){
//         lalu = nilai[i]+nilai[j]
//         urutkan.push(lalu)
//         }

//     }

// }
// // console.log (urutkan)
// // console.log (urutkan[0])
// // console.log (urutkan[1])
// for (var i = 0 ; i < urutkan.length ; i++){
//     for ( var j = i+1 ; j < urutkan.length ; j ++){
//         if(urutkan[j] < urutkan[i]){
//         var temp  = urutkan[i];
//         urutkan [i] = urutkan [j];
//         urutkan [j] = temp;
//     }
// }
// }

// return temp



// }

// console.log(nilaimax([-2, 1, 3, -4, 5]))


/*
=================
FIND EMPTY SEAT
=================

[INSTRUCTION]
Terdapat function findEmptySeat , function ini akan memberikan daftar
tempat duduk yang kosong sesuai dengan row yang diinput user.
Terdapat 2 parameter yang pertama adalah array 
multidimensi yang berisi list tempat duduk, tempat 
duduk yang telah di booking ditandai dengan huruf X.
Parameter kedua adalah row yang ingin dicari user ('ditandai dengan huruf kapital') .

[EXAMPLE]
param 1 :
[
  ['ROW', '1', '2', '3', '4', '5', '6'],
  ['A', 'X', 'X', 'X', 'X', ' ', ' '],
  ['B', ' ', 'X', ' ', ' ', ' ', ' '],
  ['C', 'X', 'X', 'X', 'X', ' ', ' '],
  ['D', ' ', ' ', ' ', 'X', 'X', 'X'],
]
param 2 :
D
output :
Terdapat 3 bangku kosong, D1, D2, D3

[RULES]
- dilarang menggunakan indexof, includes

*/

// function tempatduduk(duduk,dudukdimana2){



// function graduates (students) {
//   // Code disini
// var obj1 = {}
// var obj2 = {}
// var sqr1= []

// for(var i = 0 ; i < students.length ; i++){
//   if(students[i].score > 75  ){
//     // sqr1.push(students[i])
//     obj1.name=students[i].name
//     obj1.score=students[i].score
//     obj1.class=students[i].class
//     sqr1.push(obj1)
//     obj1={}
//   }
// }

// for(var i = 0 ; i < sqr1.length ; i++){
//   obj2[sqr1[i].class]=[]
//   for (var j = 0 ; j < sqr1.length ; j ++){
//     if(sqr1[i].class === sqr1[j].class){
//       obj2[sqr1[i].class].push(sqr1[j])
//     }
//   }
// }

// return obj2
// }

// console.log(graduates([
//   {
//     name: 'Dimitri',
//     score: 90,
//     class: 'foxes'
//   },
//   {
//     name: 'Alexei',
//     score: 85,
//     class: 'wolves'
//   },
//   {
//     name: 'Sergei',
//     score: 74,
//     class: 'foxes'
//   },
//   {
//     name: 'Anastasia',
//     score: 78,
//     class: 'wolves'
//   }
// ]));


// function hitung(votes) {

// var obj = {}
// var check = 0

// for( var i = 0 ; i < votes.length ; i ++){
//   obj[votes[i]]=[]  
//   for(var j = 0 ; j < votes . length ; j ++){
//   if(votes[j]==votes[i]){
//     check++
//   }
// }
// obj[votes[i]].push(check)
// check=0
// }
// return obj
// }

// var obj = {}

// for( var i = 0 ; i < votes.length ; i++){
//   obj[votes[i]]=1

// }



// return obj

// }



// console.log(hitung(['Denis', 'Arby', 'Arby', 'Janice']))


// function americanGotTalent (votes) {
//   var winner = ''
//   var check1 = 0
//   var second = ''
//   var check2 = 0
//   for (i = 0; i < votes.length; i++) {
//     var counter = 0
//     for (j = 0; j < votes.length; j++) {
//       if(votes[i] === votes[j]){
//         counter++
//       }
//     }
//     if(check1 < counter){
//       winner = votes[i]
//       check1 = counter
//     } else if(check1 === counter && winner !== votes[i]){
//       check2 = counter
//     } 
//   }
//  // DISPLAY
//   if(check1  === check2){
//     return `Mohon maaf juara tidak bisa ditentukkan dalam minggu ini`
//   } else{
//     return `Selamat juaranya adalah ${winner} , dengan total votes yang diterima ${check1}.`
//   }
//  }
 
//  console.log(americanGotTalent(['Denis', 'Arby', 'Darren', 'Denis', 'Arby','Arby']))
//  // Selamat juaranya adalah Lee Min Ho, dengan total votes yang diterima 2


var obj = [['a'],['b'],['c'],['e'],['d']]
var obj2 = []

for(var i = obj.length-1 ; i>=0 ; i--){
  obj[obj.length-i] =obj[i]
  var temp = obj[i]
  obj[i] = obj[obj.length-1]
  obj[obj.length-i] = temp
}
console.log(obj)