export class Mujer {
    constructor(peso, tipo, estatura, medida, edad, actividad) {
        this.peso = peso;
        this.tipo = tipo;
        this.estatura = estatura;
        this.medida = medida;
        this.edad = edad;
        this.actividad = actividad;
    }
    calculate() {
        const pesoBase = 65.0955;
        let pesoCalc;
        if (this.tipo === "kilos") {
            pesoCalc = this.peso * 9.463;
        }
        else {
            pesoCalc = (this.peso / 2.2046) * 9.463;
        }
        let estaturaCalc;
        if (this.medida === "cm") {
            estaturaCalc = this.estatura * 1.8496;
        }
        else {
            const arrayOfStrings = this.estatura.toString().split("");
            const arrayOfNumbers = arrayOfStrings.map(Number);
            const feetCalculated = (arrayOfNumbers[0] * 12) + arrayOfNumbers[1];
            estaturaCalc = (feetCalculated * 2.54) * 1.8496;
        }
        let edadCalc = this.edad * 4.6756;
        let rmb = [pesoBase, pesoCalc, estaturaCalc, edadCalc, this.actividad];
        return rmb;
    }
}
