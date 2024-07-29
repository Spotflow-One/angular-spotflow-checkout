export interface InlinePaymentOptions {
  merchantKey: string;
  planId?: string;
  email: string;
  amount?: number;
  tx_ref?: string;
  currency?: string;
}
