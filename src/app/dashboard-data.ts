import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Account, PaymentOrder } from './account.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardDataService {

  constructor() { }

  getAccounts(): Observable<Account[]> {
    const mockAccounts: Account[] = [
      { bank: 'Virtual Wallet', currency: 'CAD', balance: 9999999.00, lastUpdated: 'Jun 26 2025 @ 12:56pm' },
      { bank: 'Virtual Wallet', currency: 'USD', balance: 0.00, lastUpdated: 'Jun 26 2025 @ 12:56pm' },
      { bank: 'ACH Debit Account', currency: 'N/A', balance: 367268729.75, lastUpdated: 'Jun 26 2025 @ 12:56pm' },
      { bank: 'Inactive account', currency: 'N/A', balance: 13034.56, lastUpdated: 'Jun 26 2025 @ 12:56pm', isInactive: true }
    ];
    return of(mockAccounts);
  }

  getPaymentOrders(): Observable<PaymentOrder[]> {
    const mockOrders: PaymentOrder[] = [
      { orderId: '1053831', processingDate: 'Nov 08 2024', status: 'In-progress', amount: 1.50 },
      { orderId: '1053820', processingDate: 'Nov 04 2024', status: 'In-progress', amount: 1.50 },
      { orderId: '1053841', processingDate: 'Oct 07 2024', status: 'In-progress', amount: 26.50 },
      { orderId: '1053828', processingDate: 'Sep 04 2024', status: 'In-progress', amount: 1.50 },
      { orderId: '1053827', processingDate: 'Sep 02 2024', status: 'In-progress', amount: 1.50 },
      { orderId: '1053183', processingDate: 'Jun 26 2024', status: 'In-progress', amount: 1.50 },
    ];
    return of(mockOrders);
  }
}