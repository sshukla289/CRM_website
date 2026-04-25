"use client";

function cleanString(value) {
  return typeof value === "string" ? value.trim() : "";
}

export async function submitLead({
  name,
  email,
  phone,
  company = "",
  solution = "",
  message = "",
  notes = "",
  formId = "",
  extra = {},
}) {
  const payload = {
    name: cleanString(name),
    email: cleanString(email),
    phone: cleanString(phone),
  };

  const solutionValue = cleanString(solution);
  if (solutionValue) {
    payload.solution = solutionValue;
  }

  const companyValue = cleanString(company);
  if (companyValue) {
    payload.company = companyValue;
  }

  const messageParts = [cleanString(message), cleanString(notes)].filter(Boolean);
  if (messageParts.length) {
    payload.message = messageParts.join("\n\n");
  }

  if (formId) {
    payload.form_id = formId;
  }

  if (typeof window !== "undefined") {
    const url = new URL(window.location.href);
    payload.page_url = url.href;
    payload.page_path = url.pathname;

    if (document.referrer) {
      payload.referrer = document.referrer;
    }

    ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"].forEach((key) => {
      const value = url.searchParams.get(key);
      if (value) {
        payload[key] = value;
      }
    });
  }

  Object.entries(extra).forEach(([key, value]) => {
    if (typeof value === "string") {
      const cleaned = value.trim();
      if (cleaned) {
        payload[key] = cleaned;
      }
      return;
    }

    if (typeof value === "number" || typeof value === "boolean") {
      payload[key] = value;
    }
  });

  const response = await fetch("/api/lead", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const result = await response.json().catch(() => ({}));

  if (!response.ok || result.success === false) {
    throw new Error(result.error || "Unable to submit your details right now.");
  }

  return result;
}
