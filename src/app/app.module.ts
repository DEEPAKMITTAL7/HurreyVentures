import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Hurrey2Component } from './hurrey2/hurrey2.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HelloUserComponent } from './hello-user/hello-user.component';
import { UserRoomComponent } from './user-room/user-room.component';
import { CreateRoomComponent } from './create-room/create-room.component';
import { JoinRoomComponent } from './join-room/join-room.component';
import { ShareCodeComponent } from './share-code/share-code.component';
import { StartGameComponent } from './start-game/start-game.component';
import { SelectWordComponent } from './select-word/select-word.component';
import {ProgressBarModule} from 'primeng/progressbar';
import { Level1GameComponent } from './level1-game/level1-game.component';
import { Level2GameComponent } from './level2-game/level2-game.component';
import { Level3GameComponent } from './level3-game/level3-game.component';
import { Level4Component } from './level4-game/level4-game.component';
import { ResponseComponent } from './response/response.component';
import { ResultComponent } from './result/result.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { DropdownModule } from 'primeng/dropdown';
import { Question1AiComponent } from './question1-ai/question1-ai.component';
import { Question2MetaverseComponent } from './question2-metaverse/question2-metaverse.component';
import { Question3BlockchainComponent } from './question3-blockchain/question3-blockchain.component';

@NgModule({
  declarations: [
    AppComponent,
    Hurrey2Component,
    HelloUserComponent,
    UserRoomComponent,
    CreateRoomComponent,
    JoinRoomComponent,
    ShareCodeComponent,
    StartGameComponent,
    SelectWordComponent,
    Level1GameComponent,
    Level2GameComponent,
    Level3GameComponent,
    Level4Component,
    ResponseComponent,
    ResultComponent,
    QuestionListComponent,
    Question1AiComponent,
    Question2MetaverseComponent,
    Question3BlockchainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ProgressBarModule,
    DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }