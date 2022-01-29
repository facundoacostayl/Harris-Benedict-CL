export class Hombre {
    constructor(peso, tipo, estatura, medida, edad, actividad) {
        this.peso = peso;
        this.tipo = tipo;
        this.estatura = estatura;
        this.medida = medida;
        this.edad = edad;
        this.actividad = actividad;
    }
    calculate() {
        const pesoBase = 66;
        let pesoCalc;
        if (this.tipo === "kilos") {
            pesoCalc = this.peso * 13.7;
        }
        else {
            pesoCalc = (this.peso / 2.2046) * 13.7;
        }
        let estaturaCalc;
        if (this.medida === "cm") {
            estaturaCalc = this.estatura * 5;
        }
        else {
            const arrayOfStrings = this.estatura.toString().split("");
            const arrayOfNumbers = arrayOfStrings.map(Number);
            const feetCalculated = (arrayOfNumbers[0] * 12) + arrayOfNumbers[1];
            estaturaCalc = (feetCalculated * 2.54) * 5.0033;
        }
        const edadCalc = this.edad * 6.8;
        let rmb = [pesoBase, pesoCalc, estaturaCalc, edadCalc, this.actividad];
        return rmb;
    }
}
