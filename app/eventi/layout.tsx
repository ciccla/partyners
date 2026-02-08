import type { ReactNode } from "react";

export const metadata = {
  title: "Eventi | Partyners",
  description:
    "Eventi privati, compleanni, eventi aziendali, animazione e allestimenti. Scopri tutte le soluzioni Partyners.",
};

export default function Layout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}
