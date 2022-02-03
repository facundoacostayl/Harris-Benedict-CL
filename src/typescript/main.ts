import { Hombre } from './classes/Hombre.js';
import { Mujer } from './classes/Mujer.js';
import { Calculator } from './classes/Calculator.js';
import { HasCalculate } from './interfases/HasCalculate'
import { Displayer } from './classes/Displayer.js'

const container = document.querySelector('#form') as HTMLDivElement;
const form = document.querySelector('form') as HTMLFormElement;
const continueBtn = document.querySelector('.actividadBtn') as HTMLParagraphElement;
const titleForm = document.querySelector('.title__form') as HTMLElement;
const sexo = document.querySelector('#sexo') as HTMLSelectElement;
const peso = document.querySelector('#peso') as HTMLInputElement;
const tipoDePeso = document.querySelector('#tipo-de-peso') as HTMLSelectElement;
let estatura: HTMLInputElement;
let feet: HTMLInputElement; let inches: HTMLInputElement;
const tipoDeMedida = document.querySelector('#tipo-de-medida') as HTMLSelectElement;
const edad = document.querySelector('#edad') as HTMLInputElement;
let actividad: HTMLSelectElement;
let objetivo: HTMLSelectElement;

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

const displayer = new Displayer(container);

continueBtn.addEventListener('click', () => {
    let isCorrect: boolean = true;
    const errorMessages: string[] = [];
    if (!peso.valueAsNumber) {
        isCorrect = false;
        errorMessages.push("Debes ingresar un peso válido")
    }
    if (!estatura.valueAsNumber) {
        isCorrect = false;
        errorMessages.push("Debes ingresar una estatura válida")
    }
    if (!edad.valueAsNumber) {
        isCorrect = false;
        errorMessages.push("Debes ingresar una edad válida");
    }

    if(!isCorrect){
        if(container.querySelector(".errorAlert")) {
            container.removeChild(container.children[0]);
        }
        displayer.displayErrorMessages(errorMessages, titleForm);
    }else {
        displayer.displayActividad(); //ACA
        actividad = document.querySelector('#actividad') as HTMLSelectElement;
        if (document.querySelector(".objetivoBtn")) {
            const objetivoBtn = document.querySelector(".objetivoBtn") as HTMLParagraphElement;
            objetivoBtn.addEventListener("click", () => {
                displayer.displayObjetivo()// Y ACA
                objetivo = document.querySelector('#objetivo') as HTMLSelectElement;
            })
        }
    }
})


form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let user: HasCalculate;
    if (sexo.value === 'hombre') {
        user = new Hombre(peso.valueAsNumber, tipoDePeso.value, estatura.valueAsNumber, tipoDeMedida.value, edad.valueAsNumber, actividad.value)
    } else {
        user = new Mujer(peso.valueAsNumber, tipoDePeso.value, estatura.valueAsNumber, tipoDeMedida.value, edad.valueAsNumber, actividad.value)
    }


    const calculator = new Calculator(user.calculate());
    const rmb = calculator.calculateRmb();
    const objetivoCalories = calculator.calculateGoals(objetivo.value, rmb);


    displayer.displayResult(objetivoCalories, objetivo.value);

})
