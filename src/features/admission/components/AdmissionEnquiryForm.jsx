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
  MessageSquare,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Send,
} from 'lucide-react';
import {
  ADMISSION_ENDPOINT,
  initialValues,
  genderOptions,
  qualificationOptions,
  preferredBatchOptions,
  preferredContactTimeOptions,
  heardFromOptions,
} from '../../data/admissionForm';
import { siteInfo } from '../../data/site';

const inputBase =
  'w-full rounded-lg border border-input bg-background pl-10 pr-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors disabled:opacity-60';
const inputError = 'border-red-500 focus:ring-red-400/40 focus:border-red-500';

function Field({ icon: Icon, label, htmlFor, required, error, children, hint }) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={htmlFor} className="text-sm font-medium flex items-center gap-1">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        {Icon && (
          <Icon
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
          />
        )}
        {children}
      </div>
      {error ? (
        <p className="text-xs text-red-500 flex items-center gap-1">
          <AlertCircle size={12} /> {error.message}
        </p>
      ) : hint ? (
        <p className="text-xs text-muted-foreground">{hint}</p>
      ) : null}
    </div>
  );
}

export default function AdmissionEnquiryForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ defaultValues: initialValues, mode: 'onBlur' });

  // status: 'idle' | 'success' | 'error'
  const [status, setStatus] = useState('idle');

  const onSubmit = async (values) => {
    setStatus('idle');
    try {
      // text/plain keeps this a "simple request" and avoids a CORS preflight
      // that Apps Script web apps cannot answer. Response is opaque under
      // no-cors, so a resolved request is treated as a successful capture.
      await fetch(ADMISSION_ENDPOINT, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(values),
      });
      setStatus('success');
      reset(initialValues);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      console.error('Admission enquiry submission failed:', err);
      setStatus('error');
    }
  };

  const selectClass = (hasError) => `${inputBase} appearance-none ${hasError ? inputError : ''}`;
  const fieldClass = (hasError) => `${inputBase} ${hasError ? inputError : ''}`;

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Success / error banners */}
      <AnimatePresence>
        {status === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mb-6 flex items-start gap-3 rounded-2xl border border-green-500/30 bg-green-500/10 p-4 text-green-700 dark:text-green-400"
          >
            <CheckCircle2 className="shrink-0 mt-0.5" size={20} />
            <div>
              <p className="font-semibold">Admission enquiry submitted successfully!</p>
              <p className="text-sm opacity-90">
                Thank you. Our admission team will contact you shortly with the next steps.
              </p>
            </div>
          </motion.div>
        )}
        {status === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mb-6 flex items-start gap-3 rounded-2xl border border-red-500/30 bg-red-500/10 p-4 text-red-700 dark:text-red-400"
          >
            <AlertCircle className="shrink-0 mt-0.5" size={20} />
            <div>
              <p className="font-semibold">Something went wrong.</p>
              <p className="text-sm opacity-90">
                Please try again, or call us directly at{' '}
                <a href={`tel:${siteInfo.phoneRaw}`} className="font-semibold underline">
                  {siteInfo.phone}
                </a>
                .
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
        {/* Card 1: Student details */}
        <div className="bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <User size={20} />
            </div>
            <h3 className="text-lg font-bold">Student Details</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field icon={User} label="Student Name" htmlFor="studentName" required error={errors.studentName}>
              <input
                id="studentName"
                type="text"
                placeholder="Full name"
                className={fieldClass(errors.studentName)}
                {...register('studentName', { required: 'Please enter the student name' })}
              />
            </Field>

            <Field icon={Users} label="Father / Guardian Name" htmlFor="guardianName" error={errors.guardianName}>
              <input
                id="guardianName"
                type="text"
                placeholder="Parent / guardian name"
                className={fieldClass(errors.guardianName)}
                {...register('guardianName')}
              />
            </Field>

            <Field icon={Calendar} label="Date of Birth" htmlFor="dateOfBirth" error={errors.dateOfBirth}>
              <input
                id="dateOfBirth"
                type="date"
                className={fieldClass(errors.dateOfBirth)}
                {...register('dateOfBirth')}
              />
            </Field>

            <Field icon={CircleUser} label="Gender" htmlFor="gender" error={errors.gender}>
              <select id="gender" className={selectClass(errors.gender)} {...register('gender')}>
                <option value="">Select</option>
                {genderOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </Field>

            <Field
              icon={GraduationCap}
              label="Highest Qualification"
              htmlFor="qualification"
              error={errors.qualification}
            >
              <select
                id="qualification"
                className={selectClass(errors.qualification)}
                {...register('qualification')}
              >
                <option value="">Select</option>
                {qualificationOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </Field>
          </div>
        </div>

        {/* Card 2: Contact details */}
        <div className="bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <Phone size={20} />
            </div>
            <h3 className="text-lg font-bold">Contact Details</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field icon={Phone} label="Mobile Number" htmlFor="mobile" required error={errors.mobile}>
              <input
                id="mobile"
                type="tel"
                inputMode="numeric"
                placeholder="10-digit mobile number"
                className={fieldClass(errors.mobile)}
                {...register('mobile', {
                  required: 'Please enter your mobile number',
                  pattern: { value: /^[6-9]\d{9}$/, message: 'Enter a valid 10-digit mobile number' },
                })}
              />
            </Field>

            <Field icon={MessageCircle} label="WhatsApp Number" htmlFor="whatsapp" error={errors.whatsapp}>
              <input
                id="whatsapp"
                type="tel"
                inputMode="numeric"
                placeholder="If different from mobile"
                className={fieldClass(errors.whatsapp)}
                {...register('whatsapp', {
                  pattern: { value: /^[6-9]\d{9}$/, message: 'Enter a valid 10-digit number' },
                })}
              />
            </Field>

            <div className="sm:col-span-2">
              <Field icon={Mail} label="Email Address" htmlFor="email" error={errors.email}>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className={fieldClass(errors.email)}
                  {...register('email', {
                    pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email address' },
                  })}
                />
              </Field>
            </div>
          </div>
        </div>

        {/* Card 3: Course selection */}
        <div className="bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <BookOpen size={20} />
            </div>
            <h3 className="text-lg font-bold">Course Selection</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field icon={BookOpen} label="Interested Course" htmlFor="interestedCourse" required error={errors.interestedCourse}>
              <select
                id="interestedCourse"
                className={selectClass(errors.interestedCourse)}
                {...register('interestedCourse', { required: 'Please select a course' })}
              >
                <option value="">Select a course</option>
                {siteInfo.courses.map((c) => (
                  <option key={c.name} value={c.name}>
                    {c.name}
                    {c.fullName ? ` — ${c.fullName}` : ''}
                  </option>
                ))}
                <option value="Not Sure / Need Guidance">Not Sure / Need Guidance</option>
              </select>
            </Field>

            <Field icon={CalendarClock} label="Preferred Batch" htmlFor="preferredBatch" error={errors.preferredBatch}>
              <select
                id="preferredBatch"
                className={selectClass(errors.preferredBatch)}
                {...register('preferredBatch')}
              >
                <option value="">Select</option>
                {preferredBatchOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </Field>
          </div>
        </div>

        {/* Card 4: Location */}
        <div className="bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <MapPin size={20} />
            </div>
            <h3 className="text-lg font-bold">Location</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="sm:col-span-2">
              <Field icon={MapPin} label="Address" htmlFor="address" error={errors.address}>
                <input
                  id="address"
                  type="text"
                  placeholder="Street / area / village"
                  className={fieldClass(errors.address)}
                  {...register('address')}
                />
              </Field>
            </div>

            <Field icon={Map} label="City / District" htmlFor="city" required error={errors.city}>
              <input
                id="city"
                type="text"
                placeholder="e.g. Kahalgaon"
                className={fieldClass(errors.city)}
                {...register('city', { required: 'Please enter your city' })}
              />
            </Field>

            <Field icon={Map} label="State" htmlFor="state" error={errors.state}>
              <input
                id="state"
                type="text"
                placeholder="e.g. Bihar"
                className={fieldClass(errors.state)}
                {...register('state')}
              />
            </Field>

            <Field icon={Hash} label="Pincode" htmlFor="pincode" error={errors.pincode}>
              <input
                id="pincode"
                type="text"
                inputMode="numeric"
                placeholder="6-digit pincode"
                className={fieldClass(errors.pincode)}
                {...register('pincode', {
                  pattern: { value: /^\d{6}$/, message: 'Enter a valid 6-digit pincode' },
                })}
              />
            </Field>
          </div>
        </div>

        {/* Card 5: Additional info */}
        <div className="bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <MessageSquare size={20} />
            </div>
            <h3 className="text-lg font-bold">Additional Information</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field icon={Clock} label="Preferred Contact Time" htmlFor="preferredContactTime" error={errors.preferredContactTime}>
              <select
                id="preferredContactTime"
                className={selectClass(errors.preferredContactTime)}
                {...register('preferredContactTime')}
              >
                <option value="">Select</option>
                {preferredContactTimeOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </Field>

            <Field icon={Megaphone} label="How did you hear about us?" htmlFor="heardFrom" error={errors.heardFrom}>
              <select id="heardFrom" className={selectClass(errors.heardFrom)} {...register('heardFrom')}>
                <option value="">Select</option>
                {heardFromOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </Field>

            <div className="sm:col-span-2 space-y-1.5">
              <label htmlFor="additionalMessage" className="text-sm font-medium">
                Additional Message
              </label>
              <textarea
                id="additionalMessage"
                rows={4}
                placeholder="Any questions or details you'd like to share?"
                className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
                {...register('additionalMessage')}
              />
            </div>
          </div>
        </div>

        {/* Submit */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-3.5 rounded-full font-bold transition-all shadow-lg shadow-primary/20 disabled:opacity-70 disabled:cursor-not-allowed touch-manipulation"
          >
            {isSubmitting ? (
              <>
                <Loader2 size={18} className="animate-spin" /> Submitting…
              </>
            ) : (
              <>
                <Send size={18} /> Submit Admission Enquiry
              </>
            )}
          </button>
          <p className="text-xs text-muted-foreground text-center sm:text-left">
            Fields marked <span className="text-red-500">*</span> are required. Your details are shared only
            with our admission team.
          </p>
        </div>
      </form>
    </div>
  );
}
