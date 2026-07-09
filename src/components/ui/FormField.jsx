import { AlertCircle } from 'lucide-react';

export const inputBase =
  'w-full rounded-lg border border-input bg-background pl-10 pr-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors disabled:opacity-60';
export const inputErrorCls = 'border-red-500 focus:ring-red-400/40 focus:border-red-500';

export const fieldClass = (hasError) => `${inputBase} ${hasError ? inputErrorCls : ''}`;
export const selectClass = (hasError) => `${inputBase} appearance-none ${hasError ? inputErrorCls : ''}`;

// Labeled input wrapper with a leading icon and inline error / hint text.
export function Field({ icon: Icon, label, htmlFor, required, error, hint, children }) {
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
