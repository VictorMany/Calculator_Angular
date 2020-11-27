import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // Módulo de autenticación (página de login y registro)
  // En este caso se estan cargando los modulos por Lazy load
  { path: 'Calculator', loadChildren: () => import('./calculator/calculator.module').then((m) => m.CalculatorModule) },
  // Módulo de con las características de la aplicación
  { path: '**', redirectTo: 'Calculator' }
  // {path: '**', component: PageNotFoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
