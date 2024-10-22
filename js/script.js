document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let q1 = parseInt(document.getElementById('question1').value);
    let q2 = parseInt(document.getElementById('question2').value);
    
    let totalScore = q1 + q2;

    let resultText;
    if (totalScore <= 1) {
        resultText = 'You seem to be doing well!';
    } else if (totalScore <= 3) {
        resultText = 'You may be experiencing some anxiety. Consider talking to a professional.';
    } else {
        resultText = 'It might be beneficial to seek help from a mental health expert.';
    }

    document.getElementById('result').innerText = resultText;
});
