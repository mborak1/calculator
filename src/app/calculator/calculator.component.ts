import { Component, inject } from '@angular/core';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {

  private calculatorService = inject(CalculatorService);

  onButtonClick(parameter: string){
    this.calculatorService.calculateResult(parameter);
  }
}
