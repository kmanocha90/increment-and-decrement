let numberBox=document.querySelector("#numberBox");
const my_minus = document.querySelector("#minus");
const reset=document.querySelector("#reset");

let my_number=0;

plus.addEventListener("click",function(){
    my_number=my_number+1;
    numberBox.value=my_number;

})

my_minus.addEventListener("click", () => {
    my_number--;
    numberBox.value=my_number;

})

reset.addEventListener("click", () => {
    my_number=0;
    numberBox.value=my_number
   

})
