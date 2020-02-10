// // mengakses index lebih mudah

// let people ={
//     umur: 18,
//     nama: "Andi",
//     "string apapun" : "asd",
//     kota: "Jakarta"
// }


// console.log(people.nama)

// // mengakses data di dalam properti
// for (var key in people){
// console.log(people[key])
// }

// console.log(Object.keys(people)) // untuk akses keys nya doang
// console.log(Object.entries[people]) // untuk akses semuanya
// console.log(Object.values[people]) // untuk akses  isinya 18 andi asd

// //LOOPING di Object
// for (var i=0;i<keys.lenght;i++){
//     console.log(people[keys[i]])
// }

// //tambah properti
// people.tes="tes"

// console.log(people)

// akses keys dalam keys
let belibarang= {
    listbarang:{
        shampoo:10000,
        sabun:5000
    }
}

console.log (Object.values(belibarang.listbarang))

// var total = 0

// for (var key in belibarang.listbarang){
//     total+=belibarang.listbarang[key]
// }
// console.log(total)


// // AUTO COUNTER atau SORTING //
// let counter ={}
// let data = "abdajfweojcvbaej"

// for(var i=0;i<data.length;i++){
//     if(counter[data[i]]==null){
//         counter[data[i]]=1
//     }else{
//         counter[data[i]]++

//     }
// }
// console.log(counter)

// // MENGHITUNG ALL DARI AUTO COUNTER
// var total = 0
// for (var keys in counter){
//     total+=counter[keys]
// }
// console.log(total)

// var data = {
//     {
//         nama:"Andi",
//         age :18
//     },
//     {
//         nama:"Budi",
//         age :20
//     }

// }

// console.log(data)


