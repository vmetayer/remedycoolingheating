// Shared submit logic for every lead form on the site.
// Both forms post to the same Formspree endpoint.
export const FORMSPREE_ENDPOINT = "https://formspree.io/f/xkjgbqwn";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

/** Submit a lead form. `source` identifies which form it came from. */
export async function submitLead(
  form: HTMLFormElement,
  source: "homepage_quote" | "contact_page"
): Promise<boolean> {
  const data = new FormData(form);
  data.set("form_source", source);
  data.set("page", window.location.pathname);
  data.set(
    "_subject",
    source === "contact_page"
      ? "New website message (Contact page)"
      : "New quote request (Homepage)"
  );

  try {
    const res = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });
    if (!res.ok) return false;
    // Lets Tag Manager track successful submissions (event: form_submit_success)
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "form_submit_success", form_source: source });
    return true;
  } catch {
    return false;
  }
}
