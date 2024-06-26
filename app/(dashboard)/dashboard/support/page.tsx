import { DashboardHeader } from "@/components/header"
import { Icons } from "@/components/icons"
import { DashboardShell } from "@/components/shell"
import { buttonVariants } from "@/components/ui/button"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import Link from "next/link"

export const metadata = {
    title: `${siteConfig.name} - Support`,
}

export default async function SupportPage() {

    return (
        <DashboardShell>
            <DashboardHeader heading="Support" text="Welcome to the Support Page.">
                <Link
                    href="/dashboard"
                    className={cn(
                        buttonVariants({ variant: "ghost" }),
                        "md:left-8 md:top-8"
                    )}
                >
                    <>
                        <Icons.chevronLeft className="mr-2 h-4 w-4" />
                        Back
                    </>
                </Link>
            </DashboardHeader>
            <div >
                <p className="text-lg font-semibold">How can you get help?</p>
                <p className="text-muted-foreground">
                    You can reach out Akhilesh on <a className="underline" href="https://www.linkedin.com/in/akhileshrangani/">Linkedin</a> or <a className="underline" href="https://x.com/heyavi_">X.com</a>, so he can help you to fix it.
                </p>
            </div>
        </DashboardShell >
    )
}