export interface EmailReport {
  id: number;
  from: string;
  subject: string;
  score: number;
  verdict: string;
  timestamp: string;
  body?: string;
  actions: string[];
  indicators: string[];
}

export const mockReports: EmailReport[] = [
  {
    id: 1,
    from: "security@paypal.com",
    subject: "Your account is restricted - Immediate action required",
    score: 82,
    verdict: "Likely phishing",
    timestamp: "2025-10-23T10:30:00Z",
    body: "Dear user, your PayPal account has been restricted due to suspicious activity. Click here to verify your information immediately.",
    actions: [
      "Do not click any links in the email",
      "Report to IT or security team immediately",
      "Mark as spam and delete"
    ],
    indicators: [
      "Suspicious sender domain (not official PayPal)",
      "Urgent language designed to create panic",
      "Generic greeting instead of personalized",
      "Suspicious links detected in email body"
    ]
  },
  {
    id: 2,
    from: "admin@company-it.com",
    subject: "Password reset required - Security update",
    score: 75,
    verdict: "High risk",
    timestamp: "2025-10-23T09:15:00Z",
    body: "Your password will expire in 24 hours. Click the link below to reset it now.",
    actions: [
      "Verify sender email address carefully",
      "Do not enter credentials on linked pages",
      "Contact IT department through official channels"
    ],
    indicators: [
      "Unexpected password reset request",
      "Creates false sense of urgency",
      "Domain mismatch with organization",
      "Suspicious redirect links"
    ]
  },
  {
    id: 3,
    from: "no-reply@amazon.com",
    subject: "Your order #12345 has shipped",
    score: 25,
    verdict: "Likely safe",
    timestamp: "2025-10-22T16:45:00Z",
    body: "Your Amazon order has been shipped and will arrive in 2-3 business days. Track your package here.",
    actions: [
      "Verify order number matches your account",
      "Check Amazon app directly for confirmation",
      "Safe to proceed if order is legitimate"
    ],
    indicators: [
      "Sender domain matches official Amazon",
      "No urgent or threatening language",
      "Professional formatting and branding",
      "Standard shipping notification format"
    ]
  },
  {
    id: 4,
    from: "support@microsoft-security.net",
    subject: "URGENT: Virus detected on your computer",
    score: 95,
    verdict: "Critical threat",
    timestamp: "2025-10-22T14:20:00Z",
    body: "CRITICAL ALERT: Multiple viruses detected on your device. Download our security tool immediately to remove threats.",
    actions: [
      "DO NOT download any attachments or click links",
      "Run a legitimate antivirus scan",
      "Report to cybersecurity team immediately"
    ],
    indicators: [
      "Fake Microsoft domain (microsoft-security.net)",
      "Aggressive scare tactics and ALL CAPS",
      "Requests immediate software download",
      "No legitimate virus scan can email you directly"
    ]
  },
  {
    id: 5,
    from: "invoices@supplier.com",
    subject: "Invoice #INV-2023-4567 - Payment due",
    score: 48,
    verdict: "Moderate risk",
    timestamp: "2025-10-21T11:30:00Z",
    body: "Please find attached invoice for recent order. Payment is due within 30 days.",
    actions: [
      "Verify invoice number with your records",
      "Scan attachment with antivirus before opening",
      "Contact supplier directly to confirm legitimacy"
    ],
    indicators: [
      "Unexpected invoice from known supplier",
      "Generic email format without order details",
      "Attachment present (potential malware risk)",
      "Some inconsistencies in sender information"
    ]
  },
  {
    id: 6,
    from: "team@github.com",
    subject: "New security alert for your repository",
    score: 15,
    verdict: "Safe",
    timestamp: "2025-10-21T08:00:00Z",
    body: "GitHub has detected a potential security vulnerability in one of your repository dependencies. View the security advisory.",
    actions: [
      "Review security advisory in GitHub dashboard",
      "Update affected dependencies if necessary",
      "Enable Dependabot alerts for future monitoring"
    ],
    indicators: [
      "Legitimate GitHub domain verified",
      "Standard security notification format",
      "Links point to official github.com domain",
      "Professional and informative tone"
    ]
  }
];
