let count = 0;
let total = 0;
function displayValue (Card,Price,Quantity,Result){
    const showElement = document.createElement('tr');
    const container = document.getElementById('table-container');
    count++;
    showElement.innerHTML = `
       <td>${count}</td>
       <td>${Card}</td>
       <td>${Price}</td>
       <td>${Quantity}</td>
       <td>${Result}</td>
    `;
    container.appendChild(showElement);
}

function calculation(price,quantity){
    const inputResult = parseFloat(price) * parseFloat(quantity);
    total += inputResult;
    document.getElementById('totalPrice').innerText = total;
    return inputResult;
}

function Validity(price,quantity){
    if(isNaN(price) || isNaN(quantity) || price<=0 || quantity<=0){
        alert("please Enter a Valid number");
        return 0;
    }
    return 1;
}
