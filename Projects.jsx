import { kpis, gsc, snaps, seoTags, seoCards, creatives, channels } from '../data.js'
import Reveal from './Reveal.jsx'

const Kpi = ({ v, l }) => <div className="card kpi"><strong>{v}</strong><small>{l}</small></div>

export default function Projects() {
  return (
    <section id="work" className="alt">
      <div className="wrap">
        <p className="kicker">Live numbers · illustrative composites</p>
        <h2>Campaign performance</h2>
        <div className="grid g4 mt">{kpis.map(([v, l]) => <Reveal key={l}><Kpi v={v} l={l} /></Reveal>)}</div>

        <h3 className="sub">Organic search growth · Renote AI · Nov 2025 – May 2026</h3>
        <div className="org">
          <div>
            <div className="grid g2 tight">{gsc.map(([v, l]) => <Kpi key={l} v={v} l={l} />)}</div>
            <p className="mute">Applied on-page SEO, content, and technical improvements to renote.ai that grew organic clicks and search impressions over a sustained multi-month period, while holding an average top-10 search position.</p>
            <p className="note">KPI figures on this page are illustrative composites, as stated in the original portfolio.</p>
          </div>
          <img className="shot" src="/images/gsc-renote.jpg" width="1200" height="502" loading="lazy" alt="Google Search Console performance report for renote.ai" />
        </div>

        <h3 className="sub">Live Ads Manager snapshots</h3>
        <p className="lede">Real budget & spend views from managed campaigns — client and campaign identifiers blurred for confidentiality.</p>
        <div className="grid g2">
          {snaps.map((c, i) => (
            <Reveal as="figure" key={c}>
              <img className="shot" src={`/images/ads-${i + 1}.jpg`} width="1000" height="486" loading="lazy" alt={`Meta Ads Manager: ${c}`} />
              <figcaption>{c}</figcaption>
            </Reveal>
          ))}
        </div>

        <h3 className="sub">SEO contributions — Reelon</h3>
        <p className="kicker slim">Search growth · Jun 2026 – Jul 2026</p>
        <p className="mute">SEO audit & optimization work</p>
        <div className="pills gap">{seoTags.map((t) => <span className="pill" key={t}>{t}</span>)}</div>
        <div className="grid g3">
          {seoCards.map(([t, d]) => <Reveal className="card" key={t}><h3>{t}</h3><p className="mute">{d}</p></Reveal>)}
        </div>
        <div className="card outcome">
          <h3>Outcome</h3>
          <p className="mute">Contributed to ongoing SEO optimization initiatives that supported improved search visibility, stronger keyword relevance, and healthier organic performance trends across targeted business pages.</p>
        </div>
        <p className="note">Specific client metrics, URLs, and audit findings are kept confidential; figures shown across this portfolio are illustrative summaries only.</p>

        <h3 className="sub">ReNote AI creatives</h3>
        <p className="mute">Product and campaign creatives designed for the ReNote AI brand — 40+ delivered. A selection across four themes.</p>
        <p className="mute">Social channels managed Nov 2025 – May 2026: {channels}</p>
        <div className="gal">
          {creatives.map((t, i) => (
            <figure key={i}>
              <img src={`/images/creative-${String(i + 1).padStart(2, '0')}.jpg`} width="560" height="560" loading="lazy" alt={`ReNote AI creative — ${t}`} />
              <figcaption>{t}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
