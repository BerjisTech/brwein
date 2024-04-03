import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'school', loadChildren: () => import('./modules/school/school.module').then(m => m.SchoolModule) },
    { path: 'ai', loadChildren: () => import('./modules/ai/ai.module').then(m => m.AiModule) },
    { path: 'course', loadChildren: () => import('./modules/course/course.module').then(m => m.CourseModule) },
    { path: 'courses', loadChildren: () => import('./modules/course/course.module').then(m => m.CourseModule) },
    { path: 'suppliers', loadChildren: () => import('./modules/supplier/supplier.module').then(m => m.SupplierModule) },
    { path: '', loadChildren: () => import('./modules/nliv/nliv.module').then(m => m.NLIVModule) },
    { path: '**', redirectTo: '404' }
];