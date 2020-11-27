import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CalculatorModule } from './calculator/calculator.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxsModule } from '@ngxs/store';
import { OperationState } from './models/calculator/calculator.redux';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CalculatorModule,
    NgxsModule.forRoot([
      OperationState
    ]),
    NgxsReduxDevtoolsPluginModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
