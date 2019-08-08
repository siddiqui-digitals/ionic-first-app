import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddbankPage } from './addbank.page';
import { AddnewPageModule } from './addnew/addnew.module';

const routes: Routes = [
  {
    path: '',
    component: AddbankPage,
    children: [
      {
        path: 'addnew',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./addnew/addnew.module').then(m => m.AddnewPageModule)
          }
        ]
      },
      {
        path: 'addnew/:id',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./addnew/addnew.module').then(m => m.AddnewPageModule)
          }
        ]
      },
      {
        path: 'viewall',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./viewall/viewall.module').then(m => m.ViewallPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/addbank/addnew',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/addbank/addnew',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddbankPage]
})
export class AddbankPageModule {}
