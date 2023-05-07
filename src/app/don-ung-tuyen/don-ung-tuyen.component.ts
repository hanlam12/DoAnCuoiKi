import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { WorkZoneService } from '../work-zone.service';
import { Company } from 'workzone';

@Component({
  selector: 'app-don-ung-tuyen',
  templateUrl: './don-ung-tuyen.component.html',
  styleUrls: ['./don-ung-tuyen.component.css']
})
export class DonUngTuyenComponent {
  isOn: boolean = true;

  status() {
    this.isOn = !this.isOn;
  }
  infor: boolean = true;
  change_infor: boolean = false;

  changeInfor() {
    this.infor = false;
    this.change_infor = true;
  }
  exit(){
    this.infor = true;
    this.change_infor = false;
  }
  companyId: string ='';
  jobJD: string = '';
  image: string =''
  companyIntro: string =''
  companyScale: string =''
  companyAddress: string =''
  companyweb: string =''
  companyData: any
  errMessage:string='';

  constructor(
    private route: ActivatedRoute,
    private companyService: WorkZoneService
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe(
      (params: any) => {
        this.companyId = params['company_id'];
        this.jobJD = params['jobJD'];
        this.getApplyUserData();
      }
    );
  }

  getApplyUserData() {
    this.companyService.GetApplyUser(this.companyId, this.jobJD)
      .subscribe(
        (data) => {
          this.companyData = data;
        },
        (error) => {
          this.errMessage = error;
        }
      );
  }
}
