import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NeedridePage } from './needride';

@NgModule({
  declarations: [
    NeedridePage,
  ],
  imports: [
    IonicPageModule.forChild(NeedridePage),
  ],
})
export class NeedridePageModule {}
