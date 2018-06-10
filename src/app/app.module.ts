import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DiretivaNgifComponent } from './diretiva-ngif/diretiva-ngif.component';
import { CicloUiComponent } from './ciclo-ui/ciclo-ui.component';

@NgModule({
  declarations: [
    AppComponent,
    DiretivaNgifComponent,
    CicloUiComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
