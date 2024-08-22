import { Box } from "@mui/material";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box my={6} mx={2}>
      {children}
    </Box>
  );
};

export default Layout;
