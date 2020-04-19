function checkAnswers() {
    var score = 0;
    if ( radio1b.checked ) {
        score++;
        q1.style.backgroundColor = 'lightGreen';
    } else {
        q1.style.backgroundColor = 'pink';
    }
    if ( radio2c.checked ) {
        score++;
        q2.style.backgroundColor = 'lightGreen';
    } else {
        q2.style.backgroundColor = 'pink';
    }
    if ( radio3a.checked ) {
        score++;
        q3.style.backgroundColor = 'lightGreen';
    } else {
        q3.style.backgroundColor = 'pink';
    }
    if ( radio4c.checked ) {
        score++;
        q4.style.backgroundColor = 'lightGreen';
    } else {
        q4.style.backgroundColor = 'pink';
    }
    if ( radio5b.checked ) {
        score++;
        q5.style.backgroundColor = 'lightGreen';
    } else {
        q5.style.backgroundColor = 'pink';
    }
    alert( 'Your score is: '+ score )
}