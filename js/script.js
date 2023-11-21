function getNewSquare (){
    const newSquareElement = document.createElement('article');
    newSquareElement.classList.add('items-square');

    return newSquareElement
}

const buttonElement = document.querySelector('button');


buttonElement.addEventListener('click' , function(){
    const mainContentEl = document.querySelector('main section.main-content');

    

    for (let i = 1; i <= 100; i ++){
    const currentSquare = getNewSquare();
    const squareContent = i;
    currentSquare.innerHTML += `<span> ${squareContent}</span>`
    currentSquare.classList.add('clicked')
    

    currentSquare.addEventListener('click', function(){
        currentSquare.classList.toggle('clicked');
    });

    mainContentEl.appendChild(currentSquare);
    
}



})








function getRandomNumber (minNumber, maxNumber){
    return Math.floor(Math.random()*(maxNumber - minNumber + 1) + minNumber)
}