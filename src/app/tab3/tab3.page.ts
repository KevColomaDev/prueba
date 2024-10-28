import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  
  public initialDate = '';
  public finalDate = '';
  public days = '';
  
  calculateDays() {
    const initialDate = new Date(this.initialDate);
    const finalDate = new Date(this.finalDate);

    if (isNaN(initialDate.getTime()) || isNaN(finalDate.getTime())) {
      alert('Por favor, ingrese fechas válidas.');
      return;
    }
    
    const diffTime = Math.abs(finalDate.getTime() - initialDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    this.days = diffDays.toString();
  }
  
  clearDates() {
    this.initialDate = '';
    this.finalDate = '';
    this.days = '';
  }
  
  constructor() {}

}
