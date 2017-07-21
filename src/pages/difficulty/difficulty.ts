import { QuizzPage } from '../quizz/quizz';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DifficultyPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-difficulty',
  templateUrl: 'difficulty.html',
})
export class DifficultyPage {
  difficulties: Array<any> = Array<any>();


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.difficulties = ['easy', 'medium', 'hard', 'expert'];
    console.log(this.difficulties);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DifficultyPage');
  }

  GoBack() {
    this.navCtrl.popToRoot();
  }

  StartQuizz(chosenDifficulty) {
    this.navCtrl.push(QuizzPage, chosenDifficulty);
  }


}
