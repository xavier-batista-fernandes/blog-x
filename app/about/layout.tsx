import "@/app/globals.css";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-lime-700 w-1/2">
        {children}
    </div>
  );
}
