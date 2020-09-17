import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { ParcoursComponent } from './parcours/parcours.component';

import { RouterModule, Routes } from "@angular/router";
import { PresentationComponent } from './presentation/presentation.component';

const appRoutes : Routes = [
  {
    path: 'parcours',
    component: ParcoursComponent
  },
  {
    path: 'presentation',
    component: PresentationComponent
  },
  {
    path: '',
    component: AppComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    FooterComponentComponent,
    HeaderComponentComponent,
    ParcoursComponent,
    PresentationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
