import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AiChatComponent } from '../../components/shared/ai-chat/ai-chat.component';
import { UserActionsComponent } from '../../components/shared/user-actions/user-actions.component';
import { GlobalSearchResultsComponent } from '../../components/shared/global-search-results/global-search-results.component';



@NgModule({
  declarations: [
    AiChatComponent,
    UserActionsComponent,
    GlobalSearchResultsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AiChatComponent,
    UserActionsComponent,
    GlobalSearchResultsComponent
  ]
})
export class SharedModule { }
