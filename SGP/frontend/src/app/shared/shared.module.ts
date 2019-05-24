//Module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//Components
import { NavbarComponent } from './navbar/navbar.component';
import { BreadcumpsComponent } from './breadcumps/breadcumps.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { NovedadComponent } from './novedad/novedad.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    NavbarComponent,
    BreadcumpsComponent,
    FooterComponent,
    HeaderComponent,
    NopagefoundComponent,
    NovedadComponent
  ],
  providers: [],
  exports:[
    NavbarComponent,
    BreadcumpsComponent,
    FooterComponent,
    HeaderComponent,
    NopagefoundComponent,
    NovedadComponent
  ]
})
export class SharedModule { }
