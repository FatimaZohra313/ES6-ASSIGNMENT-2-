let information = [
    ["city",
    ["Karachi","Islamabad","Lahore"]],
    ["Age",
    [20,26,21]],
    ["Name",
    ["Fatima","Alisbha","Summaiya"]],
]




function lastarray(){
    let a = [...information.slice(-1)];
    console.log(a);
    let demo = document.getElementById("demo");

    demo.innerHTML += `  <h2 class="text-white fw-bold text-center mt-2">${a}</h2>`
    // for (let i= 0 ; i < a.length ;i++){
    //     demo.innerHTML += `${a[i]} <br>`
    // }

}

let obj = {
    person1 : {
        name: "Fatima",
        age : 21,
        city : "karachi"
        
    },
    person2 : {
        name: "Alisbha",
        age : 26,
        city : "karachi"
    },
    person3 : {
        name: "Summaiya",
        age : 21,
        city : "karachi"
    },
}



function lastObject(){
    let b = {...Object.entries(obj).slice(-1)};
    console.log(b)
    let demos = document.getElementById("demos");
    let my = JSON.stringify(b,undefined,2);
    demos.innerHTML +=`<h2 class="text-white fw-bold text-center mt-2">${my}</h2>`

}