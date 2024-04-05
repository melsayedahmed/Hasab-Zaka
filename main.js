//variable
let numinput = document.querySelector("#numIpt");
let btn = document.querySelector("button");
let span = document.querySelector(".number");
let errInput = document.querySelector(".error");


//onclick
function btnClick() {
  let num = numinput.value;
  let cul = Math.ceil(num * 0.025);
  if(String(num).charAt(0) == 0 || num <= 0 || num == "")
  {
    textError();
  }
  else
  {
    if (num > 0) 
    {
      errInput.innerHTML = "";
      span.innerHTML = `${cul} جنيهًا`;
    }
    else
    {
      textError();
    }
  }
};

function textError(){
  errInput.innerHTML = `
  <i class="fa-solid fa-xmark"></i> برجاء إدخال المبلغ صحيح`;
  span.innerHTML = "- - جنيهًا";
}