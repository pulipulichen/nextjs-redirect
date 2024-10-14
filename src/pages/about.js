import { useRouter } from 'next/router';

export async function getStaticProps() {
  // This function can be left empty if you don't need to fetch data
  return {
    props: {},
  };
}

export default function Blog() {
  const router = useRouter();

  useEffect(() => {
    router.push('https://blog.pulipuli.info/');
  }, []);

  // You can remove this content if you don't want anything displayed on the `/blog` page
  return (
    <div>
      {/* This content will not be displayed due to the redirect */}
      Redirecting to blog.pulipuli.info...
    </div>
  );
}