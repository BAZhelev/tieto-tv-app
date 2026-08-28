"use client";

import { Alert02Icon, Cancel01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useNetworkState } from "@uidotdev/usehooks";

import { useState } from "react";

const SLOW_TYPES = ["slow-2g", "2g", "3g"];

export function NetworkBanner() {
  const { effectiveType } = useNetworkState();
  const [dismissed, setDismissed] = useState(false);

  const isSlow = effectiveType ? SLOW_TYPES.includes(effectiveType) : false;

  if (!isSlow || dismissed) {
    return null;
  }

  return (
    <div
      role="alert"
      className="fixed inset-x-0 top-0 z-50 flex items-center justify-center gap-2 bg-red-50 px-4 py-1.5 text-xs font-medium text-red-700 dark:bg-red-950/60 dark:text-red-300"
    >
      <HugeiconsIcon icon={Alert02Icon} size={16} />
      <span>Error: Slow network detected — pages may load slowly.</span>
      <button
        type="button"
        aria-label="Dismiss"
        onClick={() => setDismissed(true)}
        className="cursor-pointer rounded-full p-1 transition-colors hover:bg-red-100 dark:hover:bg-red-900/50"
      >
        <HugeiconsIcon icon={Cancel01Icon} size={16} />
      </button>
    </div>
  );
}
