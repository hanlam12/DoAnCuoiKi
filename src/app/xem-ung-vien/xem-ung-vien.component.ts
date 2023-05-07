import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorkZoneService } from '../work-zone.service';

@Component({
  selector: 'app-xem-ung-vien',
  templateUrl: './xem-ung-vien.component.html',
  styleUrls: ['./xem-ung-vien.component.css']
})
export class XemUngVienComponent {


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
