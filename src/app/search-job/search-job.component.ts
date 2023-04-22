import { Component } from '@angular/core';
import { Job } from 'workzone';

import { WorkZoneService } from '../work-zone.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-search-job',
  templateUrl: './search-job.component.html',
  styleUrls: ['./search-job.component.css']
})
export class SearchJobComponent {
  jobs:any
  errMessage:string=''
  showText = true;
  showText1 = true;
  showText2 = true;
  showText3 = true;
  showText4 = true;

  constructor(private _service:WorkZoneService,private router:Router){
    this._service.getJobs().subscribe({
      next:(data)=>{this.jobs=data},
      error:(err)=>{this.errMessage=err}
    })

  }
  goToCompany(companyId:string):void{
    this.router.navigate(['/companies/'+companyId])
  }
  goToDescription(companyId:string){
    this.router.navigate(['/job-decription/'+companyId])
  }
  toggleText() {
    this.showText = !this.showText;
  }
  toggleText1() {
    this.showText1 = !this.showText1;
  }
  toggleText2() {
    this.showText2 = !this.showText2;
  }
  toggleText3() {
    this.showText3 = !this.showText3;
  }
  toggleText4() {
    this.showText4 = !this.showText4;
  }
  getAll(){
    this._service.getJobs().subscribe({
      next:(data)=>{this.jobs=data},
      error:(err)=>{this.errMessage=err}
      })
  }
  getNhanVien(){
    this._service.getNhanVien(this.jobs).subscribe({
      next:(data)=>{this.jobs=data},
      error:(err)=>{this.errMessage=err}
      })
  }

  getQuanLy(){
    this._service.getQuanLy(this.jobs).subscribe({
      next:(data)=>{this.jobs=data},
      error:(err)=>{this.errMessage=err}
      })
  }

  getTruongNhom(){
    this._service.getTruongNhom(this.jobs).subscribe({
      next:(data)=>{this.jobs=data},
      error:(err)=>{this.errMessage=err}
      })
  }

  getQLGS(){
    this._service.getQLGS(this.jobs).subscribe({
      next:(data)=>{this.jobs=data},
      error:(err)=>{this.errMessage=err}
      })
  }

  getTruongPhong(){
    this._service.getTruongPhong(this.jobs).subscribe({
      next:(data)=>{this.jobs=data},
      error:(err)=>{this.errMessage=err}
      })
  }

  getTNGS(){
    this._service.getTNGS(this.jobs).subscribe({
      next:(data)=>{this.jobs=data},
      error:(err)=>{this.errMessage=err}
      })
  }

  getVuaTN(){
    this._service.getVuaTN(this.jobs).subscribe({
      next:(data)=>{this.jobs=data},
      error:(err)=>{this.errMessage=err}
      })
  }

  getXayDung(){
    this._service.getXayDung(this.jobs).subscribe({
      next:(data)=>{this.jobs=data},
      error:(err)=>{this.errMessage=err}
      })
  }
  getKiemToan(){
    this._service.getKiemToan(this.jobs).subscribe({
      next:(data)=>{this.jobs=data},
      error:(err)=>{this.errMessage=err}
      })
  }

  getQC(){
    this._service.getQC(this.jobs).subscribe({
      next:(data)=>{this.jobs=data},
      error:(err)=>{this.errMessage=err}
      })
  }

  getNHKS(){
    this._service.getNHKS(this.jobs).subscribe({
      next:(data)=>{this.jobs=data},
      error:(err)=>{this.errMessage=err}
      })
  }

  getDVKH(){
    this._service.getDVKH(this.jobs).subscribe({
      next:(data)=>{this.jobs=data},
      error:(err)=>{this.errMessage=err}
      })
  }

  getBHKD(){
    this._service.getBHKD(this.jobs).subscribe({
      next:(data)=>{this.jobs=data},
      error:(err)=>{this.errMessage=err}
      })
  }

  getOTO(){
    this._service.getOTO(this.jobs).subscribe({
      next:(data)=>{this.jobs=data},
      error:(err)=>{this.errMessage=err}
      })
  }

  getDT(){
    this._service.getDT(this.jobs).subscribe({
      next:(data)=>{this.jobs=data},
      error:(err)=>{this.errMessage=err}
      })
  }

  getBL(){
    this._service.getBL(this.jobs).subscribe({
      next:(data)=>{this.jobs=data},
      error:(err)=>{this.errMessage=err}
      })
  }

  getBH(){
    this._service.getBH(this.jobs).subscribe({
      next:(data)=>{this.jobs=data},
      error:(err)=>{this.errMessage=err}
      })
  }

  getMT(){
    this._service.getMT(this.jobs).subscribe({
      next:(data)=>{this.jobs=data},
      error:(err)=>{this.errMessage=err}
      })
  }

  getGD(){
    this._service.getGD(this.jobs).subscribe({
      next:(data)=>{this.jobs=data},
      error:(err)=>{this.errMessage=err}
      })
  }

  getTC(){
    this._service.getTC(this.jobs).subscribe({
      next:(data)=>{this.jobs=data},
      error:(err)=>{this.errMessage=err}
      })
  }

  getNH(){
    this._service.getNH(this.jobs).subscribe({
      next:(data)=>{this.jobs=data},
      error:(err)=>{this.errMessage=err}
      })
  }

  getCNTT(){
    this._service.getCNTT(this.jobs).subscribe({
      next:(data)=>{this.jobs=data},
      error:(err)=>{this.errMessage=err}
      })
  }

  getTT(){
    this._service.getTT(this.jobs).subscribe({
      next:(data)=>{this.jobs=data},
      error:(err)=>{this.errMessage=err}
      })
  }

  getIT(){
    this._service.getIT(this.jobs).subscribe({
      next:(data)=>{this.jobs=data},
      error:(err)=>{this.errMessage=err}
      })
  }

  getTV(){
    this._service.getTV(this.jobs).subscribe({
      next:(data)=>{this.jobs=data},
      error:(err)=>{this.errMessage=err}
      })
  }


}
