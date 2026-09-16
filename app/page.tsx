import Link from "next/link";
import { Shield, Search, FileText } from "lucide-react";

export default function Home() {
  return <div className="container mx-auto max-w-5xl px-6 py-24">
    <p className="text-sm text-muted-foreground mb-6">Personal project · Interactive prototype</p>
    <Shield className="h-12 w-12 text-primary mb-8" />
    <h1 className="text-5xl md:text-7xl font-bold tracking-tight">PhishGuard</h1>
    <p className="mt-8 max-w-2xl text-xl text-muted-foreground leading-relaxed">Explore how an email-review workflow could explain suspicious wording and present supporting evidence.</p>
    <div className="mt-10 flex flex-wrap gap-4">
      <Link href="/test" className="rounded-xl bg-primary px-6 py-3 text-primary-foreground font-medium">Try the keyword checker</Link>
      <Link href="/dashboard" className="rounded-xl border border-border px-6 py-3 font-medium">Browse sample reports</Link>
    </div>
    <div className="mt-20 grid gap-6 md:grid-cols-2">
      <section className="glass-effect rounded-2xl p-8"><Search className="mb-4 h-6 w-6"/><h2 className="text-xl font-semibold">See the matching phrases</h2><p className="mt-3 text-muted-foreground">The checker runs in your browser and looks for a short list of urgency phrases. It does not use a trained AI model.</p></section>
      <section className="glass-effect rounded-2xl p-8"><FileText className="mb-4 h-6 w-6"/><h2 className="text-xl font-semibold">Review example reports</h2><p className="mt-3 text-muted-foreground">Dashboard records are sample data. There is no connected inbox, forwarding address, or automatic email blocking.</p></section>
    </div>
    <p className="mt-10 text-sm text-muted-foreground">This prototype cannot establish whether an email is safe. A message with no matched phrases may still be malicious.</p>
    <a className="inline-block mt-8 underline" href="https://github.com/rkhan28/phishguard">Source code and limitations</a>
  </div>;
}
