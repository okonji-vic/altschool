let display = document.querySelector('.team div');
let display2 = document.querySelector('.team2 div');
let homeTeamButton = document.querySelectorAll('.team button');
let awayTeamButton = document.querySelectorAll('.team2 button');
homeCount = 0;
awayCount = 0;
display.textContent = homeCount;
display2.textContent = awayCount;
homeTeamButton.forEach((button) => {
    
    button.addEventListener('click', () => {
        if (button.textContent === '+1') {
            homeCount += 1;
            display.textContent = homeCount;
        }
        else if (button.textContent === '+2') {
            homeCount += 2;
            display.textContent = homeCount;
        }
        else if (button.textContent === '+3') {
            homeCount += 3;
            display.textContent = homeCount;
        }
        else if (button.textContent === 'Reset') {
            homeCount = 0;
            display.textContent = homeCount;
    }
    })
})

awayTeamButton.forEach((button) => {
    
    button.addEventListener('click', () => {
        if (button.textContent === '+1') {
            awayCount += 1;
            display2.textContent = awayCount;
        }
        else if (button.textContent === '+2') {
            awayCount += 2;
            display2.textContent = awayCount;
        }
        else if (button.textContent === '+3') {
            awayCount += 3;
            display2.textContent = awayCount;
        }
        else if (button.textContent === 'Reset') {
            awayCount = 0;
            display2.textContent = awayCount;
    }
    })
})