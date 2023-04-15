import { Component, AfterViewInit, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as L from 'leaflet';
import { Company } from 'workzone';
import { WorkZoneService } from '../work-zone.service';

@Component({
  selector: 'app-congty',
  templateUrl: './congty.component.html',
  styleUrls: ['./congty.component.css']
})
export class CongtyComponent implements OnInit {


  

  company: Company | undefined;

  constructor(
    private route: ActivatedRoute,
    private companyService: WorkZoneService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.companyService.getCompany(id).subscribe(company => {
        this.company = company;
      });
    }
  }


  
}
