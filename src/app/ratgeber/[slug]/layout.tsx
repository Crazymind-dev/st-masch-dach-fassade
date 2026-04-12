import type { Metadata } from "next"
import { getRatgeberBySlug } from "@/lib/ratgeber"
import { site } from "@/lib/config"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const article = getRatgeberBySlug(slug)
  if (!article) return { title: "Ratgeber nicht gefunden" }

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    alternates: { canonical: `${site.baseUrl}/ratgeber/${slug}` },
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      url: `${site.baseUrl}/ratgeber/${slug}`,
      type: "article",
      publishedTime: article.datePublished,
    },
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
