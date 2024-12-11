let totalElement = document.getElementById('total');
let checkboxes = document.querySelectorAll('input[type="checkbox"]');
let orderButton = document.getElementById('submitOrder');
let showElements = document.querySelectorAll(".showId > h2")

function updateTotal() {
    let total = 0;

    checkboxes.forEach(checkbox => {
        const qtyInput = document.getElementById(`${checkbox.id}-qty`);
        const quantity = parseInt(qtyInput.value);
        const price = parseInt(checkbox.getAttribute('data-price'));

        if (checkbox.checked && quantity > 0) {
            total += price * quantity;
        }
    });

    totalElement.textContent = total;
}

function validateQuantity(input) {
    let value = parseInt(input.value);
    if (isNaN(value) || value < 0 || /^0\d+$/.test(input.value)) {
        input.value = 0;
    } else {
        input.value = value;
    }
    updateTotal();
}

checkboxes.forEach(checkbox => {
    const qtyInput = document.getElementById(`${checkbox.id}-qty`);
    
    checkbox.addEventListener('change', () => {
        qtyInput.value = checkbox.checked ? 1 : 0;
        updateTotal();
    });
    qtyInput.addEventListener('input', () => {
        validateQuantity(qtyInput);
    });
});

orderButton.addEventListener('click', () => {
    const surName = document.getElementById('surName').value;
    const name = document.getElementById('name').value;
    const total = totalElement.textContent;
    showElements[0].textContent =  surName;
    showElements[1].textContent =  name;
    alert(`Заказчик: ${surName} ${name}\nОбщая стоимость: ${total} р.`);
});