export interface Account{
    bank: string;
    currency: string;
    balance: number;
    lastUpdated: string;
    isInactive?: boolean;

}

export interface PaymentOrder{
    orderId: string;
    processingDate: string;
    status: string;
    amount: number;
}