import { AlertCircle } from 'lucide-react';

const AffiliateDisclosure = () => (
  <div className="flex items-start gap-3 p-4 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-600 my-6">
    <AlertCircle size={18} className="shrink-0 mt-0.5 text-slate-400" />
    <p>
      <strong>Disclosure:</strong> Some links in this article may be affiliate links. We may earn a small commission if you purchase through them, at no extra cost to you. We only recommend products and services we genuinely trust.
    </p>
  </div>
);

export default AffiliateDisclosure;
