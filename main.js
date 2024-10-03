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
