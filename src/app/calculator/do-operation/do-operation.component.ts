import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Action, Actions, Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AddOperationAction, IROperation, OperationState } from 'src/app/models/calculator/calculator.redux';

@Component({
  selector: 'app-do-operation',
  templateUrl: './do-operation.component.html',
  styleUrls: ['./do-operation.component.scss']
})
export class DoOperationComponent implements OnInit {
  resultado: string = '';
  operation: string = '';
  miniResult: number = 0;
  historial: Array<string> = []          // Arreglo de Strings 

  //USO DEL STATE DONDE OBTENEMOS TODAS LAS OPERACIONES
  @Select(OperationState.getAllOperations) operations$: Observable<IROperation[]>;

  constructor(
    private router: Router,
    private store: Store) { }

  ngOnInit(): void {

  }

  //Concatenación de numeros y de caracteres
  onConcat(num: number) {
    switch (num) {
      case 100:
        this.operation = this.operation + '+'
        break;
      case 200:
        this.operation = this.operation + '-'
        break;
      case 300:
        this.operation = this.operation + '/'
        break;
      case 400:
        this.operation = this.operation + '.'
        break;
      case 500:
        this.operation = this.operation + '*'
        break;
      default:
        this.operation = this.operation + num.toString();
    }
    this.resultado = this.operation.toString();
  }


  //Realizar Operaciión
  onDoOperation() {
    try {
      this.miniResult = eval(this.resultado)
      this.resultado = this.miniResult.toString()
      this.historial.push(this.operation.toString());
      console.log(this.historial)
      this.store.dispatch(new AddOperationAction(this.operation.toString()));
      this.operation = '';
    } catch (error) {
      console.log("Operacion Incorrecta")
      this.resultado = ''
      this.operation = ''
    }
  }

  //Opción de borrar lo que llevamos en la operación
  borrar() {
    this.operation = ''
    this.resultado = ''
  }

  //Ir a la pagina de un historial
  goToHistory() {
    this.router.navigate(['/Calculator/result']);
  }
}
