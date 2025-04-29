export interface IProductModalProps {
  open: boolean;
  product: IProductResponseApi | null;
  onClose(): void;
}
