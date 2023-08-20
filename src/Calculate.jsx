import React, { useState } from 'react';

function CalculatorApp() {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState('');

    const handleNum1Change = e => {
        setNum1(e.target.value);
    };

    const handleNum2Change = e => {
        setNum2(e.target.value);
    };

    const performOperation = operation => {
        if (num1 === '' || num2 === '') {
            alert('Lütfen iki sayı girin.');
            return;
        }

        let calculatedResult;
        switch (operation) {
            case 'add':
                calculatedResult = parseFloat(num1) + parseFloat(num2);
                break;
            case 'subtract':
                calculatedResult = parseFloat(num1) - parseFloat(num2);
                break;
            case 'multiply':
                calculatedResult = parseFloat(num1) * parseFloat(num2);
                break;
            case 'divide':
                calculatedResult = parseFloat(num1) / parseFloat(num2);
                break;
            default:
                break;
        }

        setResult(calculatedResult.toFixed(2));
    };

    return (
        <div className="calculator">
            <div>
                <input
                    type="number"
                    value={num1}
                    onChange={handleNum1Change}
                />
                <input
                    type="number"
                    value={num2}
                    onChange={handleNum2Change}
                />
            </div>
            <div>
                <button onClick={() => performOperation('add')}>Topla(+)</button>
                <button onClick={() => performOperation('subtract')}>Çıkar(-)</button>
            </div>
            <div>
                <button onClick={() => performOperation('multiply')}>Çarp(*)</button>
                <button onClick={() => performOperation('divide')}>Böl(/)</button>
            </div>
            <div>
                <p>Sonuç: {result}</p>
            </div>
        </div>
    );
}

export default CalculatorApp;