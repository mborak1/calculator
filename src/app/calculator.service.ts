import { Injectable, signal } from "@angular/core";

@Injectable({providedIn: 'root'})
export class CalculatorService{

    calculationResult = signal<string>('0');
    operations: Array<string> = ["*",'/','+','=','-'];
    calculationOperation?: string;
    leftNumber?: string;
    rightNumber?: string;
    isLeft: boolean = true;

    calculateResult(input: string){
        if(this.operations.includes(input)){
            this.isLeft = !this.isLeft;
            this.calculationOperation = input;
            console.log(this.calculationOperation)
        }
        //Do while is left append numbers in array
        if(this.isLeft){
            this.leftNumber = this.leftNumber?.concat(input);
        }
        //append numbers in other array if it is = perform calculation?
        //But what if i have 9999 * 9999 * 9999 then i should first calculate first 2 and make 
        //it as left and make 9999 as right if there is no result i move one step further and repeat

    }
}