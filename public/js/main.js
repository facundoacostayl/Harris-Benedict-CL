//**IMPORTS**/
import { Hombre } from './classes/Hombre.js';
import { Mujer } from './classes/Mujer.js';
import { Calculator } from './classes/Calculator.js';
import { Displayer } from './classes/Displayer.js';
/**VARIABLES**/
const container = document.querySelector('#form');
const form = document.querySelector('form');
const continueBtn = document.querySelector('.actividadBtn');
const titleForm = document.querySelector('.title__form');
const typeNumberInputs = document.querySelectorAll('.numInput');
const sexo = document.querySelector('#sexo');
const peso = document.querySelector('#peso');
const tipoDePeso = document.querySelector('#tipo-de-peso');
let estaturaEnCm = document.querySelector('#estatura');
let estaturaEnInches;
let estaturaTotal;
let feet = document.querySelector("#feet");
let inches = document.querySelector("#inches");
const tipoDeMedida = document.querySelector('#tipo-de-medida');
const edad = document.querySelector('#edad');
let actividad;
let objetivo;
//**CM INPUTS TO FEET-INCHES INPUTS DINAMIC CHANGE**/
tipoDeMedida.addEventListener("change", () => {
    const estaturaEnCmInput = document.querySelector('.estaturaEnCm');
    const estaturaEnInches = document.querySelector('.estaturaEnInches');
    if (tipoDeMedida.value == "ft-inches") {
        estaturaEnCmInput.classList.add("d-none");
        estaturaEnInches.classList.remove("d-none");
    }
    else {
        estaturaEnInches.classList.add("d-none");
        estaturaEnCmInput.classList.remove("d-none");
    }
});
const displayer = new Displayer(container);
let isCorrect = true;
let errorMessages = [];
/**CONTINUE BUTTON ENABLED/DISABLED**/
const activateButton = () => {
    if (!document.querySelector(".input__alert")) {
        if (continueBtn.classList.contains("buttonDisabled")) {
            continueBtn.classList.remove("buttonDisabled");
        }
    }
};
const desactivateButton = () => {
    continueBtn.classList.add("buttonDisabled");
};
/**RED INPUT**/
const paintInputNormal = (event) => {
    event.style.border = "none";
};
/**REMOVE INPUT ALERT**/
const removeInputAlert = (event) => {
    const eventParent = event.parentElement;
    if (eventParent.querySelector(".input__alert")) {
        const eventParentLength = eventParent.childNodes.length - 1;
        eventParent.removeChild(eventParent.childNodes[eventParentLength]);
    }
};
/**DISPLAY INPUT ALERT + RED INPUT + BUTTON DISABLED + VALIDATION FALSE**/
const displayError = (event) => {
    if (!event.parentElement.querySelector(".input__alert")) {
        const inputAlert = document.createElement("p");
        inputAlert.classList.add("input__alert");
        const inputAlertContent = "Se requiere atención especializada";
        inputAlert.textContent = inputAlertContent;
        event.parentElement.append(inputAlert);
    }
    event.style.border = "1px solid red";
    desactivateButton();
    isCorrect = false;
};
/**INPUT BLUR EVENTS**/
typeNumberInputs.forEach(i => {
    i.addEventListener("blur", (e) => {
        const input = e.target;
        if (input.id === "peso" && tipoDePeso.value === "kilos") {
            if (input.valueAsNumber >= 300 || input.valueAsNumber <= 45) {
                displayError(input);
            }
            else {
                paintInputNormal(input);
                removeInputAlert(input);
                activateButton();
                isCorrect = true;
            }
        }
        if (input.id === "peso" && tipoDePeso.value === "libras") {
            if (input.valueAsNumber >= 660 || input.valueAsNumber <= 45) {
                displayError(input);
            }
            else {
                paintInputNormal(input);
                removeInputAlert(input);
                activateButton();
                isCorrect = true;
            }
        }
        if (input.id === "estatura" && tipoDeMedida.value === "cm") {
            if (estaturaEnCm.valueAsNumber >= 240 || estaturaEnCm.valueAsNumber <= 100) {
                displayError(input);
            }
            else {
                paintInputNormal(input);
                removeInputAlert(input);
                activateButton();
                isCorrect = true;
            }
        }
        if (input.id === "feet" && tipoDeMedida.value === "ft-inches" || input.id === "inches" && tipoDeMedida.value === "ft-inches") {
            if (feet.valueAsNumber >= 8 || feet.valueAsNumber <= 4 && inches.valueAsNumber >= 10) {
                displayError(input);
            }
            else {
                paintInputNormal(input);
                removeInputAlert(input);
                activateButton();
                isCorrect = true;
            }
        }
        if (input.id === "edad") {
            if (edad.valueAsNumber < 18 || edad.valueAsNumber > 85) {
                displayError(input);
            }
            else {
                paintInputNormal(input);
                removeInputAlert(input);
                activateButton();
                isCorrect = true;
            }
        }
    });
});
/**INPUT "INPUT" EVENTS**/
typeNumberInputs.forEach(i => {
    i.addEventListener("input", (e) => {
        const input = e.target;
        if (input.value === "") {
            activateButton();
            removeInputAlert(input);
        }
    });
});
/**DEFINE "ESTATURA" VALUE => CM OR FEET**/
const definirEstatura = () => {
    if (tipoDeMedida.value === "cm") {
        estaturaTotal = estaturaEnCm.valueAsNumber;
    }
    else {
        if (tipoDeMedida.value === "ft-inches") {
            const inchPlusFeet = feet.valueAsNumber.toString() + inches.valueAsNumber.toString();
            estaturaEnInches = Number(inchPlusFeet);
            estaturaTotal = estaturaEnInches;
        }
    }
};
/**FORM VALIDATION BEFORE CONTINUE**/
continueBtn.addEventListener('click', () => {
    if (!document.querySelector(".input__alert")) {
        if (!peso.valueAsNumber) {
            isCorrect = false;
            errorMessages.push("Debes ingresar un peso válido");
        }
        definirEstatura();
        if (tipoDeMedida.value === "cm") {
            if (!estaturaEnCm.valueAsNumber) {
                isCorrect = false;
                errorMessages.push("Debes ingresar una estatura válida");
            }
        }
        if (tipoDeMedida.value === "ft-inches") {
            if (!feet.valueAsNumber || !inches.valueAsNumber) {
                isCorrect = false;
                errorMessages.push("Debes ingresar una estatura válida");
            }
        }
        if (!edad.valueAsNumber) {
            isCorrect = false;
            errorMessages.push("Debes ingresar una edad válida");
        }
        if (!isCorrect) {
            if (document.querySelector(".errorAlert")) {
                container.removeChild(container.children[0]);
            }
            displayer.displayErrorMessages(errorMessages, titleForm);
            errorMessages = [];
            desactivateButton();
        }
        else {
            displayer.displayActividad();
            actividad = document.querySelector('#actividad');
            if (document.querySelector(".objetivoBtn")) {
                const objetivoBtn = document.querySelector(".objetivoBtn");
                objetivoBtn.addEventListener("click", () => {
                    displayer.displayObjetivo();
                    objetivo = document.querySelector('#objetivo');
                });
            }
        }
    }
});
/**SUBMIT + CALCULATE**/
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let user;
    if (sexo.value === 'hombre') {
        user = new Hombre(peso.valueAsNumber, tipoDePeso.value, estaturaTotal, tipoDeMedida.value, edad.valueAsNumber, actividad.value);
    }
    else {
        user = new Mujer(peso.valueAsNumber, tipoDePeso.value, estaturaTotal, tipoDeMedida.value, edad.valueAsNumber, actividad.value);
    }
    const calculator = new Calculator(user.calculate());
    const rmb = calculator.calculateRmb();
    const objetivoCalories = calculator.calculateGoals(objetivo.value, rmb);
    displayer.displayResult(objetivoCalories, objetivo.value);
});
