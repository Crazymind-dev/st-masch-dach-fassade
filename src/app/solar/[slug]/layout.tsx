import type { Metadata } from "next"
import { getSolarTopicBySlug } from "@/lib/solar-topics"
import { site } from "@/lib/config"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const topic = getSolarTopicBySlug(slug)
  if (!topic) return { title: "Thema nicht gefunden" }

  return {
    title: `${topic.title} Berlin — ${topic.shortTitle} vom Dachdecker`,
    description: topic.description,
    alternates: { canonical: `${site.baseUrl}/solar/${slug}` },
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
