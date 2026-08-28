import Image from "next/image";
import { Hero } from "./Home/hero";
import FeaturesPage from "../components/Home/feature";
import { LatestNews } from "../components/Home/LatestNews";



export default function Home() {
  return (
 <main>
      <Hero />
      <FeaturesPage />
      <LatestNews />
    </main>
  );
}
