import { HasCalculate } from "../interfases/HasCalculate";

export class Hombre implements HasCalculate {
    constructor(
        private peso: number,
        private tipo: string,
        private estatura: number,
        private medida: string,
        private edad: number,
        private actividad: string
    ) { }

    calculate(): [number, number, number, number, string] {

        const pesoBase = 66.473;

        let pesoCalc: number;
        if (this.tipo === "kilos") {
            pesoCalc = this.peso * 13.752;
        } else {
            pesoCalc = (this.peso / 2.2046) * 13.752;
        }

        let estaturaCalc: number;
        if (this.medida === "cm") {
            estaturaCalc = this.estatura * 5.0033;
        } else {
            const arrayOfStrings: string[] = this.estatura.toString().split("");
            const arrayOfNumbers: number[] = arrayOfStrings.map(Number);
            const feetCalculated: number = (arrayOfNumbers[0] * 12) + arrayOfNumbers[1];
            estaturaCalc = (feetCalculated * 2.54) * 5.0033;
        }

        const edadCalc: number = this.edad * 6.755;

        let rmb: [number, number, number, number, string] = [pesoBase, pesoCalc, estaturaCalc, edadCalc, this.actividad];

        return rmb;
    }
}