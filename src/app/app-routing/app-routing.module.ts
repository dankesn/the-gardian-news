import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NewsMainComponent } from '../news-main/news-main.component';
import { SectionComponent } from './../news-main/section/section.component'; 


const routes: Routes = [
  { path: 'news', component: NewsMainComponent },
  { path: 'news/:section', component: SectionComponent },
   { path: '', redirectTo: '/news', pathMatch: 'full'}
  
];

@NgModule({
  imports: [
     RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
