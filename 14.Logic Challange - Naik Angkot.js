function naikAngkot(arrPenumpang) {
    var rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    var obj = {}
    var sqr = []
    var temp1 ;
    var temp2 ;

    for ( var i = 0 ; i < arrPenumpang.length ; i++){
    obj.penumpang = arrPenumpang[i][0];
    obj.naikDari = arrPenumpang[i][1];
    obj.tujuan = arrPenumpang[i][2];
        for(var j = 0 ; j < rute.length ; j++){
            if (rute[j]==arrPenumpang[i][1]){
                temp1 = j
            }else if (rute[j]==arrPenumpang[i][2]){
                temp2 = j
            }
        }
    
    var temp3 = temp2-temp1
    obj.bayar = temp3*2000
    sqr.push(obj)
    obj = {}
    }


    return sqr





  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]