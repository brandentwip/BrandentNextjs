import type { ComponentType } from 'react';
import type { Project } from '@/data/projects';
import ApexPage from './apex';
import LuxwearPage from './luxwear';
import NovacraftPage from './novacraft';
import ZestoraPage from './zestora';

// Maps a project slug (from src/data/projects.ts) to the page layout for that project.
export const projectPages: Record<string, ComponentType<{ project: Project }>> = {
  apex: ApexPage,
  luxwear: LuxwearPage,
  novacraft: NovacraftPage,
  zestora: ZestoraPage,
};
