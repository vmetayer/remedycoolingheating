"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { PHONE_TEL, PHONE_SMS } from "@/lib/site";

export default function StickyCallBar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [visible, setVisible] = useState(!isHome);

  useEffect(() => {
    if (!isHome) {
      setVisible(true);
      return;
    }
    setVisible(window.scrollY > 200);
    const onScroll = () => setVisible(window.scrollY > 200);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex h-16 md:hidden">
      <a
        href={PHONE_TEL}
        className="flex w-[70%] items-center justify-center gap-2 bg-remedy-orange text-lg font-bold text-white"
      >
        📞 Call Now
      </a>
      <a
        href={PHONE_SMS}
        className="flex w-[30%] items-center justify-center gap-1 bg-remedy-blue font-bold text-white"
      >
        💬 Text
      </a>
    </div>
  );
}
