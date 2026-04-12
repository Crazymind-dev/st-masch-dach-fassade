/**
 * Server component that emits schema.org JSON-LD in a <script>.
 * Use as many instances per page as needed (LocalBusiness in layout,
 * FAQPage + Service + BreadcrumbList per page where relevant).
 *
 * Safe use of dangerouslySetInnerHTML: the `data` argument is constructed
 * entirely from developer-controlled config and static strings and is
 * serialized via JSON.stringify, which escapes all control characters.
 * There is no user-supplied content in the schema.
 */
export default function JsonLd({ data }: { data: object }) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c")
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: json }}
    />
  )
}
