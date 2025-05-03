export interface ISaleModalProps {
  open: boolean;
  sale: ISaleResponseApi | null;
  onClose(): void;
}
