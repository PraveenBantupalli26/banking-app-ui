import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Account, PaymentOrder } from '../account.model';
import { DashboardDataService } from '../dashboard-data';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [DashboardDataService]
})
export class DashboardComponent implements OnInit {
  accounts: Account[] = [];
  paymentOrders: PaymentOrder[] = [];

  constructor(private dashboardDataService: DashboardDataService) { }

  ngOnInit(): void {
    this.dashboardDataService.getAccounts().subscribe(data => {
      this.accounts = data;
    });

    this.dashboardDataService.getPaymentOrders().subscribe(data => {
      this.paymentOrders = data;
    });
  }
}