import { HasCalculate } from "../interfases/HasCalculate";

export class Mujer implements HasCalculate {
    constructor(
        private peso: number,
        private tipo: string,
        private estatura: number,
        private medida: string,
        private edad: number,
        private actividad: string
    ) { }

    calculate(): [number, number, number, number, string] {

        const pesoBase = 655;

        let pesoCalc: number;
        if (this.tipo === "kilos") {
            pesoCalc = this.peso * 9.6;
        } else {
            pesoCalc = (this.peso / 2.2046) * 9.6;
        }

        let estaturaCalc: number;
        if (this.medida === "cm") {
            estaturaCalc = this.estatura * 1.8;
        } else {
            const arrayOfStrings: string[] = this.estatura.toString().split("");
            const arrayOfNumbers: number[] = arrayOfStrings.map(Number);
            const feetCalculated: number = (arrayOfNumbers[0] * 12) + arrayOfNumbers[1];
            estaturaCalc = (feetCalculated * 2.54) * 1.8;
        }

        let edadCalc: number = this.edad * 4.7;

        let rmb: [number, number, number, number, string] = [pesoBase, pesoCalc, estaturaCalc, edadCalc, this.actividad];

        return rmb;
    }
}