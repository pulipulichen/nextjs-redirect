import { useEffect } from 'react';

export default function About() {
  useEffect(() => {
    window.location.href = "https://blog.pulipuli.info";
  }, []);

  // return <div>Redirecting...</div>;
}