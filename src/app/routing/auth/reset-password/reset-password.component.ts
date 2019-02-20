import { Component, OnInit } from '@angular/core';
import { ResetPSService } from '../../../core/auth/reset-password.service';
export interface ResetPSInfo{
  password:string;
}
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  password_hide=true;
  password;
  password2;
  resetPending = false;
  constructor(private resetPSService:ResetPSService) { }

  ngOnInit() {
  }
  resetPS(){
    this.resetPending = true;
    this.resetPSService.reset({password:this.password})
    .subscribe(data => {
      this.resetPending = false;

    })
  }
  deletePS2(){
    this.password2 = ''
  }

}
