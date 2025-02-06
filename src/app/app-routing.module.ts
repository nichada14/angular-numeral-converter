import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NumeralConverterComponent } from './numeral-converter/numeral-converter.component';

const routes: Routes = [
  { path: '', component: NumeralConverterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
