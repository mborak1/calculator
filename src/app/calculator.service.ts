import { Injectable, signal } from "@angular/core";

@Injectable({providedIn: 'root'})
export class CalculatorService{

    calculationResult = signal<string>('0');
    operations: Array<string> = ["*",'/','+','-'];
    numbers: string[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    expression: (string | number)[] = [];
    currentNumber: string = '';
    result: number = 0;

    calculateResult(input: string) {
        if (input === "=") {
            return this.calculate();
        }
        else if (this.numbers.includes(input)) {
            this.currentNumber += input;
        }
        else {
            if (this.currentNumber) {
                this.addNumberToExpression();
            }
            this.expression.push(input);
        }
    }
    private calculate() {
        this.addNumberToExpression();
        this.calculateExpression();
        this.reset();
        console.log("Calculation result is: " + this.result);
    }

    private addNumberToExpression() {
        this.expression.push((+this.currentNumber));
        this.currentNumber = '';
    }
    
    calculateExpression() {
        this.result = this.expression[0] as number;
        for (var i = 0; i<this.expression.length; i +=2) {
            
            let secondValue = this.expression[i+2] as number;

            switch(this.expression[i+1]){
                case '+':
                    this.result = this.result + secondValue;
                    break;
                case '*':
                    this.result = this.result * secondValue;
                    break;
                case '/':
                    this.result = this.result / secondValue;
                    break;
                case '-':
                    this.result = this.result - secondValue;
                    break;
            }
            this.calculationResult.set(this.result.toString());
        }
    }

    reset() {
        this.expression.length = 0; 
        this.expression.push(this.result);
    }
}