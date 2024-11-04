import Link from "next/link"

export default function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}
        <nav></nav>
        <Link href="/news/fake">its my nested layout completion for now </Link>
        {children}
      </section>
    )
  }