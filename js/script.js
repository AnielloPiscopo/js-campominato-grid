/* -------------------------------------------------------------------
INIZIALIZZAZIONI E DICHIARAZIONI GLOBALI */

// * INIZIALIZZAZIONI

// ? PRELIEVO DAL DOM
const mainElement = document.querySelector('main');
const playBtn = document.querySelector('.my-btn');





/* --------------------------------------------------------------------
CODICE PRINCIPALE */

// * EVENTI
playBtn.addEventListener('click' , function(){
    // ? CREAZIONE E INSERIMENTO NEL DOM DEL CONTENITORE GRIGLIA
    const gridContainer = getAnElement('div');
    
    mainElement.append(gridContainer);

    
    // ? CREAZIONE DI UN SINGOLO ELEMENTO DELLA GRIGLIA
    for(let i=1 ; i<=100 ; i++){
        let gridSingleElement = getAnElement('div' , 'nulla');
        gridSingleElement.innerHTML = i;

        gridContainer.append(gridSingleElement);
    }
    
})





/* ------------------------------------------------------------------------
FUNZIONI */
function getAnElement(element , elementClass){
    let htmlElement = document.createElement(`element`);
    return htmlElement;
} 