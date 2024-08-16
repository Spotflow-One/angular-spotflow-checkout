export interface InlinePaymentOptions {
  merchantKey: string;
  planId: string;
  encryptionKey: string;
  email: string;
  amount?: number;
  tx_ref?: string;
}
