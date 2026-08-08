"use client";

import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import { Check, Copy } from "lucide-react";

export function CopyEmailButton({ email }: { email: string }) {
  const { copied, copy } = useCopyToClipboard();

  return (
    <button
      type="button"
      onClick={() => copy(email)}
      className="inline-flex max-w-full items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-sm font-medium break-all transition-colors hover:bg-black/[.04] dark:border-white/15 dark:hover:bg-white/[.06]"
    >
      {copied ? (
        <Check className="h-4 w-4 shrink-0" />
      ) : (
        <Copy className="h-4 w-4 shrink-0" />
      )}
      {copied ? "Copied!" : email}
    </button>
  );
}
