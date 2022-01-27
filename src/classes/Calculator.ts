
export class Calculator {
    constructor(
        private data: [number, number, number, number, string]
    ) { }

    calculateRmb(): number {
        const data = this.data;
        let valueOfActividad: number = 0;
        switch (data[4]) {
            case "sedentario": valueOfActividad = 1
                break;
            case "ligera": valueOfActividad = 1.2
                break;
            case "moderada": valueOfActividad = 1.4
                break;
            case "intensta": valueOfActividad = 1.6
                break;
            case "muy-intensa": valueOfActividad = 1.8
                break;
        }

        let sumOfData: number = data[0] + data[1] + data[2];
        let sumOfDataMinusEdad: number = sumOfData - data[3];
        let rmb = sumOfDataMinusEdad * valueOfActividad;

        return rmb;
    }

    calculateGoals(objetivo: string, rmb: number): number {
        let goal: number;
        if (objetivo === "mantener") {
            goal = rmb;
        } else if(objetivo === "bajar") {
            goal = rmb - 500;
        } else {
            goal = rmb + 200;
        }

        return goal;
    }
}