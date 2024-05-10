import { Metadata } from "next";
import React from "react";
import { ClerkProvider } from "@clerk/nextjs";
import AdminNavbar from "./AdminNavbar";

export const metadata: Metadata = { title: "admin" };

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <AdminNavbar />
      {children}
    </ClerkProvider>
  );
}
