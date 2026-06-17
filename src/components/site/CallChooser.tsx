import { Phone } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { DOCTOR_CONTACTS } from "./contacts";

export function CallChooser() {
  return (
    <Popover>
      <PopoverTrigger className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full border border-burgundy/40 px-7 py-[0.95rem] text-sm tracking-[0.06em] text-burgundy transition-all duration-300 hover:border-burgundy hover:bg-burgundy hover:text-white data-[state=open]:border-burgundy data-[state=open]:bg-burgundy data-[state=open]:text-white sm:w-auto">
        <Phone
          size={16}
          strokeWidth={1.6}
          className="transition-transform duration-300 group-hover:rotate-12"
        />
        Call
      </PopoverTrigger>
      <PopoverContent
        align="start"
        sideOffset={10}
        className="w-[min(20rem,calc(100vw-2rem))] overflow-hidden rounded-2xl border-border bg-white p-2 shadow-xl shadow-burgundy/15"
      >
        {DOCTOR_CONTACTS.map((d) => (
          <a
            key={d.phone}
            href={`tel:${d.phone}`}
            className="flex items-center gap-3 rounded-xl px-3 py-3 transition-colors hover:bg-burgundy/[0.06]"
          >
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-burgundy/10 text-burgundy">
              <Phone size={16} strokeWidth={1.7} />
            </span>
            <span className="min-w-0">
              <span className="block text-sm font-medium text-ink">{d.name}</span>
              <span className="block text-xs text-muted-foreground">
                {d.specialty} · {d.phoneDisplay}
              </span>
            </span>
          </a>
        ))}
      </PopoverContent>
    </Popover>
  );
}
