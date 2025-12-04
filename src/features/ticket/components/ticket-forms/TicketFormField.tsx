import { useId } from "react";
import { Label } from "@/components/ui/label";

type TicketFormFieldProps = {
  id?: string;
  label?: string;
  type?: string;
  name: string;
  FieldComponent:
    | React.FC<React.ComponentProps<"input">>
    | React.FC<React.ComponentProps<"textarea">>;
  error?: Record<string, string[]>;
  defaultValue?: string | number;
};

export default function TicketFormField({
  id,
  type,
  label,
  name,
  error,
  defaultValue,
  FieldComponent,
}: TicketFormFieldProps) {
  const reactID = useId();
  const errorValue = error?.[name]?.[0];

  id ??= reactID;

  return (
    <>
      {label && (
        <Label htmlFor={id} className="text-xl">
          {label}
        </Label>
      )}

      <FieldComponent
        name={name}
        type={type || "text"}
        id={id}
        defaultValue={defaultValue || ""}
      />
      {errorValue && <span className="text-destructive">{errorValue}</span>}
    </>
  );
}
