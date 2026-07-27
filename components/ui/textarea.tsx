import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex field-sizing-content min-h-24 w-full rounded-none border-b border-input bg-transparent py-2 text-base transition-colors outline-none",
        "placeholder:text-current/75",
        "focus-visible:border-b-2",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        // "aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
