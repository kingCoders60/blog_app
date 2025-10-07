import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { PlusIcon } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "./ui/accordion";
const items = [
  {
    id: "1",
    title: "What makes our Blogs different?",
    content:
      "Blogs is a fully open-source, developer-first library built using React.js and TailwindCSS, designed to help you launch your Blogs in record time.",
  },
  {
    id: "2",
    title: "What is Blogs and how does it work?",
    content:
      "Blogs is a modern publishing platform where writers can share their ideas, tutorials, and stories with a global audience. Readers can follow their favorite authors, leave comments, and engage with content across multiple topics.",
  },
  {
    id: "3",
    title: "Do I need coding knowledge to write on Blogs?",
    content:
      "Not at all! Our editor is beginner-friendly and works like any standard text editor. You can easily format your content, add images, code snippets, or embeds without writing any code.",
  },
  {
    id: "4",
    title: "Can I earn money from my articles on Blogs?",
    content:
      "Yes, once you join our Partner Program, you can monetize your posts through readership engagement and sponsorships. We’ll provide analytics to help you track your performance and earnings.",
  },
  {
    id: "5",
    title: "How can I build my audience on Blogs?",
    content:
      "Engage consistently by writing valuable posts, replying to comments, and tagging your articles appropriately. Readers can follow you, and your posts may be featured in trending topics for more visibility.",
  },
];
const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
      duration: 0.4,
    },
  }),
};
export default function Faq1() {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-10 text-center">
          <motion.h2
            className="mb-4 text-3xl font-bold tracking-tight md:text-4xl"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
            Frequently Asked{" "}
            <span className="from-primary bg-red-600 bg-clip-text text-transparent">
              Questions
            </span>
          </motion.h2>
          <motion.p
            className="text-muted-foreground mx-auto max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}>
            Everything you need to know about MVPBlocks and how to use our
            components to build your next project quickly.
          </motion.p>
        </div>

        <motion.div
          className="relative mx-auto max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}>
          {/* Decorative gradient */}
          <div className="bg-primary/10 absolute -top-4 -left-4 -z-10 h-72 w-72 rounded-full blur-3xl" />
          <div className="bg-primary/10 absolute -right-4 -bottom-4 -z-10 h-72 w-72 rounded-full blur-3xl" />

          <Accordion
            type="single"
            collapsible
            className="border-border/40 bg-card/30 w-full rounded-xl border p-2 backdrop-blur-sm"
            defaultValue="1">
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                custom={index}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}>
                <AccordionItem
                  value={item.id}
                  className={cn(
                    "bg-card/50 my-1 overflow-hidden rounded-lg border-none px-2 shadow-sm transition-all",
                    "data-[state=open]:bg-card/80 data-[state=open]:shadow-md",
                  )}>
                  <AccordionPrimitive.Header className="flex">
                    <AccordionPrimitive.Trigger
                      className={cn(
                        "group flex flex-1 items-center justify-between gap-4 py-4 text-left text-base font-medium",
                        "hover:text-primary transition-all duration-300 outline-none",
                        "focus-visible:ring-primary/50 focus-visible:ring-2",
                        "data-[state=open]:text-primary",
                      )}>
                      {item.title}
                      <PlusIcon
                        size={18}
                        className={cn(
                          "text-primary/70 shrink-0 transition-transform duration-300 ease-out",
                          "group-data-[state=open]:rotate-45",
                        )}
                        aria-hidden="true"
                      />
                    </AccordionPrimitive.Trigger>
                  </AccordionPrimitive.Header>
                  <AccordionContent
                    className={cn(
                      "text-muted-foreground overflow-hidden pt-0 pb-4",
                      "data-[state=open]:animate-accordion-down",
                      "data-[state=closed]:animate-accordion-up",
                    )}>
                    <div className="border-border/30 border-t pt-3">
                      {item.content}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}