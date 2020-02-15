function graduates (students) {
  // Code disini
var obj1 = {}
var obj2 = {}
var sqr1= []

for(var i = 0 ; i < students.length ; i++){
  if(students[i].score > 75  ){
    // sqr1.push(students[i])
    obj1.name=students[i].name
    obj1.score=students[i].score
    obj1.class=students[i].class
    sqr1.push(obj1)
    obj1={}
  }
  // dipisah yang lulus saja bisa jga pake push
}
// console.log(sqr1)

for(var i = 0 ; i< sqr1.length ; i++){
  obj2[sqr1[i].class]=[]
  
  for (var j = 0 ; j < sqr1.length; j++){
   if(sqr1[i].class === sqr1[j].class) {
      obj2[sqr1[i].class].push(sqr1[j])
   }
  }
}
// delete obj2.sqr1[j].class
// console.log (obj2.foxes)
obj2.wolves.map(element => {
  if(element.score > 80) {
    return element;
  }
});
return obj2
}

console.log(graduates([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));

// {
//   foxes: [
//     { name: 'Dimitri', score: 90 }
//   ],
//   wolves: [
//     { name: 'Alexei' , score: 85 },
//     { name: 'Anastasia', score: 78 }
//   ]
// }

// console.log(graduates([
//   {
//     name: 'Alexander',
//     score: 100,
//     class: 'foxes'
//   },
//   {
//     name: 'Alisa',
//     score: 76,
//     class: 'wolves'
//   },
//   {
//     name: 'Vladimir',
//     score: 92,
//     class: 'foxes'
//   },
//   {
//     name: 'Albert',
//     score: 71,
//     class: 'wolves'
//   },
//   {
//     name: 'Viktor',
//     score: 80,
//     class: 'tigers'
//   }
// ]));

// // {
// //   foxes: [
// //     { name: 'Alexander', score: 100 },
// //     { name: 'Vladimir', score: 92 }
// //   ],
// //   wolves: [
// //     { name: 'Alisa', score: 76 },
// //   ],
// //   tigers: [
// //     { name: 'Viktor', score: 80 }
// //   ]
// // }


// console.log(graduates([])); //{}