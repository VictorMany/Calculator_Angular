import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { IROperation, OperationState } from 'src/app/models/calculator/calculator.redux';

@Component({
  selector: 'app-show-result',
  templateUrl: './show-result.component.html',
  styleUrls: ['./show-result.component.scss']
})
export class ShowResultComponent implements OnInit {

  historial: Array<string> = []
  @Select(OperationState.getAllOperations) operations$: Observable<Array<string>>;
  constructor(private router: Router, private store: Store) { }

  ngOnInit(): void {
    const operations = this.store.selectSnapshot(OperationState.getAllOperations);
    this.store.select(OperationState.getAllOperations).subscribe((next) => {
      console.log('Cambio (Observable) ', next)
    })
    console.log("sepa la madre que iba aquí ", operations);
  }

  backToCalculator() {
    this.router.navigate(['/operation']);
  }

}
