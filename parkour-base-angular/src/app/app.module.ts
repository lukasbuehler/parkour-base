import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { environment } from "src/environments/environment";
import { keys } from "src/environments/keys";

import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireStorageModule } from "@angular/fire/storage";
import { AngularFireAuthModule } from "@angular/fire/auth";

import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AgmCoreModule } from "@agm/core";

import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatBadgeModule } from "@angular/material/badge";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatCardModule } from "@angular/material/card";
import { MatTabsModule } from "@angular/material/tabs";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatRippleModule } from "@angular/material/core";
import {
  MatDialogModule,
  MAT_DIALOG_DEFAULT_OPTIONS,
} from "@angular/material/dialog";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatSelectModule } from "@angular/material/select";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatListModule } from "@angular/material/list";
import { MatStepperModule } from "@angular/material/stepper";
import { MatDividerModule } from "@angular/material/divider";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatChipsModule } from "@angular/material/chips";
import { MatTableModule } from "@angular/material/table";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";

import { PlyrModule } from "ngx-plyr";
import { AngularResizedEventModule } from "angular-resize-event";

import { HomePageComponent } from "./home-page/home-page.component";
import { MapPageComponent } from "./map-page/map-page.component";
import { NotFoundPageComponent } from "./not-found-page/not-found-page.component";
import { WikiPageComponent } from "./wiki-page/wiki-page.component";
import { PageHeaderComponent } from "./page-header/page-header.component";
import { PostCollectionComponent } from "./post-collection/post-collection.component";
import { PostComponent } from "./post/post.component";
import { SpotCardComponent } from "./spot-card/spot-card.component";
import { SignInPageComponent } from "./sign-in-page/sign-in-page.component";
import { EditPostDialogComponent } from "./edit-post-dialog/edit-post-dialog.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RatingComponent } from "./rating/rating.component";
import { SpotDetailComponent } from "./spot-detail/spot-detail.component";
import { UploadMediaUiComponent } from "./upload-media-ui/upload-media-ui.component";
import { CommunityPageComponent } from "./community-page/community-page.component";
import { AboutPageComponent } from "./about-page/about-page.component";
import { FancyCounterComponent } from "./fancy-counter/fancy-counter.component";
import { KmlImportPageComponent } from "./kml-import-page/kml-import-page.component";
import { ProfilePageComponent } from "./profile-page/profile-page.component";
import { PostPageComponent } from "./post-page/post-page.component";
import { SpeedDialFabComponent } from "./speed-dial-fab/speed-dial-fab.component";
import { RegexInputComponent } from "./regex-input/regex-input.component";
import { WelcomePageComponent } from "./welcome-page/welcome-page.component";
import { SignUpPageComponent } from "./sign-up-page/sign-up-page.component";
import { TermsOfServiceComponent } from "./terms-of-service/terms-of-service.component";
import { PrivacyPolicyComponent } from "./privacy-policy/privacy-policy.component";
import {
  FollowDurationPipe,
  FollowListComponent,
} from "./follow-list/follow-list.component";
import { EditProfileComponent } from "./edit-profile/edit-profile.component";
import { SettingsPageComponent } from "./settings-page/settings-page.component";
import { ServiceWorkerModule } from "@angular/service-worker";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MapPageComponent,
    NotFoundPageComponent,
    WikiPageComponent,
    PageHeaderComponent,
    PostCollectionComponent,
    PostComponent,
    SpotCardComponent,
    SignInPageComponent,
    EditPostDialogComponent,
    RatingComponent,
    SpotDetailComponent,
    UploadMediaUiComponent,
    CommunityPageComponent,
    AboutPageComponent,
    FancyCounterComponent,
    KmlImportPageComponent,
    ProfilePageComponent,
    PostPageComponent,
    SpeedDialFabComponent,
    RegexInputComponent,
    WelcomePageComponent,
    SignUpPageComponent,
    TermsOfServiceComponent,
    PrivacyPolicyComponent,
    FollowListComponent,
    EditProfileComponent,

    FollowDurationPipe,

    SettingsPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,

    NgbModule,
    AngularFireModule.initializeApp(keys.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,

    InfiniteScrollModule,
    AgmCoreModule.forRoot({
      apiKey: keys.google_maps,
    }),

    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatBadgeModule,
    MatTooltipModule,
    MatSidenavModule,
    MatCardModule,
    MatTabsModule,
    MatMenuModule,
    MatIconModule,
    MatInputModule,
    MatRippleModule,
    MatDialogModule,
    MatExpansionModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatAutocompleteModule,
    MatListModule,
    MatStepperModule,
    MatDividerModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatChipsModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,

    PlyrModule,
    AngularResizedEventModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production,
    }),
  ],
  exports: [MatButtonModule],
  providers: [
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: false } },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
