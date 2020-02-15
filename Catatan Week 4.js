// // mengakses index lebih mudah
// // ARR . LENGTH menghitung jumlah data 
// // namun mengakses arr length harus return[ARR.LENGTH-1] karna [] dimulai dari [0]
// // Objek {}
// // dapat diakses dengan var obj = {test : 'test1'} console.log(obj[0].test) == > test 1
// // menambahkan key obj.testt = 'test2'
// // menambahkan key obj['testt'] = test2'





// let people ={
//     umur: 18,
//     nama: "Andi",
//     test : "asd",
//     kota: "Jakarta"
// }
// var peoplearray = Object.keys(people)
// console.log(peoplearray)

// // console.log(people.nama)

// // mengakses data di dalam properti
// for (var key in people){
// // console.log(key)
// // console.log(people.key)
// console.log(peoplearray[0])
// }

// delete people.test

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
// var total = 0let name="name"
// console.log(obj.name) // langsung akses data di dalam [i]
// console.log(obj[name]) /
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



// var students = [
//     ["Yoyok", 25],
//     ["Fadhil", 19],
//     ["Jumadi", 18]
//   ];
  
//   var fields = ["name", "age"];
  
//   var arr = [];
  
//   for (var i = 0; i < students.length; i++) {
//     var obj = {};
//     for (var j = 0; j < fields.length; j++) {
//       obj[fields[j]] = students[i][j]; 
//     }
  
//     arr.push(obj);
//   }
  
//   console.log(arr);

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
// console.log(student[0].score)
// console.log(student[1].score)
// console.log(student[2].score)

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



// let obj={let name="name"
// // console.log(obj.name) // langsung akses data di dalam [i]
// // console.log(obj[name]) /
//     name:"juan",
//     gender:"laki-laki",
//     "8":"tesasdsa"
// }

// let name="name"
// console.log(obj.name) // langsung akses data di dalam [i]
// console.log(obj[name]) //
// console.log(obj["8"]) // << akses data dalam key tapi bentuk nya harus string

// for(var key in obj ) {
//     // console.log(obj[key])
//     // console.lolet name="name"
// console.log(obj.name) // langsung akses data di dalam [i]
// console.log(obj[name]) /g(key)
// }

// console.log(Object.keys(obj))
// console.log(Objectlet name="name"
// console.log(obj.name) // langsung akses data di dalam [i]
// console.log(obj[name]) /let name="name"
// console.log(obj.name) // langsung akses data di dalam [i]
// console.log(obj[name]) /.entries(obj))
// console.log(Object.values(obj))


var abjad="abcdefghi"
// for(var i = 0 ; i<abjad.length ; i+=3){
//     var temp=""
//     for(var j = 0 ; j < 3; j++){
//         temp=temp+abjad[j+i]
//     }
//     console.log(temp)
        
// }


// var arr = [['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]
// var key = ['firstName','lastName','gender','age']
// var arr2 = []
// for (var i=0 ; i<arr.length ; i ++){
// var obj = {}
// for (var j=0 ; j<key.length ; j++){
//     obj[key[j]]=arr[i][j]
//     }
// arr2.push(obj)
//     }
// console.log(arr2)