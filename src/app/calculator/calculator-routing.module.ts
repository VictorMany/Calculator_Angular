import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoOperationComponent } from './do-operation/do-operation.component';
import { ShowResultComponent } from './show-result/show-result.component';


const routes: Routes = [
  { path: 'operation', component: DoOperationComponent },
  { path: 'result', component: ShowResultComponent },
  { path: '**', redirectTo: 'operation' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalculatorRoutingModule { }
