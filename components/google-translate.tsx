"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    google?: {
      translate?: {
        TranslateElement: new (
          options: {
            pageLanguage: string;
            includedLanguages?: string;
            autoDisplay: boolean;
            layout?: number;
          },
          elementId: string
        ) => void;
      };
    };
  }
}

let translateScriptLoaded = false;

export function GoogleTranslate() {
  useEffect(() => {
    const initializeGoogleTranslate = () => {
      if (
        window.google?.translate?.TranslateElement &&
        document.getElementById("google_translate_element")
      ) {
        if (
          document.getElementById("google_translate_element")?.children
            .length === 0
        ) {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: "bn",
              includedLanguages:
                "af,ar,bn,bg,ca,cs,da,de,el,en,es,fa,fi,fr,gu,he,hi,hr,hu,id,it,ja,kn,ko,lt,lv,mk,ml,mr,ne,nl,no,pa,pl,pt,ro,ru,sk,sl,sr,sv,sw,ta,te,th,tr,uk,ur,vi,zh-CN,zh-TW",
              autoDisplay: false,
            },
            "google_translate_element"
          );
        }
      }
    };

    window.googleTranslateElementInit = initializeGoogleTranslate;

    if (!translateScriptLoaded) {
      const script = document.createElement("script");
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);

      translateScriptLoaded = true;
    } else {
      initializeGoogleTranslate();
    }

    return () => {
    };
  }, []);

  return (
    <div
      id="google_translate_element"
      className="google-translate-container"
    />
  );
}