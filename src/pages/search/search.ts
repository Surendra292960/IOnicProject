import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  items;
  toggled: boolean;
  
  private isOn: boolean = false;
  public isSearchbarOpend = false;

  constructor(public navCtrl:NavController){

  }

  onCancel(event){}
  public toggle(): void{
    this.toggled = this.toggled ? false : true;
  }

  
 getButtonText(): string {
   return `Switch ${ this.isOn ? 'Off' : 'On' }`;
 }
 setState(): void {
   this.isOn = !this.isOn;
 }

toggleDetails() {
   this.isOn = !this.isOn;
 }
}