function countLetter(str, letter) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i).toLowerCase() === letter.toLowerCase()) {
            count++;
        }
    }
    return count;
}

document.getElementById('countBtn').addEventListener('click', () => {
    const firstRow = document.getElementById('firstRow').value;
    const secondRow = document.getElementById('secondRow').value;
    const letterToCount = 'a';
    const countFirstRow = countLetter(firstRow, letterToCount);
    const countSecondRow = countLetter(secondRow, letterToCount);
    
    let resultText = '';

    if (countFirstRow > countSecondRow) {
        resultText = `У першому рядку більше літер '${letterToCount}': ${countFirstRow}`;
    } else if (countSecondRow > countFirstRow) {
        resultText = `У другому рядку більше літер '${letterToCount}': ${countSecondRow}`;
    } else {
        resultText = `В обох рядках однакова кількість літер '${letterToCount}': ${countFirstRow}`;
    }
    
    document.getElementById('result').innerText = resultText;
});

function formattedPhone(phone) {
    const phonePattern = /^\+?380\d{9}$|^8\d{10}$|^80\d{9}$|^0\d{9}$/;

    if (!phonePattern.test(phone)) {
        return 'Неправильний формат телефону';
    }

    let formatted = '';
    
    if (phone.startsWith('+38')) {
        formatted = phone.replace(/^(\+38)(\d{3})(\d{3})(\d{2})(\d{2})$/, '$1 ($2) $3-$4-$5');
    } else if (phone.startsWith('8')) {
        formatted = '+38 ' + phone.replace(/^8(\d{3})(\d{3})(\d{2})(\d{2})$/, '($1) $2-$3-$4');
    } else if (phone.startsWith('80')) {
        formatted = '+38 ' + phone.replace(/^80(\d{3})(\d{3})(\d{2})(\d{2})$/, '($1) $2-$3-$4');
    } else if (phone.startsWith('0')) {
        formatted = '+38 ' + phone.replace(/^0(\d{3})(\d{3})(\d{2})(\d{2})$/, '($1) $2-$3-$4');
    }

    return formatted;
}

document.getElementById('formatBtn').addEventListener('click', () => {
    const phoneInput = document.getElementById('phoneInput').value;
    const phoneResult = formattedPhone(phoneInput);
    document.getElementById('phoneResult').innerText = phoneResult;
});
