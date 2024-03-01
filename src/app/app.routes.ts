import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadChildren: () => import('./modules/nliv/nliv.module').then(m => m.NLIVModule) },
    { path: 'ai', loadChildren: () => import('./modules/aimodule/aimodule.module').then(m => m.AIModule) },
    { path: '**', redirectTo: '404' }
];