import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background border-t py-12">
      <div className="container mx-auto text-center">
        <p className="text-sm text-muted-foreground">
          Copyright © 2025 <Link href="/">QuizLab</Link>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
