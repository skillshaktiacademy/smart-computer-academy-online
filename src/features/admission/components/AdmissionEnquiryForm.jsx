import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import {
  User,
  Users,
  Phone,
  MessageCircle,
  Mail,
  Calendar,
  CircleUser,
  GraduationCap,
  BookOpen,
  CalendarClock,
  MapPin,
  Map,
  Hash,
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
  ADMISSION_ENDPOINT,
  initialValues,
  genderOptions,
  qualificationOptions,
  preferredBatchOptions,
  preferredContactTimeOptions,
  heardFromOptions,
} from '@/features/admission/data/admissionForm';
import { siteInfo } from '@/config/site';
import { Field, fieldClass, selectClass } from '@/components/ui/FormField';
import FormStepper from '@/components/ui/FormStepper';

const STEP_TITLES = ['Student', 'Contact', 'Course', 'Location', 'More Info'];
const STEP_FIELDS = [
  ['studentName', 'guardianName', 'dateOfBirth', 'gender', 'qualification'],
  ['mobile', 'whatsapp', 'email'],
  ['interestedCourse', 'preferredBatch'],
  ['address', 'city', 'state', 'pincode'],
  ['preferredContactTime', 'heardFrom', 'additionalMessage'],
];
const LAST = STEP_FIELDS.length - 1;

export default function AdmissionEnquiryForm() {
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
      await fetch(ADMISSION_ENDPOINT, {
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
      console.error('Admission enquiry submission failed:', err);
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
          <h3 className="text-2xl font-bold mb-2">Admission enquiry submitted!</h3>
          <p className="text-muted-foreground">
            Thank you. Our admission team will contact you shortly with the next steps.
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
              <a href={`tel:${siteInfo.phoneRaw}`} className="font-semibold underline">{siteInfo.phone}</a>.
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
              {/* Step 1 — Student */}
              {step === 0 && (
                <>
                  <Field icon={User} label="Student Name" htmlFor="studentName" required error={errors.studentName}>
                    <input id="studentName" type="text" placeholder="Full name" className={fieldClass(errors.studentName)}
                      {...register('studentName', { required: 'Please enter the student name' })} />
                  </Field>
                  <Field icon={Users} label="Father / Guardian Name" htmlFor="guardianName" error={errors.guardianName}>
                    <input id="guardianName" type="text" placeholder="Parent / guardian name" className={fieldClass(errors.guardianName)}
                      {...register('guardianName')} />
                  </Field>
                  <Field icon={Calendar} label="Date of Birth" htmlFor="dateOfBirth" error={errors.dateOfBirth}>
                    <input id="dateOfBirth" type="date" className={fieldClass(errors.dateOfBirth)} {...register('dateOfBirth')} />
                  </Field>
                  <Field icon={CircleUser} label="Gender" htmlFor="gender" error={errors.gender}>
                    <select id="gender" className={selectClass(errors.gender)} {...register('gender')}>
                      <option value="">Select</option>
                      {genderOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                    </select>
                  </Field>
                  <div className="sm:col-span-2">
                    <Field icon={GraduationCap} label="Highest Qualification" htmlFor="qualification" error={errors.qualification}>
                      <select id="qualification" className={selectClass(errors.qualification)} {...register('qualification')}>
                        <option value="">Select</option>
                        {qualificationOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                      </select>
                    </Field>
                  </div>
                </>
              )}

              {/* Step 2 — Contact */}
              {step === 1 && (
                <>
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

              {/* Step 3 — Course */}
              {step === 2 && (
                <>
                  <Field icon={BookOpen} label="Interested Course" htmlFor="interestedCourse" required error={errors.interestedCourse}>
                    <select id="interestedCourse" className={selectClass(errors.interestedCourse)}
                      {...register('interestedCourse', { required: 'Please select a course' })}>
                      <option value="">Select a course</option>
                      {siteInfo.courses.map((c) => (
                        <option key={c.name} value={c.name}>{c.name}{c.fullName ? ` — ${c.fullName}` : ''}</option>
                      ))}
                      <option value="Not Sure / Need Guidance">Not Sure / Need Guidance</option>
                    </select>
                  </Field>
                  <Field icon={CalendarClock} label="Preferred Batch" htmlFor="preferredBatch" error={errors.preferredBatch}>
                    <select id="preferredBatch" className={selectClass(errors.preferredBatch)} {...register('preferredBatch')}>
                      <option value="">Select</option>
                      {preferredBatchOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                    </select>
                  </Field>
                </>
              )}

              {/* Step 4 — Location */}
              {step === 3 && (
                <>
                  <div className="sm:col-span-2">
                    <Field icon={MapPin} label="Address" htmlFor="address" error={errors.address}>
                      <input id="address" type="text" placeholder="Street / area / village" className={fieldClass(errors.address)} {...register('address')} />
                    </Field>
                  </div>
                  <Field icon={Map} label="City / District" htmlFor="city" required error={errors.city}>
                    <input id="city" type="text" placeholder="e.g. Kahalgaon" className={fieldClass(errors.city)}
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

              {/* Step 5 — More info */}
              {step === 4 && (
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
                    <textarea id="additionalMessage" rows={4} placeholder="Any questions or details you'd like to share?"
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
                {isSubmitting ? <><Loader2 size={18} className="animate-spin" /> Submitting…</> : <><Send size={18} /> Submit Admission</>}
              </button>
            )}
          </div>
        </form>
      </div>
      <p className="text-xs text-muted-foreground text-center mt-4">
        Fields marked <span className="text-red-500">*</span> are required. Your details are shared only with our admission team.
      </p>
    </div>
  );
}
