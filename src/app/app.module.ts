import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';


import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,AngularFireDatabaseModule,
AngularFireModule.initializeApp({
  apiKey: "AIzaSyBN8p4isLpUDF2EJqIYR-8BeXoQ8k5bPeY",
    authDomain: "agenda2-7936a.firebaseapp.com",
    databaseURL: "https://agenda2-7936a.firebaseio.com",
    projectId: "agenda2-7936a",
    storageBucket: "agenda2-7936a.appspot.com",
    messagingSenderId: "1090468299471",
    appId: "1:1090468299471:web:6b5dcb572eb78495"
}), 


  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
