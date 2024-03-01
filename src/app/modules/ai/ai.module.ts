import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AiRoutingModule } from './ai-routing.module';

import { ChatBarComponent } from '../../components/ai/chat-bar/chat-bar.component';
import { HistoryComponent } from '../../components/ai/history/history.component';
import { ResultsComponent } from '../../components/ai/results/results.component';
import { SettingsComponent } from '../../components/ai/settings/settings.component';
import { SharedUIComponent } from '../../components/ai/shared-ui/shared-ui.component';

@NgModule({
  declarations: [
    ChatBarComponent,
    HistoryComponent,
    ResultsComponent,
    SettingsComponent,
    SharedUIComponent
  ],
  imports: [
    CommonModule,
    AiRoutingModule
  ]
})
export class AiModule { }