import { Component } from '@angular/core';

@Component({
  selector: 'app-thong-bao-viec-lam',
  templateUrl: './thong-bao-viec-lam.component.html',
  styleUrls: ['./thong-bao-viec-lam.component.css']
})
export class ThongBaoViecLamComponent {
  currentDate: Date = new Date();
  isDisplaynone = true;
  selectedRowItem: string = '';

  myFunction(rowItem: string) {
    if (this.selectedRowItem === rowItem) {
      this.selectedRowItem = '';
    } else {
      this.selectedRowItem = rowItem;
    }
  }
}
