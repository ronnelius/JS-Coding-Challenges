/*
    Challenge: Display the numbers using the below format
    EVEN NUMBERS: 
    2
    4
    6
    8
    10
    ODD NUMBERS: 
    1
    3
    5
    7
    9
*/
function oddEven(){
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const arrOdd = []
    const arrEven = []
    for (var index = 0; index < arr.length; index++) { 
        if ((arr[index] % 2) == 0) {
            arrEven.push(arr[index])
          } else {
            arrOdd.push(arr[index])
          }

    }
    console.log("EVEN NUMBERS:")
    console.log(arrEven);
    console.log("ODD NUMBERS:")
    console.log(arrOdd);
}

oddEven()