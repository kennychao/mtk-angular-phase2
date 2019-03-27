import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { MainThemeTwoComponent } from './main-theme-two/main-theme-two.component';
import { HeaderThemeTwoComponent } from './header-theme-two/header-theme-two.component';

@NgModule({
  declarations: [FooterComponent, MainComponent, HeaderComponent, MainThemeTwoComponent, HeaderThemeTwoComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MainComponent,
    MainThemeTwoComponent
  ]
})
export class LayoutModule { }
