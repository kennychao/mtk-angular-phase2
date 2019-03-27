import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FunctionRoutingModule } from './function-routing.module';
import { ArticleComponent } from './article/article.component';

@NgModule({
  declarations: [ArticleComponent],
  imports: [
    CommonModule,
    FunctionRoutingModule
  ]
})
export class FunctionModule { }
