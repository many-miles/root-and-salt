import { faqs } from "@/data/faqs";
import { Accordion } from "@/components/ui/Accordion";

export function FAQ() {
  return <Accordion items={faqs} />;
}
