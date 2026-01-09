import React from 'react';

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  content: React.ReactNode;
}

export interface Project {
  title: string;
  year: string;
  description: string;
  image: string;
  link: string;
  note?: string;
  internalRoute?: string;
  category: 'Geography' | 'Venture' | ('Geography' | 'Venture')[];
}