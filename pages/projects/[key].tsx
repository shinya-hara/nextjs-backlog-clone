import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const ProjectHome: NextPage = () => {
  const router = useRouter();
  const { key } = router.query;

  return (
    <div>
      <h1>Project Home</h1>
      <p>key: {key}</p>
    </div>
  );
};

export default ProjectHome;
