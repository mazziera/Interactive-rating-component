const standardState = document.querySelector('.standard-state');

const numbersRate = document.querySelectorAll('li');

let ratePoint = document.getElementById('rate');
console.log(ratePoint);

const submitButton = document.querySelector('.submit');


numbersRate.forEach(function(li) {
    li.addEventListener('click', () =>{

        let getNumber = document.querySelector('.selected');
        
        getNumber.classList.remove('selected');

        li.classList.add('selected');
        li.style.backgroundColor = 'hsl(25, 97%, 53%)'; //numbers-rating-color-clicked
        li.style.color = 'white';

        getNumber.style.backgroundColor = 'hsl(219, 11%, 26%)'; //gray
        getNumber.style.color ='hsl(216, 12%, 54%)'; //numbers-rating-color

        return
    });
});

submitButton.addEventListener('click', submitRate);

function submitRate(){

    const submitted = document.querySelector('.submitted-state');

    ratePoint.innerText = numbersRate.classList.contains('selected').innerText

    standardState.style.display ='none';

    submitted.style.display ='block';

};
