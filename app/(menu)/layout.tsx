import Footer from "@/components/ui/footer";

export default function MenuLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="w-full grow py-4 mt-20">
        {children}
      </main>
      <Footer />
    </>
  );
}
