import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Simple Navbar */}
      <header className="border-b px-4">
        <div className="container flex h-14 items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            <span className="font-bold">Better Auth</span>
          </div>
          <nav className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost" size="sm">
                Sign In
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="sm">Sign Up</Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Simple Hero */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to Better Auth</h1>
        <p className="text-muted-foreground mb-8 max-w-md">
          A simple authentication system for practicing secure user management.
        </p>
        <div className="flex gap-4">
          <Link href="/login">
            <Button variant="outline">Sign In</Button>
          </Link>
          <Link href="/signup">
            <Button>Create Account</Button>
          </Link>
        </div>
      </div>

      {/* Simple Footer */}
      <footer className="border-t py-6">
        <div className="container flex flex-col items-center text-center gap-2">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Better Auth. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with Next.js and Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}
