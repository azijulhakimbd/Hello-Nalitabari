"use client";

import { Languages } from "lucide-react";
import { Button } from "@/components/ui/button";

type Language = "bn" | "en";

interface LanguageToggleProps {
  language: Language;
  onLanguageChange: (language: Language) => void;
}

export function LanguageToggle({
  language,
  onLanguageChange,
}: LanguageToggleProps) {
  const nextLanguage = language === "bn" ? "en" : "bn";

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => onLanguageChange(nextLanguage)}
      className="gap-2"
    >
      <Languages className="h-4 w-4" />

      {language === "bn" ? "English" : "বাংলা"}
    </Button>
  );
}