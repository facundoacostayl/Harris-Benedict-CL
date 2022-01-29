import { Hombre } from './classes/Hombre.js';
import { Mujer } from './classes/Mujer.js';
import { Calculator } from './classes/Calculator.js';
import { HasCalculate } from './interfases/HasCalculate.js';
import { Displayer } from './classes/Displayer.js'

const container = document.querySelector('#form') as HTMLDivElement;
const form = document.querySelector('form') as HTMLFormElement;
const sexo = document.querySelector('#sexo') as HTMLSelectElement;
const peso = document.querySelector('#peso') as HTMLInputElement;
const tipoDePeso = document.querySelector('#tipo-de-peso') as HTMLSelectElement;
let estatura: HTMLInputElement;
let feet: HTMLInputElement; let inches: HTMLInputElement;
const tipoDeMedida = document.querySelector('#tipo-de-medida') as HTMLSelectElement;
const edad = document.querySelector('#edad') as HTMLInputElement;
const actividad = document.querySelector('#actividad') as HTMLSelectElement;
const objetivo = document.querySelector('#objetivo') as HTMLSelectElement;

if (tipoDeMedida.value === "cm") {
    estatura = document.querySelector('#estatura') as HTMLInputElement;
} else {
    if (document.querySelector("#inches") && document.querySelector("#feet")) {
        feet = document.querySelector("#feet") as HTMLInputElement;
        inches = document.querySelector("#inches") as HTMLInputElement;


        const inchPlusFeet = inches.valueAsNumber.toString() + feet.valueAsNumber.toString();
        ///estatura = Number(inchPlusFeet);
    }
}


form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let user: HasCalculate;
    if(sexo.value === 'hombre') {
        user = new Hombre(peso.valueAsNumber, tipoDePeso.value, estatura.valueAsNumber, tipoDeMedida.value, edad.valueAsNumber, actividad.value)
    }else {
        user = new Mujer(peso.valueAsNumber, tipoDePeso.value, estatura.valueAsNumber, tipoDeMedida.value, edad.valueAsNumber, actividad.value)
    }

    const calculator = new Calculator(user.calculate());
    const rmb = calculator.calculateRmb();
    console.log(rmb)
    const objetivoCalories = calculator.calculateGoals(objetivo.value, rmb);
    const displayer = new Displayer(container, objetivoCalories, objetivo.value);

    displayer.display();
    
})
