let button = document.getElementById("button");
let ques = document.getElementsByClassName("ques");
let i = 3;
let data = [
    `Q2)    Angry outbursts, irritability or frustration, even over small matters?`,
    `Q3)	Loss of interest or pleasure in most or all normal activities, such as sex, hobbies or sports?`,
    `Q4)	Sleep disturbances, including insomnia or sleeping too much?`,
    `Q5)	Tiredness and lack of energy, so even small tasks take extra effort?`

]

function changeQues(){
    ques.innerText = data[3];
    console.log(data[i]);
}

button.addEventListener('click', changeQues() );

