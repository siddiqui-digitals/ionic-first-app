import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Notification',
      url: '/notification',
      icon: 'notifications-outline'
    },
    {
      title: 'Definition',
      children: [
        {
          title: 'Add New Banks',
          url: '/addbank',
          icon: 'add'
        },
        {
          title: 'Add New Customers',
          url: '/notification',
          icon: 'add'
        },
        {
          title: 'Add New Suppliers',
          url: '/notification',
          icon: 'add'
        },
      ],
      icon: 'settings'
    },
    {
      title: 'Purchase',
      url: '/purchase',
      icon: 'cart'
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
