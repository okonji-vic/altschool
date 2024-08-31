function performOperation(operation) {
    // Get values from input elements
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    // Check if the input values are valid numbers
    if (isNaN(num1) || isNaN(num2)) {
        alert('Please enter valid numbers');
        return;
    }

    // Initialize a variable to store the result
    let result;

    // Perform the operation based on the button clicked
    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                alert('Division by zero is not allowed');
                return;
            }
            result = num1 / num2;
            break;
        default:
            alert('Unknown operation');
            return;
    }

    // Display the result in the result span element
    document.getElementById('result').textContent = result;
}
