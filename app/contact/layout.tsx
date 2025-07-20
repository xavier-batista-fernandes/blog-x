import "@/app/globals.css";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-sky-600 w-1/2">
        {children}
    </div>
  );
}
