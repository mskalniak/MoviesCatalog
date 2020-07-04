
document.addEventListener("DOMContentLoaded", function() {
    console.log('COUNTER app');

    console.log(document);
    
    const containerElem = document.getElementById('container');
    console.log(containerElem);
    
    const paragraphElem = document.createElement('p');
    paragraphElem.innerText = "To jest tekst!";
    paragraphElem.innerHTML = "<button id='btn'>button</button>";
    paragraphElem.id = "pid";
    paragraphElem.classList.add('active');
    paragraphElem.style.background = 'green';
    paragraphElem.style.borderTop = '10px solid blue';
    
    console.log(paragraphElem);
    
    containerElem.appendChild(paragraphElem);
    
    console.log(containerElem.getElementsByTagName('p'));
    containerElem.getElementsByClassName('active')
    console.log(containerElem.querySelector('#container p'));
    
    
    const buttonElem = document.querySelector('#btn');
    console.log(buttonElem);
    
    buttonElem.addEventListener('scroll', function() {
        console.log('button clicked!');
    });
    
    //mouseover
    //mouseout
    //dblclick
    //scroll
    

});
