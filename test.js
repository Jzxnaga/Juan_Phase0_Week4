// var datapembelian = {};
// var memberId = "1adsfaewrdf"
// var money = 50000
// datapembelian.memberId = memberId;
// datapembelian.money = money;
// datapembelian.listPurchased =[];

// console.log (datapembelian)
// function countProfit(shoppers) {
// let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
//                        ['Baju Zoro', 500000, 2],
//                        ['Sweater Uniklooh', 175000, 1]
//                      ];
  
//     // you can only write your code here!
//     // for (var i = 0 ; i < listBarang.length ; i++ ){
      
//     // }
// var datapembelian = {}
// var datapembeliantotal=[]
// var shopperss = []

// for (var i = 0 ; i < listBarang.barang ; i++){
// var sisa = listBarang[i][2]
// if (shoppers[i].product == listbarang[i][0]){
//   sisa - shoppers[i].amount
// }

//                     }
                    
// shopperss.push(shoppers[0].name)


// datapembelian.Product= listBarang[0][0]
// datapembelian.shoppers= shopperss
// datapembeliantotal.leftover=sisa


// datapembeliantotal.push(datapembelian)


// return datapembeliantotal

//                     }

//     console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
    //[ { product: 'Sepatu Stacattu',
    //   shoppers: [ 'Windi', 'Vanessa' ],
    //   leftOver: 5,
    //   totalProfit: 7500000 },
    // { product: 'Baju Zoro',
    //   shoppers: [],
    //   leftOver: 2,
    //   totalProfit: 0 },
    // { product: 'Sweater Uniklooh',
    //   shoppers: [],
    //   leftOver: 1,
    //   totalProfit: 0 } ]



function graduates (students) {
    var obj ={};
    var subObj={};
    var studentsLulus=[];
  
    for(var i =0; i<students.length;i++){
      if(students[i].score>75){
        studentsLulus.push(students[i])
      }
  console.log(studentsLulus)
      obj[students[i].class]=[];
    }
  
    for(var i = 0; i<studentsLulus.length;i++){
      subObj.name = studentsLulus[i].name;
      subObj.score = studentsLulus[i].score;
      console.log(subObj)
  
      obj[studentsLulus[i].class].push(Object.assign({},subObj))

    }
    // return obj
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
  