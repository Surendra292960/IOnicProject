import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SearchPage } from '../pages/search/search';
import { MapPage } from '../pages/map/map';
import { RequisitionPage } from '../pages/requisition/requisition';
import { TicketsPage } from '../pages/tickets/tickets';
import { SignOutPage } from '../pages/sign-out/sign-out';
import { SettingPage } from '../pages/setting/setting';
import { ManualPage } from '../pages/manual/manual';
import { CollaborationPage } from '../pages/collaboration/collaboration';
import { ELogPage } from '../pages/e-log/e-log';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SearchPage,
    MapPage,
    RequisitionPage,
    TicketsPage,
    SignOutPage,
    SettingPage,
    ManualPage,
    CollaborationPage,ELogPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,SearchPage,MapPage,RequisitionPage,TicketsPage,SignOutPage,SettingPage,
    ManualPage,CollaborationPage,ELogPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
