import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'News Global',
      url: '/news',
      icon: 'globe'
    },
    {
      title: 'Indian News',
      url: '/indian',
      icon: 'home'
    },
    {
      title: 'Sports',
      url: '/sports',
      icon: 'tennisball'
    },
    {
      title: 'Entertainment',
      url: '/entertainment',
      icon: 'glasses'
    },
    {
      title: 'Science',
      url: '/science',
      icon: 'flash'
    },
    {
      title: 'About Us',
      url: '/list',
      icon: 'contact'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
