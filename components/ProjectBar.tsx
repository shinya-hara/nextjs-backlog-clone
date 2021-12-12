import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const ProjectBar = ({ projectName, projectKey }: { projectName: string; projectKey: string }) => {
  return (
    <AppBar position="static" sx={{ color: '#333', background: '#fff' }} elevation={0}>
      <Toolbar variant="dense">
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {projectName} ({projectKey})
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default ProjectBar;
