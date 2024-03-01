import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'ai', loadChildren: () => import('./modules/ai/ai.module').then(m => m.AiModule) },
    { path: '', loadChildren: () => import('./modules/nliv/nliv.module').then(m => m.NLIVModule) },
    { path: '**', redirectTo: '404' }
];