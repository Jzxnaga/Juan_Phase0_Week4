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

// var hasil;
// var ygksng = []
// var asddsa = []

// for (var i = 0 ; i < duduk.length ; i ++){
//     for ( var j = 0 ; j < duduk[i].length ; j++){
//             if(duduk[i][j] == ' '){
//                 var temp = ''
//                 temp = j
//                 ygksng.push(duduk[i][0]+temp)
//             }
        
//         }
// asddsa.push(ygksng)
// ygksng=[]
//     }
// if (dudukdimana2 == 'A' ){
//     hasil = 'terdapat ' +asddsa[1].length + ' yang kosong ' + asddsa[1]
//     return hasil
// } else if (dudukdimana2 == 'B' ){
//     hasil = 'terdapat ' + asddsa[2].length + ' yang kosong ' + asddsa[2]
//     return hasil
// } else if (dudukdimana2 == 'C' ){
//     hasil = 'terdapat ' +asddsa[3].length + ' yang kosong ' + asddsa[3]
//     return hasil
// } else if (dudukdimana2 == 'D' ){
//     hasil = 'terdapat ' +asddsa[4].length + ' yang kosong ' + asddsa[4]
//     return hasil
// }




// console.log (asddsa)

// // return totalkosong

// }





// // }


// console.log(tempatduduk([
//     ['ROW', '1', '2', '3', '4', '5', '6'],
//     ['A', 'X', 'X', 'X', 'X', ' ', ' '],
//     ['B', ' ', 'X', ' ', ' ', ' ', ' '],
//     ['C', 'X', 'X', 'X', 'X', ' ', ' '],
//     ['D', ' ', ' ', ' ', 'X', 'X', 'X'],
//   ],'A'))

// Diberikan arr object nilai-nilai murid dengan struktur object nama, score dan class,
// tugas anda adalah memanipulasi data tersebut dengan meng-group berdasarkan
// kelas dan sort ascending untuk score-nya!

// [EXAMPLE]
// - Bila arr of ojects adalah :


function arr (test){


Kelas = {}
array = []
obj = {}


for (var i = 0 ; i < test.length ; i ++ ){
    for( var j = i+1 ; j < test.length ; j++)
    if( test[i].score < test[j].score){
        var temp = test [i]
        test [i] = test [j]
        test [j] = temp
    }

}
// console. log (test) // ini sudah berurut //

    for (var i = 0 ; i < test.length ; i ++ ){
        obj[test[i].class] = []
        
        for ( var j = 0 ; j < test.length ; j++){
            if(test[i].class == test[j].class) {
                obj[test[i].class].push(test[j])
            }
        }
    
    }

return obj

}

// return test // tapi pengen bikin // { A:
//                [ { name: 'david', score: 32 },
//                  { name: 'amy', score: 80 },
//                  { name: 'debby', score: 100 } ],
//               B:
//                [ { name: 'aakansha', score: 75 },
//                  { name: 'heraldo', score: 90 },
//                  { name: 'arnold', score: 100 } ],
//               C: [ { name: 'aleksa', score: 90 } ] }

console.log(arr(
 [
    {
      name: 'debby',
      score: 100,
      class: 'A'
    },
    {
      name: 'amy',
      score: 80,
      class: 'A'
    },
    {
      name: 'david',
      score: 32,
      class: 'A'
    },
    {
      name: 'heraldo',
      score: 90,
      class: 'B'
    },
    {
      name: 'arnold',
      score: 100,
      class: 'B'
    },
    {
      name: 'aakansha',
      score: 75,
      class: 'B'
    },
    {
      name: 'aleksa',
      score: 90,
      class: 'C'
    }
  ]
)
)
// maka hasilnya adalah:
// { A:
//    [ { name: 'david', score: 32 },
//      { name: 'amy', score: 80 },
//      { name: 'debby', score: 100 } ],
//   B:
//    [ { name: 'aakansha', score: 75 },
//      { name: 'heraldo', score: 90 },
//      { name: 'arnold', score: 100 } ],
//   C: [ { name: 'aleksa', score: 90 } ] }

// [RULE]
// 1. dilarang menggunakan indexOf(), find(), filter(), shift(), unshift(), sort()
// 2. dilarang menggunakan regex
// */










































