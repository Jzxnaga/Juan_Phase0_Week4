function highestScore (students) {
    // Code disini
  var obj1={};
  var obj2={};
  var guru;
  if(students.length==0){
    return {}
  }else{
    for(var i = 0;i<students.length;i++){
      for(var j = i+1; j<students.length-1;j++){
        if(students[j].score < students[i].score){
          temp=students[j];
          students[j]=students[i]
          students[i]=temp;
        }
      }
    }
    console.log (students)
    //diakalin di tiban sama yang paling gede

    
    for(var i=0; i<students.length;i++){
      guru = students[i].class;
      obj1.name = students[i].name;
      obj1.score = students[i].score;
      obj2[guru]= Object.assign({}, obj1)
    }
    return obj2
  }
}

  // TEST CASE
  console.log(highestScore([
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
  //   foxes: { name: 'Dimitri', score: 90 },
  //   wolves: { name: 'Alexei', score: 85 }
  // }
  
  
  console.log(highestScore([
    {
      name: 'Alexander',
      score: 100,
      class: 'foxes'
    },
    {
      name: 'Alisa',
      score: 76,
      class: 'wolves'
    },
    {
      name: 'Vladimir',
      score: 92,
      class: 'foxes'
    },
    {
      name: 'Albert',
      score: 71,
      class: 'wolves'
    },
    {
      name: 'Viktor',
      score: 80,
      class: 'tigers'
    }
  ]));
  
  // {
//   //   foxes: { name: 'Alexander', score: 100 },
//   //   wolves: { name: 'Alisa', score: 76 },
//   //   tigers: { name: 'Viktor', score: 80 }
//   // }
  
  
//   console.log(highestScore([])); //{}