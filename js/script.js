function getNewSquare (){
    const newSquareElement = document.createElement('article');
    newSquareElement.classList.add('items-square');

    return newSquareElement
}

const mainContentEl = document.querySelector('main section.main-content');

for (let i = 1; i <= 100; i ++){
    const currentSquare = getNewSquare();
    const squareContent = i

    currentSquare.addEventListener('click', function(){
        currentSquare.classList.toggle('clicked');
    });

    mainContentEl.appendChild(currentSquare);
}