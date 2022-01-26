export class Calculator {
    constructor(data) {
        this.data = data;
    }
    calculate() {
        const data = this.data;
        let valueOfActividad = 0;
        switch (data[4]) {
            case "sedentario":
                valueOfActividad = 1;
                break;
            case "ligera":
                valueOfActividad = 1.2;
                break;
            case "moderada":
                valueOfActividad = 1.4;
                break;
            case "intensta":
                valueOfActividad = 1.6;
                break;
            case "muy-intensa":
                valueOfActividad = 1.8;
                break;
        }
        let sumOfData = data[0] + data[1] + data[2];
        let sumOfDataMinusEdad = sumOfData - data[3];
        let rmb = sumOfDataMinusEdad * valueOfActividad;
        return rmb;
    }
}
