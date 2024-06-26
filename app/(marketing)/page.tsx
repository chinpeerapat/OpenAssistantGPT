import { GithubCard } from "@/components/github-card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Icons } from "@/components/icons";
import { FAQ } from '@/components/faq';
import { freePlan, basicPlan, proPlan } from "@/config/subscriptions";

export default function IndexPage() {

  return (
    <>
      <section data-aos="fade-up" className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 py-12 md:py-24 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Dashboard for your AI Tutor
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Specifically made for Professor Alexa Alice Joubin
          </p>
          <div className="space-x-4 space-y-4">
            <Link href="/login" className={cn(buttonVariants({ size: "lg" }))}>
              Login
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
