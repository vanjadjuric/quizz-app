import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the QuizzPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-quizz',
  templateUrl: 'quizz.html',
})
export class QuizzPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.navParams.get('chooseDifficulty');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuizzPage');
  }

}
