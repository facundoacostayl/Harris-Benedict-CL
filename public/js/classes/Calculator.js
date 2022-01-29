export class Calculator {
    constructor(data) {
        this.data = data;
    }
    calculateRmb() {
        const data = this.data;
        let valueOfActividad = 0;
        switch (data[4]) {
            case "sedentario":
                valueOfActividad = 1.15;
                break;
            case "ligera":
                valueOfActividad = 1.35;
                break;
            case "moderada":
                valueOfActividad = 1.55;
                break;
            case "intensta":
                valueOfActividad = 1.75;
                break;
            case "muy-intensa":
                valueOfActividad = 1.95;
                break;
        }
        let sumOfData = data[0] + data[1] + data[2];
        let sumOfDataMinusEdad = sumOfData - data[3];
        let rmbRounded = Math.round(sumOfDataMinusEdad * valueOfActividad);
        console.log(sumOfData);
        console.log(sumOfDataMinusEdad);
        return rmbRounded;
    }
    calculateGoals(objetivo, rmb) {
        let goal;
        if (objetivo === "mantener") {
            goal = rmb;
        }
        else if (objetivo === "bajar") {
            goal = rmb - 500;
        }
        else {
            goal = rmb + 200;
        }
        return goal;
    }
}
