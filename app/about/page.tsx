export default function AboutPage() {
  return <div className="container mx-auto max-w-3xl px-6 py-16 space-y-6">
    <h1 className="text-3xl font-semibold">About PhishGuard</h1>
    <p>PhishGuard is a personal frontend project exploring how email-review results can be explained clearly.</p>
    <h2 className="text-xl font-semibold">Current implementation</h2>
    <p>The dashboard displays sample reports. The text checker counts predefined urgency phrases locally in your browser. Its illustrative score is not a calibrated threat probability.</p>
    <h2 className="text-xl font-semibold">Limitations</h2>
    <p>No trained model, sender verification, link inspection, mailbox connection, or blocking service is implemented. Do not use the result as a security decision.</p>
    <a className="inline-block underline" href="https://github.com/rkhan28/phishguard">Read the implementation and setup instructions</a>
  </div>;
}
