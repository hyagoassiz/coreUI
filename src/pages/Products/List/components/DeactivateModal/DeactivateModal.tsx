import { Button, Typography } from "@mui/material";
import { Modal } from "../../../../../components/Modal";
import { useDeactivateModal } from "./hooks/useDeactivateModal";
import { IDeactivateModalProps } from "./interfaces";

export const DeactivateModal: React.FC<IDeactivateModalProps> = ({
  open,
  product,
  onClose,
}) => {
  const { submit } = useDeactivateModal({
    onClose,
    product,
  });

  return (
    <Modal
      open={open}
      style={{ width: "300px", height: "auto", minWidth: 480 }}
      title="Deseja inativar este produto?"
      buttons={
        <>
          <Button variant="text" onClick={onClose}>
            Fechar
          </Button>
          <Button variant="contained" onClick={submit}>
            Inativar
          </Button>
        </>
      }
    >
      <Typography color="textPrimary" align="justify">
        Inativando este produto, ele não poderá ser usado em novas
        movimentações. O histórico será mantido e você poderá reativá-lo
        filtrando pelos inativos.
      </Typography>
    </Modal>
  );
};
