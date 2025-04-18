export interface InlinePaymentOptions {
  merchantKey: string;
  planId: string;
  encryptionKey: string;
  email: string;
  amount?: number;
  tx_ref?: string;
  currency?: string;
  regionId?: string;
  firstname?: string;
  lastname?: string;
  metadata?: Record<string, any>;
  localCurrency?: string;
  callBackUrl?: string;
  onSuccess?: (_val?: any) => void;
  onClose?: () => void;
}

export type SpotflowCheckoutProps = {
  merchantKey: string;
  encryptionKey: string;
  planId: string;
  regionId?: string;
  email: string;
  phone?: string;
  amount?: number;
  currency?: string;
  onSuccess?: (_val?: any) => void;
  onClose?: () => void;
  reference?: string;
  firstname?: string;
  lastname?: string;
  metadata?: Record<string, any>;
  localCurrency?: string;
  callBackUrl?: string;
  onTransferConfirmationPending?: (_val?: any) => void;
};
