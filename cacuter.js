let inp = document.getElementById("display");
let escaltu = document.getElementById("escaltu");
let acc = document.getElementById("ac");
let de = document.getElementById("de");

let a = document.querySelector("#a0");
let aa = document.querySelector("#a1");
let ab = document.querySelector("#a2");
let ac = document.querySelector("#a3");
let ad = document.querySelector("#a4");
let ae = document.querySelector("#a5");
let af = document.querySelector("#a6");
let ag = document.querySelector("#a7");
let ah = document.querySelector("#a8");
let ai = document.querySelector("#a9");

let daught = document.querySelector("#daught");
let plu = document.querySelector("#plu");
let mi = document.querySelector("#mi");
let mul = document.querySelector("#mul");
let divd = document.querySelector("#divd");

daught.addEventListener("click",function () {
    inp.value = inp.value+".";
});

a.addEventListener("click",function () {
    inp.value = inp.value+0;
});

aa.addEventListener("click",function () {
    inp.value = inp.value+1;
});

ab.addEventListener("click",function () {
    inp.value = inp.value+2;
});

ac.addEventListener("click",function () {
    inp.value = inp.value+3;
});

ad.addEventListener("click",function () {
    inp.value = inp.value+4;
});

ae.addEventListener("click",function () {
    inp.value = inp.value+5;
});

af.addEventListener("click",function () {
    inp.value = inp.value+6;
});

ag.addEventListener("click",function () {
    inp.value = inp.value+7;
});

ah.addEventListener("click",function () {
    inp.value = inp.value+8;
});

ai.addEventListener("click",function () {
    inp.value = inp.value+9;
});

escaltu.addEventListener("click", function () {
    inp.value = eval(inp.value);
});

acc.addEventListener("click", function () {
    inp.value = "";
});

de.addEventListener("click", function () {
    inp.value=(inp.value).slice(0,-1);
});

plu.addEventListener("click",function () {
    if (inp.value[inp.value.length-1]=="+" ||inp.value[inp.value.length-1]=="-" ||inp.value[inp.value.length-1]=="*" ||inp.value[inp.value.length-1]=="/") {
    } 
      else{inp.value=inp.value + "+"} 
    }
);

mi.addEventListener("click",function () {
    if (inp.value[inp.value.length-1]=="+" ||inp.value[inp.value.length-1]=="-" ||inp.value[inp.value.length-1]=="*" ||inp.value[inp.value.length-1]=="/") {
    } 
      else{inp.value=inp.value + "-"} 
    }
);

mul.addEventListener("click",function () {
    if (inp.value[inp.value.length-1]=="+" ||inp.value[inp.value.length-1]=="-" ||inp.value[inp.value.length-1]=="*" ||inp.value[inp.value.length-1]=="/") {
    } 
      else{inp.value=inp.value + "*"} 
    }
);

divd.addEventListener("click",function () {
    if (inp.value[inp.value.length-1]=="+" ||inp.value[inp.value.length-1]=="-" ||inp.value[inp.value.length-1]=="*" ||inp.value[inp.value.length-1]=="/") {
    } 
      else{inp.value=inp.value + "/"} 
    }
);
