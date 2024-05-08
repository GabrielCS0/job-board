import { Job } from "@prisma/client";
import Image from "next/image";
import { Banknote, Briefcase, Clock, Globe2, MapPin } from "lucide-react";
import { formatMoney, relativeDate } from "@/lib/utils";
import Badge from "./Badge";

type JobListItemProps = { job: Job };

const JobListItem = ({
  job: {
    title,
    companyName,
    type,
    locationType,
    location,
    salary,
    companyLogoUrl,
    createdAt,
  },
}: JobListItemProps) => {
  return (
    <article className="flex gap-3 rounded-lg border p-5 hover:bg-muted/60">
      <Image
        className="self-center rounded-lg"
        src={companyLogoUrl || "company-logo-placeholder.png"}
        alt={`${companyName} logo`}
        width={100}
        height={100}
      />

      <div className="flex-grow space-y-3">
        <div>
          <h2 className="text-lg font-medium">{title}</h2>
          <p className="text-muted-foreground">{companyName}</p>
        </div>
        <div className="text-muted-foreground">
          <p className="flex items-center gap-1.5 sm:hidden">
            <Briefcase className="shrink-0" size={16} />
            {type}
          </p>
          <p className="flex items-center gap-1.5">
            <MapPin className="shrink-0" size={16} />
            {locationType}
          </p>
          <p className="flex items-center gap-1.5">
            <Globe2 className="shrink-0" size={16} />
            {location || "Worldwide"}
          </p>
          <p className="flex items-center gap-1.5">
            <Banknote className="shrink-0" size={16} />
            {formatMoney(salary)}
          </p>
          <p className="flex items-center gap-1.5 sm:hidden">
            <Clock className="shrink-0" size={16} />
            {relativeDate(createdAt)}
          </p>
        </div>
      </div>

      <div className="hidden shrink-0 flex-col items-end justify-between sm:flex">
        <Badge>{type}</Badge>
        <span className="flex items-center gap-1.5 text-muted-foreground">
          <Clock size={16} />
          {relativeDate(createdAt)}
        </span>
      </div>
    </article>
  );
};

export default JobListItem;
