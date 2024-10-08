import Icon from "@/components/shared/icon";
import Header from "../_components/header";
import TabHeader from "./_components/header";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <TabHeader>{children}</TabHeader>
    </>
  );
}
