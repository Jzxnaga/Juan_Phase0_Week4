// // mengakses index lebih mudah
// // ARR . LENGTH menghitung jumlah data 
// // namun mengakses arr length harus return[ARR.LENGTH-1] karna [] dimulai dari [0]

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
// let belibarang= {
//     listbarang:{
//         shampoo:10000,
//         sabun:5000
//     }
// }

// console.log (Object.values(belibarang.listbarang))

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
// // looping nama saja
// for (var i = 0 ; i<data.length;i++)
// console.log(data[i.name])

// // push new data
// var newData = {
//     nama:"Testaja"
//     age:20
// }

// data.push(newData)


// var students = {
//     ["yoyok",90],
//     ["fadhil",100],
//     ["made",70]
// }
//     object = ["nama","nilai"]



// var student = [
//     {
//     nama : "test",
//     score : 90
//     },
//     {
//     nama : "test1",
//     score:100
//     },
//     {
//     nama : "test2",
//     score: 70
//     },

// ]

// for (var i = 0 ; i < student.length ; i++){
//     for ( var j = i+1 ; j < student.length ; j ++){
//         if(student[j].score < student[i].score){
//         var temp  = student[i];
//         student [i] = student [j];
//         student [j] = temp;
//     }
// }
// }
// console.log(student)



// let obj={
//     name:"juan",
//     gender:"laki-laki",
//     "8":"tesasdsa"
// }

// let name="name"

// // console.log(obj.name) // langsung akses data di dalam [i]
// console.log(obj[name]) //
// console.log(obj["8"]) // << akses data dalam key tapi bentuk nya harus string

// for(var key in obj ) {
//     // console.log(obj[key])
//     // console.log(key)
// }

// console.log(Object.keys(obj))
// console.log(Object.entries(obj))
// console.log(Object.values(obj))


var abjad="abcdefghi"
for(var i = 0 ; i<abjad.length ; i+=3){
    var temp=""
    for(var j = 0 ; j < 3; j++){
        temp=temp+abjad[j+i]
    }
    console.log(temp)
        
}

