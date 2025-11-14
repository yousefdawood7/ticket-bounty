import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

type CardFormProps = {
  title: string;
  description: string;
  className?: string;

  content: React.ReactNode;
  footer?: React.ReactNode;
};

export default function CardForm({
  title,
  description,
  className,
  content,
  footer,
}: CardFormProps) {
  return (
    <Card className={cn(className || "")}>
      <CardHeader>
        <CardTitle className="text-3xl tracking-tight">{title}</CardTitle>
        <CardDescription className="text-xl">{description}</CardDescription>
      </CardHeader>
      <CardContent>{content}</CardContent>
      {footer && <CardFooter>{footer}</CardFooter>}
    </Card>
  );
}
