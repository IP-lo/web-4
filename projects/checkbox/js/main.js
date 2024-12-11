let CheckboxElems = document.querySelectorAll('[type="checkbox"]');
let SubmitBtn = document.querySelector(".btn");
let Result = document.querySelector(".res");
SubmitBtn.addEventListener("click", function(){
    let summ = 0;
    CheckboxElems.forEach(CheckboxElem => {
        if(CheckboxElem.checked){
            summ += parseInt(CheckboxElem.value);
        }
    });
    Result.textContent = `Общая стоимость: ${summ}р`;
})