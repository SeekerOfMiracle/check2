let  array1 = [3, 45, 4, 23, 78, 34];
let  array2 = [78, 4, 2, 34, 4, 12, 1];
function findProd(arr1, arr2){
    let arr3=[];
for(let i=0; i<arr2.length; i++)
{
    arr3[i]= arr1[i]* arr2[i]
    

}
if(arr2.length>arr1.length){
    for(let i=0; i<(arr2.length - arr1.length); i++)
    {
        arr3[arr3.length -i -1 ]=arr2[arr2.length - i -1];
    }
}
if(arr1.length>arr2.length){
    for(let i=0; i<(arr1.length - arr2.length); i++)
    {
        arr3[arr3.length - 1 -i ]=arr1[arr1.length - i - 1];
    }
}
return arr3;
}
console.log(findProd(array1, array2));

//task2
let array3=[...array1, ...array2]
function erraseDuplicates(array3){
    return array3.filter((value, index)=> array3.indexOf(value) !== index);
}   
console.log(erraseDuplicates(array3))


//task3

function febonacci(n){
    let numbers=[0,1];
    if(n>=2)
    for( let i=2; i<n; i++)
    {
    numbers[i]=numbers[i-1]+numbers[i-2];
    }
    else if(n==0){
    numbers=[0]
    }
    return numbers;
}




console.log(febonacci(3));
console.log(febonacci(7));











































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































