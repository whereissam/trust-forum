"use client";

import Header from "@/components/Header";

export default function DefeaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      <div className="px-3">{children}</div>
    </div>
  );
}
