import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CatManagerBase } from '../models/CatManagerBase';
import { CatsManager } from '../models/CatsManager';
import { VoteComponent } from './vote/vote.component';
import { CatService } from '../services/CatService';
import { EloScoreService } from '../services/EloScoreService';
import { CatServiceBase } from '../services/CatServiceBase';
import { ScoreServiceBase } from '../services/ScoreServiceBase';
import { ScoreComponent } from './score/score.componenet';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        AppComponent,
        VoteComponent,
        ScoreComponent,
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
        HttpClientModule,
        FormsModule,
        MatProgressSpinnerModule,
        RouterModule.forRoot([
            { path: '', component: VoteComponent, pathMatch: 'full' },
            { path: 'score', component: ScoreComponent }
        ]),
        BrowserAnimationsModule
    ],
    providers: [
        CatService,
        { provide: CatServiceBase, useClass: CatService },
        { provide: ScoreServiceBase, useClass: EloScoreService },
        { provide: CatManagerBase, useClass: CatsManager }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
