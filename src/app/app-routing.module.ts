import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateRoomComponent } from './create-room/create-room.component';
import { HelloUserComponent } from './hello-user/hello-user.component';
import { Hurrey2Component } from './hurrey2/hurrey2.component';
import { JoinRoomComponent } from './join-room/join-room.component';
import { Level1GameComponent } from './level1-game/level1-game.component';
import { Level2GameComponent } from './level2-game/level2-game.component';
import { Level3GameComponent } from './level3-game/level3-game.component';
import { Level4Component } from './level4-game/level4-game.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { Question1AiComponent } from './question1-ai/question1-ai.component';
import { Question2MetaverseComponent } from './question2-metaverse/question2-metaverse.component';
import { Question3BlockchainComponent } from './question3-blockchain/question3-blockchain.component';
import { ResponseComponent } from './response/response.component';
import { ResultComponent } from './result/result.component';
import { ShareCodeComponent } from './share-code/share-code.component';
import { StartGameComponent } from './start-game/start-game.component';
import { UserRoomComponent } from './user-room/user-room.component';

const routes: Routes = [{ path: '', component: Hurrey2Component },
{ path: 'user', component: HelloUserComponent },
{ path: 'userRoom' , component: UserRoomComponent},
{path: 'createRoom', component: CreateRoomComponent},
{path: 'joinRoom', component: JoinRoomComponent},
{path: 'codeRoom', component: ShareCodeComponent},
{path: 'begin', component: StartGameComponent},
{path: 'level1', component: Level1GameComponent},
{path: 'level2', component: Level2GameComponent},
{path: 'level3', component: Level3GameComponent},
{path: 'level4', component: Level4Component},
{path: 'responsePage', component: ResponseComponent},
{path: 'resultPage' , component: ResultComponent},
{path: 'questionPage', component: QuestionListComponent},
{path: 'ai', component: Question1AiComponent},
{path: 'metaverse', component: Question2MetaverseComponent},
{path: 'blockchain', component: Question3BlockchainComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
