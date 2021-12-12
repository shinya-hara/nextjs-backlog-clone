import { Grid, Box, Container } from '@mui/material';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import ProjectBar from '../../components/ProjectBar';

const ProjectHome: NextPage = () => {
  const router = useRouter();
  const projectKey = router.query.projectKey as string;

  return (
    <>
      <ProjectBar projectName="PROJECT NAME" projectKey={projectKey} />
      <Container maxWidth={false} sx={{ py: 3 }}>
        <Grid container spacing={2}>
          <Grid item>
            <h1>Project Home</h1>
            <p>projectKey: {projectKey}</p>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ProjectHome;
