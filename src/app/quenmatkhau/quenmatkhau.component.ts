import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WorkZoneService } from '../work-zone.service';


@Component({
  selector: 'app-quenmatkhau',
  templateUrl: './quenmatkhau.component.html',
  styleUrls: ['./quenmatkhau.component.css']
})
export class QuenmatkhauComponent {
  user:any
  errMessage:String=''
  constructor(private router: Router,private _S:WorkZoneService){}
  openPage(email:string){
    this._S.findUser(email).subscribe({
      next:(data)=>{
        if (data.message === 'User not found') {
          this.errMessage = "User not found";
        }
        else
        this.router.navigate(['quenmatkhau1']);
      },
      error :()=>{this.errMessage="User not found"}
    })
  }
}
