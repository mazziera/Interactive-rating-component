const standardState = document.querySelector('.standard-state');

const numbersRate = document.querySelectorAll('li');

const submitButton = document.querySelector('.submit');

let ratePoint = document.getElementById('rate');
// console.log(ratePoint);


// console.log(value.classList);

numbersRate.forEach(function(li) {
    li.addEventListener('click', () =>{

        let getNumber = document.querySelector('.selected');
        
        getNumber.classList.remove('selected');

        li.classList.add('selected');
        li.style.backgroundColor = 'hsl(25, 97%, 53%)'; //numbers-rating-color-clicked
        li.style.color = 'white';

        getNumber.style.backgroundColor = 'hsl(219, 11%, 26%)'; //gray
        getNumber.style.color ='hsl(216, 12%, 54%)'; //numbers-rating-color

    
    });
});

submitButton.addEventListener('click', submitRate);

function submitRate(){

    const submitted = document.querySelector('.submitted-state');

    const value = document.querySelector('.selected');

    ratePoint.innerHTML = value.textContent;

    standardState.style.display ='none';

    submitted.style.display ='block';
};

