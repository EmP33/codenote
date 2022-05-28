import { Box } from "@mui/material";

const DraftElement: React.FC = () => {
  return (
    <Box
      sx={{
        padding: 3,
        background: "var(--color-tertiary-light)",
        fontSize: 20,
        minHeight: 200,
        overflow: "auto",
        borderRadius: 1,
      }}
    >
      Type your thoughts here...
    </Box>
  );
};

export default DraftElement;
