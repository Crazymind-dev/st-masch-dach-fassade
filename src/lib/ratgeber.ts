/**
 * Ratgeber-Verzeichnis. Die Artikel liegen als Einzeldateien in
 * src/lib/ratgeber-artikel/ (eine Datei pro Slug) und werden hier
 * zur ratgeberList zusammengesetzt. Typen: ./ratgeber-types.
 */

export type { RatgeberCategory, RatgeberBlock, Ratgeber } from "./ratgeber-types"
import type { Ratgeber } from "./ratgeber-types"

import { artikel as a0 } from "./ratgeber-artikel/tondachziegel-vs-betondachsteine"
import { artikel as a1 } from "./ratgeber-artikel/aufsparrendaemmung-vs-zwischensparrendaemmung"
import { artikel as a2 } from "./ratgeber-artikel/epdm-vs-bitumen-flachdach"
import { artikel as a3 } from "./ratgeber-artikel/asbest-dach-erkennen"
import { artikel as a4 } from "./ratgeber-artikel/mikrowechselrichter-vs-string-wechselrichter"
import { artikel as a5 } from "./ratgeber-artikel/wann-dach-sanieren"
import { artikel as a6 } from "./ratgeber-artikel/holzfaserdaemmung-vs-mineralwolle"
import { artikel as a7 } from "./ratgeber-artikel/gruendach-solar-kombination"
import { artikel as a8 } from "./ratgeber-artikel/indach-photovoltaik"

export const ratgeberList: Ratgeber[] = [a0, a1, a2, a3, a4, a5, a6, a7, a8]

export function getRatgeberBySlug(slug: string): Ratgeber | undefined {
  return ratgeberList.find((r) => r.slug === slug)
}

export function getRatgeberLabelBySlug(slug: string): string | undefined {
  return ratgeberList.find((r) => r.slug === slug)?.title
}

/** Reading time estimate based on ~220 wpm German. */
export function readingTimeMinutes(r: Ratgeber): number {
  const words =
    r.intro.split(/\s+/).length +
    r.blocks.reduce((sum, b) => {
      if (b.kind === "paragraph") return sum + b.body.split(/\s+/).length
      if (b.kind === "list") return sum + b.items.join(" ").split(/\s+/).length
      if (b.kind === "table") return sum + b.rows.flat().join(" ").split(/\s+/).length
      return sum
    }, 0) +
    r.meisterempfehlung.split(/\s+/).length +
    r.faqs.reduce(
      (sum, f) => sum + f.question.split(/\s+/).length + f.answer.split(/\s+/).length,
      0,
    )
  return Math.max(3, Math.round(words / 220))
}
