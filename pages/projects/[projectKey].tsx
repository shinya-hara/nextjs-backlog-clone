import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const ProjectHome: NextPage = () => {
  const router = useRouter();
  const { projectKey } = router.query;

  return (
    <div>
      <h1>Project Home</h1>
      <p>projectKey: {projectKey}</p>
    </div>
  );
};

export default ProjectHome;
