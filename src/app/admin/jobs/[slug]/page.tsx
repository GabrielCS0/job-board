import JobPage from "@/components/JobPage";
import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import AdminSidebar from "./AdminSidebar";

type PageProps = {
  params: { slug: string };
};

const Page = async ({ params: { slug } }: PageProps) => {
  const job = await prisma.job.findUnique({
    where: { slug },
  });

  if (!job) return notFound();

  return (
    <main className="m-auto my-10 flex max-w-5xl flex-col items-center gap-5 px-3 md:flex-row md:items-start">
      <JobPage job={job} />
      <AdminSidebar job={job} />
    </main>
  );
};

export default Page;
