export async function sendWebhookLead(data: any) {
  const webhookUrl = "https://hook.us2.make.com/d6d7v3cnyw11h2y4y4yovs8jlyhpsnjm";
  
  if (!webhookUrl) return;

  try {
    const payload = {
      ...data,
      source: "Cognito OS AI Audit Form",
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
