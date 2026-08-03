import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().optional(),
  website: z.string().url({ message: 'Please enter a valid URL.' }).optional().or(z.literal('')),
  service: z.string().min(1, { message: 'Please select a service.' }),
  businessSize: z.string().min(1, { message: 'Please select a business size.' }),
  budgetRange: z.string().min(1, { message: 'Please select a budget.' }),
  timeline: z.string().min(1, { message: 'Please select a timeline.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

const ContactForm = () => {
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      website: '',
      service: '',
      businessSize: '',
      budgetRange: '',
      timeline: '',
      message: '',
    },
  });

  const onSubmit = (values) => {
    setStatus('loading');
    setErrorMessage('');

    setTimeout(() => {
      try {
        const existingSubmissions = JSON.parse(localStorage.getItem('suraha_submissions') || '[]');
        localStorage.setItem('suraha_submissions', JSON.stringify([...existingSubmissions, { ...values, date: new Date().toISOString() }]));
        setStatus('success');
        form.reset();
      } catch {
        setStatus('error');
        setErrorMessage('Failed to save submission locally. Please try again.');
      }
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div className="bg-white rounded-2xl border border-cyan-400 p-8 sm:p-10 text-center flex flex-col items-center justify-center gap-5 shadow-xl shadow-cyan-400/10">
        <CheckCircle2 color="var(--lime-accent)" size={64} />
        <h3 className="text-3xl font-bold" style={{ color: 'var(--dark-navy)' }}>Request Received!</h3>
        <p className="text-lg mb-8" style={{ color: 'var(--text-muted-dark)' }}>
          Thank you for reaching out. One of our technical experts will review your request and contact you within 24 hours.
        </p>
        <Button size="lg" variant="outline" onClick={() => setStatus('idle')} className="rounded-full">
          Submit Another Request
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white p-0 flex flex-col gap-5 h-auto">
      <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Request a Free Consultation</h3>
      
      {status === 'error' && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-md text-red-600 flex items-center gap-3 mb-8">
          <AlertCircle size={20} />
          {errorMessage}
        </div>
      )}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <div className="grid md:grid-cols-2 gap-5">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold text-slate-800">Full Name *</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. Jane Doe" {...field} className="h-12 bg-slate-50 border-slate-200 focus-visible:ring-blue-600" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold text-slate-800">Business Email *</FormLabel>
                  <FormControl>
                    <Input placeholder="jane@company.com" {...field} className="h-12 bg-slate-50 border-slate-200 focus-visible:ring-blue-600" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <div className="grid md:grid-cols-2 gap-5">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold text-slate-800">Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="+44 7000 000000" {...field} className="h-12 bg-slate-50 border-slate-200 focus-visible:ring-blue-600" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="website"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold text-slate-800">Company Website</FormLabel>
                  <FormControl>
                    <Input placeholder="https://example.com" {...field} className="h-12 bg-slate-50 border-slate-200 focus-visible:ring-blue-600" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="service"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold text-slate-800">Service Needed *</FormLabel>
                <FormControl>
                  <select 
                    {...field} 
                    className="flex h-12 w-full items-center justify-between rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm ring-offset-white placeholder:text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="" disabled>Select the primary service you're interested in</option>
                    <option value="Website Design & Development">Website Design & Development</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="SEO & Analytics">SEO & Analytics</option>
                    <option value="IT Support & Maintenance">IT Support & Cyber Security</option>
                    <option value="Other">Other / General Inquiry</option>
                  </select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid md:grid-cols-3 gap-5">
            <FormField
              control={form.control}
              name="businessSize"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold text-slate-800">Business Size *</FormLabel>
                  <FormControl>
                    <select 
                      {...field} 
                      className="flex h-12 w-full items-center justify-between rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm ring-offset-white placeholder:text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="" disabled>Select size</option>
                      <option value="Startup">Startup</option>
                      <option value="Small business">Small business</option>
                      <option value="Growing business">Growing business</option>
                      <option value="Enterprise">Enterprise</option>
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="budgetRange"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold text-slate-800">Budget Range *</FormLabel>
                  <FormControl>
                    <select 
                      {...field} 
                      className="flex h-12 w-full items-center justify-between rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm ring-offset-white placeholder:text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="" disabled>Select budget</option>
                      <option value="Under £500">Under £500</option>
                      <option value="£500-£1000">£500-£1000</option>
                      <option value="£1000-£2500">£1000-£2500</option>
                      <option value="£2500+">£2500+</option>
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="timeline"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold text-slate-800">Project Timeline *</FormLabel>
                  <FormControl>
                    <select 
                      {...field} 
                      className="flex h-12 w-full items-center justify-between rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm ring-offset-white placeholder:text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="" disabled>Select timeline</option>
                      <option value="ASAP">ASAP</option>
                      <option value="This month">This month</option>
                      <option value="Next month">Next month</option>
                      <option value="Planning ahead">Planning ahead</option>
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold text-slate-800">Project Details *</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Tell us a little bit about your current challenges and what you're looking to achieve..." 
                    className="min-h-[110px] bg-slate-50 border-slate-200 focus-visible:ring-blue-600"
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button 
            type="submit" 
            disabled={status === 'loading'} 
            className="w-full h-12 md:h-14 text-base md:text-lg bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-lg shadow-blue-600/20"
          >
            {status === 'loading' ? 'Sending...' : 'Submit Request'} 
            {status === 'loading' ? <Loader2 size={20} className="ml-2 animate-spin" aria-hidden="true" /> : <Send size={20} className="ml-2" aria-hidden="true" />}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
