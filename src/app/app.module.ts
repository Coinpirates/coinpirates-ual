import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginEOSModule } from '../../projects/login-eos/src/lib/login-eos.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    LoginEOSModule.forRoot({
      appName: 'test jungle3',
      httpEndpoint: 'https://jungle3.cryptolions.io',
      chain: '2a02a0053e5a8cf73a56ba0fda11e4d92e0238a4a2aa74fccf46d5a910746840',
      verbose: false,
      blockchain: 'eos',
      host: 'jungle3.cryptolions.io',
      port: 443,
      protocol: 'https',
      expireInSeconds: 30
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
