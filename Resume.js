# TASK DAY 5

let myResume ={
    name:"Prabu",
    age:"35",
    gender:"Male",
    hobbies:["Reading","Writing","coding"]
    address:{
        city:"Parangipettai",
        state:"Tamilnadu"
        country:"India"
    },
    skills:["Html","Css","Javascript"]
    education:{
        school:"ABC School",
        degree:"Bachelor of Technology",
        year:"2011"
    }
}
//for
for(let i=0;i<myResume.length;i++){
console.log(myResume[i])
}
//for in
for(let key in myResume){
    console.log(key, myResume[key])
}
//for of
for(let key of Object.keys(myResume)){
    console.log(key, myResume[key])
}
//for each
for(let key of foreach.myResume){
    console.log(key, myResume[key])
}