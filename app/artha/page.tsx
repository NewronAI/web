import type { Metadata } from "next";
import ArthaPage from "./artha-page";

export const metadata: Metadata = {
  title: "ArthaLM — Document intelligence, on your terms | Newron",
  description: "From fragmented data to actionable frontier intelligence which you can self host. Meet ArthaLM, Newron’s document intelligence models for BFSI and regulated industries.",
};

export default function Page() {
  return <ArthaPage />;
}
