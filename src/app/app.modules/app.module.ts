import { AngularFireModule } from '@angular/fire/compat';
import { environment } from "../../environments/environment";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
import { FormsModule } from '@angular/forms';
import {AppRoutingModule} from "./app.routing.module";
import {CoreModule} from "../core/core.modules/core.module";
import {FeatureModule} from "../features/features.modules/feature.module";
import {WildcardRoutingModule} from "./wildcard.routing.module";
import {FeedStoreService} from "../features/components/feedback/feedback.services/feed-store.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule,
    CoreModule,
    FeatureModule,
    WildcardRoutingModule,
    HttpClientModule
  ],
  providers: [FeedStoreService],
  bootstrap: [AppComponent]
})

export class AppModule {

}
