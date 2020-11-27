import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculatorRoutingModule } from './calculator-routing.module';
import { DoOperationComponent } from './do-operation/do-operation.component';
import { ShowResultComponent } from './show-result/show-result.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [DoOperationComponent, ShowResultComponent],
  imports: [
    CommonModule,
    CalculatorRoutingModule, 
    RouterModule
  ],
  exports: [
    DoOperationComponent,
    ShowResultComponent
  ]
})

export class CalculatorModule { }
