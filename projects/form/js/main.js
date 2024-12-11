let inputElems = document.querySelectorAll('[type="input"]');
let SubmitBtn = document.querySelector(".btn");
let Result = document.querySelector(".res");
SubmitBtn.addEventListener("click", function(){
    let firstName, surName
    firstName = inputElems[0].value
    surName = inputElems[1].value
    Result.textContent = `Ответ: Здравствуйте, ${firstName} ${surName}`;
})