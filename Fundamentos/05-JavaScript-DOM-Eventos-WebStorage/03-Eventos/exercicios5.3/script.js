function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

function createDaysOfTheMonth() {
    let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    let listDayDecember = document.getElementById('days');

    for (let index = 0; index < decemberDaysList.length; index += 1){

        let daysNumbers = decemberDaysList[index];
        let dayNumberElement = document.createElement('li');
        dayNumberElement.innerText = daysNumbers;
        listDayDecember.appendChild(dayNumberElement);
       
        if(daysNumbers == 24 || daysNumbers == 31){
             dayNumberElement.className = 'day holiday'
             listDayDecember.appendChild(dayNumberElement);
        } else if (daysNumbers == 4 || daysNumbers == 11 || daysNumbers == 18){
             dayNumberElement.className = 'day friday';
             listDayDecember.appendChild(dayNumberElement);
        }else if (daysNumbers == 25){
             dayNumberElement.className = 'day holiday friday';
        } else {
             dayNumberElement.className = 'day';
             listDayDecember.appendChild(dayNumberElement);

        }
        
    }

    listDayDecember.className = 'day';
}

createDaysOfTheMonth();


function botaoHoliday(string){
    let secaoBotao = document.querySelector('.buttons-container');
    let buttonHoliday = document.createElement('button');
    buttonHoliday.id = 'btn-holiday';
    buttonHoliday.innerText = 'Mostrar Feriados';
    secaoBotao.appendChild(buttonHoliday);
}


botaoHoliday();