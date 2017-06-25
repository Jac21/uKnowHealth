export class RecordLine {
    name: string;
    value: number;
    max: number;
    min: number;
    step: number;
    description: string;

    constructor(jsonInput) {
        this.name = jsonInput.name;
        this.value = jsonInput.value;
        this.max = jsonInput.max;
        this.min = jsonInput.min;
        this.step = jsonInput.step;
        this.description = jsonInput.description;
    }
}