const colors = ["green", "red", "rgba(133,122,200)", "#f15026", "tomato", "#f23952"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    //get random number between 0-3
    const randomNumber = Math.ceil(Math.random() * colors.length-1);
    console.log(randomNumber);
    console.log(colors.length)
    //console.log(getRandomNumber)

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

//Func ile çalışmıyor 
function getRandomNumber(){
    Math.floor(Math.random() * colors.length);
    return


}