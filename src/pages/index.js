// import Link from "next/link";
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  // Use useEffect to redirect on component mount
  useEffect(() => {
    router.push('https://blog.pulipuli.info/');
  }, []);

  // You can remove this content if you don't want anything displayed on the home page
  // return (
  //   <div>
  //     {/* This content will not be displayed due to the redirect */}
  //     Hello World.{" "}
  //     <Link href="/about">
  //       About
  //     </Link>
  //   </div>
  // );
}
