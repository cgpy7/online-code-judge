import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { HttpModule } from '@angular/http';
import { routing } from './app.routes';


import { DataService } from '../../src/services/data.service';
import { CollaborationService } from'../../src/services/collaboration.service';

import { AppComponent } from './app.component';
import { ProblemListComponent } from './problem-list/problem-list.component';
import { ProblemDetailComponent } from './problem-detail/problem-detail/problem-detail.component';
import { The404Component } from './the404/the404.component';
import { NewProblemComponent } from './new-problem/new-problem/new-problem.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EditorComponent } from './editor/editor/editor.component';


@NgModule({
  declarations: [
    AppComponent,
    ProblemListComponent,
    ProblemDetailComponent,
    The404Component,
    NewProblemComponent,
    NavbarComponent,
    EditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpClientModule
  ],
  providers: [
    DataService,
    CollaborationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
