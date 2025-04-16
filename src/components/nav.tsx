import Link from "next/link"
import { BrainCircuit } from "lucide-react"

import { Button } from "@/components/ui/button"

export function Nav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 font-bold text-xl">
          <Link href="/" className="flex items-center gap-2">
            <BrainCircuit className="h-6 w-6" />
            <span>IntelliCreate</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/#features" className="text-sm font-medium hover:underline underline-offset-4">
            Features
          </Link>
          <Link href="/#services" className="text-sm font-medium hover:underline underline-offset-4">
            Services
          </Link>
          <Link href="/#pricing" className="text-sm font-medium hover:underline underline-offset-4">
            Pricing
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/login">
            <Button variant="ghost" size="sm">
              Login
            </Button>
          </Link>
          <Link href="/signup">
            <Button size="sm">Get Started</Button>
          </Link>
        </div>
      </div>
    </header>
  )
} 