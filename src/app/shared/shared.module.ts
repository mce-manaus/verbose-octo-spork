import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import { CardComponent } from './card/card.component';
registerLocaleData(ptBr);

const components = [
  CardComponent
]
@NgModule({
  declarations: components,
  imports: [
    CommonModule
  ],
  providers:[
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ],
  exports:[
    components
  ]
})
export class SharedModule { }
