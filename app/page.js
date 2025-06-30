import Image from "next/image";

export default function Home() {
  return (
    <div>hi</div>
  );
}
export function generateMetadata() {
  return {
    title: "Home",
    description: "This is home page",
  };
}