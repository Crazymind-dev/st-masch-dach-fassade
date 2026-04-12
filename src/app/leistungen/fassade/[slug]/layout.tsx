import type { Metadata } from "next"
import { getFassadeTopicBySlug } from "@/lib/fassade-topics"
import { site } from "@/lib/config"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const topic = getFassadeTopicBySlug(slug)
  if (!topic) return { title: "Thema nicht gefunden" }

  return {
    title: `${topic.title} Berlin — ${topic.shortTitle} vom Meisterbetrieb`,
    description: topic.description,
    alternates: { canonical: `${site.baseUrl}/leistungen/fassade/${slug}` },
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
