import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedUIComponent } from '../../components/ai/shared-ui/shared-ui.component';

const routes: Routes = [
  { path: '', component: SharedUIComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AiRoutingModule { }