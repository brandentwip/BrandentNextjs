import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { projectPages } from '@/components/projects/registry';
import { getProject, projects } from '@/data/projects';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  return { title: project ? `${project.name} | Brandent` : 'Brandent' };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  const Page = projectPages[slug];
  if (!project || !Page) notFound();
  return <Page project={project} />;
}
