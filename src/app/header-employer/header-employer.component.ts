import { Component } from '@angular/core';
import { WorkZoneService } from '../work-zone.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header-employer',
  templateUrl: './header-employer.component.html',
  styleUrls: ['./header-employer.component.css']
})
export class HeaderEmployerComponent {
  public company_name: string='';
  empID:string=''
  isLeftDefault = false;
  menu() {
    this.isLeftDefault = !this.isLeftDefault;
  }

  isDisplaynone = true;
  menupc() {
    this.isDisplaynone = !this.isDisplaynone;
  }

  constructor(private login: WorkZoneService, private router:Router) {
    const empID = localStorage.getItem('empID');
    if (empID) {
      this.empID = empID;
    }
  }
  ngOnInit() {
    this.login.getEmpName().subscribe(data => {
      this.company_name = data;

    });
  }
  get loggedIn(): boolean {
    return this.login.isLoggedInEmp();
  }
  logout(){
  return this.login.logoutEmp()
}
quanly(){
  this.router.navigate(['/homepageEmployer/'+this.empID])

}
payment(){
  this.router.navigate(['payment'])
}
}
