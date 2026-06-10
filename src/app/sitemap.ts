import type { MetadataRoute } from "next"
import { site } from "@/lib/config"
import { services } from "@/lib/services"
import { solarTopics } from "@/lib/solar-topics"
import { fassadeTopics } from "@/lib/fassade-topics"
import { ratgeberList } from "@/lib/ratgeber"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: site.baseUrl, lastModified: now, changeFrequency: "monthly", priority: 1.0 },
    { url: `${site.baseUrl}/leistungen`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.baseUrl}/solar`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.baseUrl}/foerderung`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.baseUrl}/foerderung/foerderservice-plus`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${site.baseUrl}/ratgeber`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${site.baseUrl}/ueber-uns`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    { url: `${site.baseUrl}/referenzen`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${site.baseUrl}/kontakt`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    { url: `${site.baseUrl}/impressum`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${site.baseUrl}/datenschutz`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ]

  const leistungenRoutes: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${site.baseUrl}/leistungen/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }))

  const solarRoutes: MetadataRoute.Sitemap = solarTopics.map((t) => ({
    url: `${site.baseUrl}/solar/${t.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }))

  const fassadeRoutes: MetadataRoute.Sitemap = fassadeTopics.map((t) => ({
    url: `${site.baseUrl}/leistungen/fassade/${t.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.75,
  }))

  const ratgeberRoutes: MetadataRoute.Sitemap = ratgeberList.map((r) => ({
    url: `${site.baseUrl}/ratgeber/${r.slug}`,
    lastModified: new Date(r.datePublished),
    changeFrequency: "yearly",
    priority: 0.75,
  }))

  return [
    ...staticRoutes,
    ...leistungenRoutes,
    ...solarRoutes,
    ...fassadeRoutes,
    ...ratgeberRoutes,
  ]
}
