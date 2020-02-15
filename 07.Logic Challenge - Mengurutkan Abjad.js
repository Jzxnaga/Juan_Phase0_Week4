// function urutkanAbjad(str) {
//     // you can only write your code here!
//     var kamus = "abcdefghijklmnopqrstuvwxyz"
//     var temp = ""

//     for (var i=0 ; i< kamus.length ; i ++) {
//         for(var j=0 ; j< str.length ; j ++){
//             if(str[j]==kamus[i]){
//                 temp += kamus[i]
//             }
//         }
//     }
//     return temp

//     }

    test = "hello"
    str = []
    for(var i=0 ; i<test.length;i++){
        str.push(test[i])
    }
    console.log(str)

    for(var i=0;i<str.length;i++){
        for(var j=i+1;j<str.length;j++){
            if(str[j] < str[i]){
                var temp = str[j];
                str [j] = str [i];
                str [i] = temp; 
            } 
        }
    }

    console.log(str)

  
//   // TEST CASES
//   console.log(urutkanAbjad('hello')); // 'ehllo'
//   console.log(urutkanAbjad('truncate')); // 'acenrttu'
//   console.log(urutkanAbjad('developer')); // 'deeeloprv'
//   console.log(urutkanAbjad('software')); // 'aeforstw'
//   console.log(urutkanAbjad('aegis')); // 'aegis'
