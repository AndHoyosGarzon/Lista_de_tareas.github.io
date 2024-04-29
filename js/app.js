let tareasGlobales = [];

function impTareas(){
    const ul = document.querySelector('#tareas');
    let content = '';
    tareasGlobales.forEach(el => {
         content += `<li class='my-3 border-bottom fw-bolder'>
                            ${el}
                    </li>`;
    });
    
    content += `<li class='my-3'>
                    <input type='text' onfocusout='agreTareas(value)' />
                </li>`;
    
    ul.innerHTML = content;

}


function agreTareas(add){
        tareasGlobales.push(add);
        impTareas();
}

impTareas();