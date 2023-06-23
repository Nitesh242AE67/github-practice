//jsfj // var ch=5;
// // var chy=7;

// // let ram=8;
// // let cha=8;

// // const x=7;
// // const g=8;

// // console.log(10)


// // var user = {
// //     name:"nitu",
// //     comapany:"bb",
// //     age:undefined,
// //     s:null,
// // }
// // console.log(user)

// // let a=prompt("type your age");
// // a=Number.parseInt(a);
// // console.log(a>18?"you can drive":"you can not drive");

// // console.log('bedha')
// // let todo1='bengan';
// // console.log(todo1)

// let givenarr=[3,5,6,7,8,9];

// function area(radius){
//     let answer=Math.PI*radius*radius;
//     return answer;
// }
// function circum(radius){
//     let answer=Math.PI*2*radius;
//     return answer;
// }
// function diameter(radius){
//     let answer=2*radius;
//     return answer;

// }
// function calculate(givenarr,logic){
//     let ansarr=[];
//     for(let i=0;i<givenarr.length;i++){
//         ansarr.push(logic(givenarr[i])); 
//     }
//     return ansarr;
    
// }
// console.log(calculate(givenarr,circum));


const users=[

    {firstname: "akshay",lastname:"saini",age: 26},
    {firstname: "donald",lastname: "trump",age:35},
    {firstname: "robert", lastname:"downey",age:66},
    {firstname: "james", lastname:"wann",age:8},

]

const output= users.reduce(function(acc,curr){
if(acc[curr.age]){
    acc[curr.age]=acc[curr.age]++;
}
else{
    acc[curr.age]=1;
}
return acc;
},{});

console.log(output);




