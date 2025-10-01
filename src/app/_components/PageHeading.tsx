import { Separator } from "@/components/ui/separator";

export default function PageHeading({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <aside className="flex flex-col gap-4">
      <article>
        <h2 className="text-3xl font-semibold tracking-tight">{title}</h2>
        <p className="text-muted-foreground">{description}</p>
      </article>
      <Separator />
    </aside>
  );
}
