import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import {
  User,
  Building2,
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Map,
  Hash,
  Monitor,
  Users,
  Ruler,
  GraduationCap,
  Clock,
  Megaphone,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Send,
  ArrowLeft,
  ArrowRight,
} from 'lucide-react';
import {
  FRANCHISE_ENDPOINT,
  initialValues,
  existingInstituteOptions,
  preferredContactTimeOptions,
  heardFromOptions,
} from '@/features/franchise/data/franchiseForm';
import { Field, fieldClass, selectClass } from '@/components/ui/FormField';
import FormStepper from '@/components/ui/FormStepper';

const STEP_TITLES = ['Contact', 'Institute', 'Location', 'More Info'];
const STEP_FIELDS = [
  ['contactPerson', 'mobile', 'whatsapp', 'email'],
  ['instituteName', 'existingInstitute', 'totalComputers', 'totalStaff', 'instituteArea', 'interestedCourses'],
  ['address', 'city', 'state', 'pincode'],
  ['preferredContactTime', 'heardFrom', 'additionalMessage'],
];
const LAST = STEP_FIELDS.length - 1;

export default function FranchiseEnquiryForm() {
  const {
    register,
    handleSubmit,
    trigger,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ defaultValues: initialValues, mode: 'onBlur' });

  const [step, setStep] = useState(0);
  const [status, setStatus] = useState('idle'); // idle | success | error

  const next = async () => {
    const ok = await trigger(STEP_FIELDS[step]);
    if (ok) setStep((s) => Math.min(s + 1, LAST));
  };
  const back = () => setStep((s) => Math.max(s - 1, 0));

  const onSubmit = async (values) => {
    setStatus('idle');
    try {
      await fetch(FRANCHISE_ENDPOINT, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(values),
      });
      setStatus('success');
      reset(initialValues);
      setStep(0);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      console.error('Franchise enquiry submission failed:', err);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="w-full max-w-2xl mx-auto">
        <div className="bg-card border border-green-500/30 rounded-3xl p-8 sm:p-10 text-center">
          <div className="w-16 h-16 rounded-full bg-green-500/10 text-green-600 flex items-center justify-center mx-auto mb-5">
            <CheckCircle2 size={32} />
          </div>
          <h3 className="text-2xl font-bold mb-2">Enquiry submitted successfully!</h3>
          <p className="text-muted-foreground">
            Thank you for your interest. Our franchise team will contact you soon.
          </p>
          <button
            type="button"
            onClick={() => setStatus('idle')}
            className="mt-6 inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            Submit another enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-sm">
        <FormStepper steps={STEP_TITLES} current={step} />

        {status === 'error' && (
          <div className="mb-6 flex items-start gap-3 rounded-2xl border border-red-500/30 bg-red-500/10 p-4 text-red-700 dark:text-red-400">
            <AlertCircle className="shrink-0 mt-0.5" size={20} />
            <p className="text-sm">
              Something went wrong. Please try again, or call us at{' '}
              <a href="tel:919905788324" className="font-semibold underline">9905788324</a>.
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {/* Step 1 — Contact */}
              {step === 0 && (
                <>
                  <div className="sm:col-span-2">
                    <Field icon={User} label="Contact Person" htmlFor="contactPerson" required error={errors.contactPerson}>
                      <input id="contactPerson" type="text" placeholder="Full name" className={fieldClass(errors.contactPerson)}
                        {...register('contactPerson', { required: 'Please enter your name' })} />
                    </Field>
                  </div>
                  <Field icon={Phone} label="Mobile Number" htmlFor="mobile" required error={errors.mobile}>
                    <input id="mobile" type="tel" inputMode="numeric" placeholder="10-digit mobile number" className={fieldClass(errors.mobile)}
                      {...register('mobile', { required: 'Please enter your mobile number', pattern: { value: /^[6-9]\d{9}$/, message: 'Enter a valid 10-digit mobile number' } })} />
                  </Field>
                  <Field icon={MessageCircle} label="WhatsApp Number" htmlFor="whatsapp" error={errors.whatsapp}>
                    <input id="whatsapp" type="tel" inputMode="numeric" placeholder="If different from mobile" className={fieldClass(errors.whatsapp)}
                      {...register('whatsapp', { pattern: { value: /^[6-9]\d{9}$/, message: 'Enter a valid 10-digit number' } })} />
                  </Field>
                  <div className="sm:col-span-2">
                    <Field icon={Mail} label="Email Address" htmlFor="email" error={errors.email}>
                      <input id="email" type="email" placeholder="you@example.com" className={fieldClass(errors.email)}
                        {...register('email', { pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email address' } })} />
                    </Field>
                  </div>
                </>
              )}

              {/* Step 2 — Institute */}
              {step === 1 && (
                <>
                  <Field icon={Building2} label="Institute Name" htmlFor="instituteName" error={errors.instituteName}>
                    <input id="instituteName" type="text" placeholder="Proposed / existing name" className={fieldClass(errors.instituteName)}
                      {...register('instituteName')} />
                  </Field>
                  <Field icon={GraduationCap} label="Run an institute already?" htmlFor="existingInstitute" error={errors.existingInstitute}>
                    <select id="existingInstitute" className={selectClass(errors.existingInstitute)} {...register('existingInstitute')}>
                      <option value="">Select</option>
                      {existingInstituteOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                    </select>
                  </Field>
                  <Field icon={Monitor} label="Total Computers" htmlFor="totalComputers" error={errors.totalComputers}>
                    <input id="totalComputers" type="number" min="0" placeholder="e.g. 10" className={fieldClass(errors.totalComputers)}
                      {...register('totalComputers', { min: { value: 0, message: 'Cannot be negative' } })} />
                  </Field>
                  <Field icon={Users} label="Total Staff" htmlFor="totalStaff" error={errors.totalStaff}>
                    <input id="totalStaff" type="number" min="0" placeholder="e.g. 3" className={fieldClass(errors.totalStaff)}
                      {...register('totalStaff', { min: { value: 0, message: 'Cannot be negative' } })} />
                  </Field>
                  <Field icon={Ruler} label="Institute Area" htmlFor="instituteArea" hint="Approx. area, e.g. 500 sq ft" error={errors.instituteArea}>
                    <input id="instituteArea" type="text" placeholder="e.g. 500 sq ft" className={fieldClass(errors.instituteArea)}
                      {...register('instituteArea')} />
                  </Field>
                  <Field icon={GraduationCap} label="Interested Courses" htmlFor="interestedCourses" error={errors.interestedCourses}>
                    <input id="interestedCourses" type="text" placeholder="e.g. ADCA, DCA, Tally" className={fieldClass(errors.interestedCourses)}
                      {...register('interestedCourses')} />
                  </Field>
                </>
              )}

              {/* Step 3 — Location */}
              {step === 2 && (
                <>
                  <div className="sm:col-span-2">
                    <Field icon={MapPin} label="Address" htmlFor="address" error={errors.address}>
                      <input id="address" type="text" placeholder="Street / area" className={fieldClass(errors.address)} {...register('address')} />
                    </Field>
                  </div>
                  <Field icon={Map} label="City / District" htmlFor="city" required error={errors.city}>
                    <input id="city" type="text" placeholder="e.g. Bhagalpur" className={fieldClass(errors.city)}
                      {...register('city', { required: 'Please enter your city' })} />
                  </Field>
                  <Field icon={Map} label="State" htmlFor="state" error={errors.state}>
                    <input id="state" type="text" placeholder="e.g. Bihar" className={fieldClass(errors.state)} {...register('state')} />
                  </Field>
                  <Field icon={Hash} label="Pincode" htmlFor="pincode" error={errors.pincode}>
                    <input id="pincode" type="text" inputMode="numeric" placeholder="6-digit pincode" className={fieldClass(errors.pincode)}
                      {...register('pincode', { pattern: { value: /^\d{6}$/, message: 'Enter a valid 6-digit pincode' } })} />
                  </Field>
                </>
              )}

              {/* Step 4 — More info */}
              {step === 3 && (
                <>
                  <Field icon={Clock} label="Preferred Contact Time" htmlFor="preferredContactTime" error={errors.preferredContactTime}>
                    <select id="preferredContactTime" className={selectClass(errors.preferredContactTime)} {...register('preferredContactTime')}>
                      <option value="">Select</option>
                      {preferredContactTimeOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                    </select>
                  </Field>
                  <Field icon={Megaphone} label="How did you hear about us?" htmlFor="heardFrom" error={errors.heardFrom}>
                    <select id="heardFrom" className={selectClass(errors.heardFrom)} {...register('heardFrom')}>
                      <option value="">Select</option>
                      {heardFromOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                    </select>
                  </Field>
                  <div className="sm:col-span-2 space-y-1.5">
                    <label htmlFor="additionalMessage" className="text-sm font-medium">Additional Message</label>
                    <textarea id="additionalMessage" rows={4} placeholder="Anything else you'd like to tell us?"
                      className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
                      {...register('additionalMessage')} />
                  </div>
                </>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between gap-3 mt-8">
            <button
              type="button"
              onClick={back}
              disabled={step === 0}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full font-semibold border border-border text-foreground hover:bg-muted/50 transition-colors disabled:opacity-40 disabled:cursor-not-allowed touch-manipulation"
            >
              <ArrowLeft size={16} /> Back
            </button>

            {step < LAST ? (
              <button
                type="button"
                onClick={next}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold bg-primary text-white hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 touch-manipulation"
              >
                Next <ArrowRight size={16} />
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-bold bg-primary text-white hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 disabled:opacity-70 touch-manipulation"
              >
                {isSubmitting ? <><Loader2 size={18} className="animate-spin" /> Submitting…</> : <><Send size={18} /> Submit Enquiry</>}
              </button>
            )}
          </div>
        </form>
      </div>
      <p className="text-xs text-muted-foreground text-center mt-4">
        Fields marked <span className="text-red-500">*</span> are required. Your details are shared only with our franchise team.
      </p>
    </div>
  );
}
