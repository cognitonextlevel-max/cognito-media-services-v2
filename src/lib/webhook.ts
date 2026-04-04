export async function sendWebhookLead(data: any) {
  const webhookUrl = process.env.MAKE_WEBHOOK_URL;

  if (!webhookUrl) {
    console.warn("MAKE_WEBHOOK_URL is not configured.");
    return;
  }

  try {
    const payload = {
      ...data,
      source: "DeMarkuss Day AI Audit Form",
      timestamp: new Date().toISOString()
    };

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    // We don't want to break the audit flow if webhook fails, just log it.
    if (!response.ok) {
      console.error("Webhook submission failed:", response.statusText);
    }
  } catch (error) {
    console.error("Error sending webhook:", error);
  }
}
