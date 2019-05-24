import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NovedadService } from './service.index';
import { HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    NovedadService,
    HttpClientModule
  ]
})
export class ServiceModule { }
