import { Hombre } from './classes/Hombre.js';
import { Mujer } from './classes/Mujer.js';
import { Calculator } from './classes/Calculator.js';
import { Displayer } from './classes/Displayer.js';
const container = document.querySelector('#form');
const form = document.querySelector('form');
const continueBtn = document.querySelector('.actividadBtn');
const sexo = document.querySelector('#sexo');
const peso = document.querySelector('#peso');
const tipoDePeso = document.querySelector('#tipo-de-peso');
let estatura;
let feet;
let inches;
const tipoDeMedida = document.querySelector('#tipo-de-medida');
const edad = document.querySelector('#edad');
let actividad;
let objetivo;
if (tipoDeMedida.value === "cm") {
    estatura = document.querySelector('#estatura');
}
else {
    if (document.querySelector("#inches") && document.querySelector("#feet")) {
        feet = document.querySelector("#feet");
        inches = document.querySelector("#inches");
        const inchPlusFeet = inches.valueAsNumber.toString() + feet.valueAsNumber.toString();
        ///estatura = Number(inchPlusFeet);
    }
}
const displayer = new Displayer(container);
continueBtn.addEventListener('click', () => {
    displayer.displayActividad();
    actividad = document.querySelector('#actividad');
    if (document.querySelector(".objetivoBtn")) {
        const objetivoBtn = document.querySelector(".objetivoBtn");
        objetivoBtn.addEventListener("click", () => {
            displayer.displayObjetivo();
            objetivo = document.querySelector('#objetivo');
        });
    }
});
console.log();
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let user;
    if (sexo.value === 'hombre') {
        user = new Hombre(peso.valueAsNumber, tipoDePeso.value, estatura.valueAsNumber, tipoDeMedida.value, edad.valueAsNumber, actividad.value);
    }
    else {
        user = new Mujer(peso.valueAsNumber, tipoDePeso.value, estatura.valueAsNumber, tipoDeMedida.value, edad.valueAsNumber, actividad.value);
    }
    const calculator = new Calculator(user.calculate());
    const rmb = calculator.calculateRmb();
    console.log(rmb);
    const objetivoCalories = calculator.calculateGoals(objetivo.value, rmb);
    displayer.displayResult(objetivoCalories, objetivo.value);
});
