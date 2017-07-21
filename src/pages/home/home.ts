import { QuestionsPage } from '../questions/questions';
import { DifficultyPage } from '../difficulty/difficulty';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }


  GoToDifficulty() {
    this.navCtrl.push(DifficultyPage);
  }

  GoToQuestions() {
    this.navCtrl.push(QuestionsPage);
  }

}
