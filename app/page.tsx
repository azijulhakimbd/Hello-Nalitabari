import Image from "next/image";
import { Hero } from "./Home/hero";
import FeaturesPage from "../components/Home/feature";

export default function Home() {
  return (
 <main>
      <Hero />
      <FeaturesPage />
    </main>
  );
}
