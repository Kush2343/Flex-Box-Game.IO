let box = document.querySelector("#b1");
var input1 = document.querySelector("#i1");
var input2 = document.querySelector("#i2");

input1.addEventListener("input", () => {
    box.style.justifyContent = input1.value;
}); 
input2.addEventListener("input", () => {
    box.style.alignItems = input2.value;
}); 

