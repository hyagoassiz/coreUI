import { CircularProgress as MuiCircularProgress } from "@mui/material";
import { StyledBox } from "./styles";
import { useCircularProgress } from "./hooks/useCircularProgress";

export const CircularProgress: React.FC = () => {
  const { loading } = useCircularProgress();

  return (
    <>
      {loading ? (
        <StyledBox>
          <MuiCircularProgress size={60} color="secondary" />
        </StyledBox>
      ) : null}
    </>
  );
};
