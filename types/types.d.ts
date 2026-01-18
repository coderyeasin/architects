import { ReactNode } from "react";

export interface CoreProps {
  children: ReactNode;
  className?: string;
}

export interface AchieveType {
  icon: string;
  countNumber: number;
  title: string;
}
