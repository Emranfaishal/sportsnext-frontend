import SportAllData from "@/componets/SportAllData";
import SportBanner from "@/componets/SportBanner";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <SportBanner></SportBanner>
      <SportAllData></SportAllData>
    </div>
  );
}
