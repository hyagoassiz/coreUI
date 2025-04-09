export interface ISnackBar {
  message: string;
  type: "error" | "info" | "success" | "warning";
  open: boolean;
}
