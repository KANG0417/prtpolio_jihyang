"use client";

import { useState, useCallback } from "react";
import { letterPages, type LetterPageId } from "@/data/portfolio";

export function useLetterPortfolio() {
  const [activePage, setActivePage] = useState<LetterPageId | null>(null);
  const [visitedPages, setVisitedPages] = useState<Set<LetterPageId>>(
    () => new Set(),
  );

  const selectPage = useCallback((index: number) => {
    const pageId = letterPages[index].id;
    setActivePage(pageId);
    setVisitedPages((prev) => new Set(prev).add(pageId));
  }, []);

  const closePage = useCallback(() => {
    setActivePage(null);
  }, []);

  return {
    activePage,
    visitedPages,
    selectPage,
    closePage,
    isPageOpen: activePage !== null,
  };
}
