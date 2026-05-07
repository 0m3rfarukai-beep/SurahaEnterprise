const STORAGE_KEY = 'suraha_tool_leads';

export function buildLeadPayload({ toolUsed, form = {}, result = {}, recommendedService = '', leadScore = 0 }) {
  return {
    name: form.name || form.businessName || '',
    email: form.email || '',
    websiteUrl: form.websiteUrl || form.url || '',
    businessType: form.businessType || form.industry || '',
    toolUsed,
    resultSummary: result.summary || '',
    recommendedService,
    leadScore,
    createdAt: new Date().toISOString(),
  };
}

export async function saveToolLead(payload) {
  const existing = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]');
  const next = [...existing, payload].slice(-50);
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  return payload;
}
