import { Check } from 'lucide-react';

// Progress header for a multi-step form: a labelled progress bar plus
// compact step dots. `steps` is an array of step titles; `current` is 0-based.
export default function FormStepper({ steps, current }) {
  const pct = ((current + 1) / steps.length) * 100;

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-2">
        <p className="text-sm font-semibold text-primary">
          Step {current + 1} of {steps.length}
        </p>
        <p className="text-sm font-medium text-muted-foreground">{steps[current]}</p>
      </div>

      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-primary rounded-full transition-all duration-300"
          style={{ width: `${pct}%` }}
        />
      </div>

      {/* Step dots (hidden on very small screens to save space) */}
      <div className="mt-4 hidden sm:flex items-center justify-between">
        {steps.map((label, i) => {
          const done = i < current;
          const active = i === current;
          return (
            <div key={label} className="flex flex-col items-center gap-1.5 flex-1 min-w-0">
              <div
                className={`h-8 w-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${
                  done
                    ? 'bg-primary text-white'
                    : active
                      ? 'bg-primary/15 text-primary ring-2 ring-primary'
                      : 'bg-muted text-muted-foreground'
                }`}
              >
                {done ? <Check size={15} /> : i + 1}
              </div>
              <span
                className={`text-[11px] text-center truncate w-full px-1 ${
                  active ? 'text-foreground font-medium' : 'text-muted-foreground'
                }`}
              >
                {label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
