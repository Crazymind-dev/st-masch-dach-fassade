import type { Metadata } from "next"
import { getServiceBySlug } from "@/lib/services"
import { site } from "@/lib/config"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) return { title: "Leistung nicht gefunden" }

  return {
    title: `${service.title} Berlin — ${service.shortTitle} vom Meisterbetrieb`,
    description: service.description,
    alternates: { canonical: `${site.baseUrl}/leistungen/${slug}` },
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
