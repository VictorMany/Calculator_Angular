import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { patch, append, removeItem, insertItem, updateItem } from '@ngxs/store/operators';
import { state } from '@angular/animations';

//Creamos nuestra interfaz de las operaciones
export interface IROperation {
   operations: Array<string>;
}


export class AddOperationAction {
   public static type = '[Array<string>] Add';
   constructor(public operation) {

   }
}

@State<IROperation>({
   name: 'operationState',
   defaults: {
      operations: [] //Arreglo con el historial de las operaciones QUE por default esta vacio
   }
})

@Injectable()
export class OperationState {
   constructor() { }

   @Selector() //Unir información entre varios states, vacio no hace nada
   static getAllOperations(state: IROperation) {
      return state.operations;
   }

   @Action(AddOperationAction)
   add(ctx: StateContext<IROperation>, action: AddOperationAction) {
      //Set
      ctx.setState({ operations: [...ctx.getState().operations, action.operation] });
      //Patch
      //ctx.patchState({users: [...ctx.getState().users, action.user]})
   }
}

