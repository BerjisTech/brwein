import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AiChatComponent } from '../../components/shared/ai-chat/ai-chat.component';
import { UserActionsComponent } from '../../components/shared/user-actions/user-actions.component';
import { GlobalSearchComponent } from '../../components/nliv/global-search/global-search.component';



@NgModule({
  declarations: [
    AiChatComponent,
    UserActionsComponent,
    GlobalSearchComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AiChatComponent,
    UserActionsComponent,
    GlobalSearchComponent
  ]
})
export class SharedModule { }
