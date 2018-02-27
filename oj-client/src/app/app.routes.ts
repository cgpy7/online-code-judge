import { Routes, RouterModule } from '@angular/router';
import { ProblemListComponent } from './problem-list/problem-list.component';
import { ProblemDetailComponent } from './problem-detail/problem-detail/problem-detail.component';
import { Problem } from '../app/models/problem.model';
import { The404Component } from './the404/the404.component';

const routes: Routes = [
{

    path: '',
    redirectTo: 'problems',
    pathMatch: 'full'
},
{
    path: 'problems',
    component: ProblemListComponent
},

{
    path: 'problems/errorpage',
    component: The404Component
},

{
    path: 'problems/:id',
    component: ProblemDetailComponent
},



{
    path: '**',
    redirectTo: 'problems/errorpage' // new component 404
}

];

export const routing = RouterModule.forRoot(routes);
