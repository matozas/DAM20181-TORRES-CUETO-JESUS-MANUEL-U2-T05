
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserService } from '../../services/user';
import { WelcomePage } from './../welcome/welcome';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user:any={
    curp:'',
  }

  constructor(public navCtrl: NavController, public userSrv:UserService) {
    this.userSrv.curp="";
  }

  saveUser():void{
    if(this.user.curp.substring(10,11)==='H' || this.user.curp.substring(10,11)==='M'){
      this.userSrv.curp=this.user.curp;
      this.navCtrl.push(WelcomePage);
    }
  }

}
