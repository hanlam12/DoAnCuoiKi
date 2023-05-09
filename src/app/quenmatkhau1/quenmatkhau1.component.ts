import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { WorkZoneService } from '../work-zone.service';
@Component({
  selector: 'app-quenmatkhau1',
  templateUrl: './quenmatkhau1.component.html',
  styleUrls: ['./quenmatkhau1.component.css']
})
export class Quenmatkhau1Component {
  email:string='';
  errMessage:string='';
  user:any
  constructor(private router: Router, private _S:WorkZoneService, private route: ActivatedRoute){
    this.route.params.subscribe(
      (params: Params) => {
         this.email = params['email'];
      }
   );
   this._S.findUser(this.email).subscribe({
    next:(data)=>{
      this.user=data
    },
    error:(err)=>{this.errMessage=err}
    })
  }
  openPage(){
    this.router.navigate(['quenmatkhau3',this.email])
  }
  goBack(){
    this.router.navigate(['quenmatkhau']);
}
}
