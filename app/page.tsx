import { redirect } from "next/navigation";

export default function Home() {
  // The exported deliverable is the Lending intelligence page.
  redirect("/lending-intelligence");
}
