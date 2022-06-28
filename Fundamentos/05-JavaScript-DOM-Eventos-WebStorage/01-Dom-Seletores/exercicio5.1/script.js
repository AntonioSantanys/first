let header = document.getElementById('header-container').style.backgroundColor = '#00ff7f';
// Muda a cor do background de header principal

let emergencyTasks = document.getElementsByClassName('emergency-tasks')[0];
emergencyTasks.style.backgroundColor = '#F08080'
// Muda a cor do background da seção emergency-tasks 

let emergencyTasksTitulo = document.querySelectorAll('.emergency-tasks h3');

for (let i = 0; i < emergencyTasksTitulo.length; i += 1){

    emergencyTasksTitulo[i].style.backgroundColor = '#7B68EE';
}

let noEmergencyTasks = document.querySelector('.no-emergency-tasks');
noEmergencyTasks.style.backgroundColor = 'rgb(249, 219, 94)';

let noEmergencyTasksTitulos = document.querySelectorAll('.no-emergency-tasks h3')

for (let index = 0; index < noEmergencyTasksTitulos.length; index++) {
        
    noEmergencyTasksTitulos[index].style.backgroundColor = 'black'
}






