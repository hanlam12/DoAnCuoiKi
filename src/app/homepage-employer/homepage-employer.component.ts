import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { WorkZoneService } from '../work-zone.service';
import { Company } from 'workzone';

@Component({
  selector: 'app-homepage-employer',
  templateUrl: './homepage-employer.component.html',
  styleUrls: ['./homepage-employer.component.css']
})
export class HomepageEmployerComponent {
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
  companyId: string =''
  company_image: string =''
  companyIntro: string =''
  companyScale: string =''
  companyAddress: string =''
  companyweb: string =''
  companyData: any
  errMessage:string='';

  constructor(
    private route: ActivatedRoute,
    private companyService: WorkZoneService,
    private router:Router
  ) {
    this.route.params.subscribe(
      (params: Params) => {
         this.companyId = params['company_id'];
      }
   );

    this.companyService.getCompany(this.companyId).subscribe({
    next:(data)=>{this.companyData=data},
    error:(err)=>{this.errMessage=err}
    })

  }

  ngOnInit(): void {
    // Your code here
  }

  company = new Company()
  onFileSelectedPutCompany(event:any,company:Company) {
    let me = this;
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload =  () =>{
      this.company.company_image = reader.result as string;
    };
    reader.onerror = function (error) {
    console.log('Error: ', error);
    };
    };
    onUpdateCompany(): void {
      this.companyService.updateCompany(this.companyId, this.company.company_image, this.companyIntro, this.companyScale, this.companyAddress, this.companyweb)
        .subscribe(
          response => {
            console.log(response);
            alert('Company updated successfully!');
            this.router.navigate(['/companies/',this.companyId])
          },
          error => {
            console.error(error);
            alert('Error occurred while updating company!');
          }
        );
    }
}




