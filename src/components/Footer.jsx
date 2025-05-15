import { Box, Typography } from '@mui/material';

function Footer() {
  return (
    <Box sx={{ textAlign: 'center', py: 5, mt: 5 }}>
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} Renato Rocha Ferreira. All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;
