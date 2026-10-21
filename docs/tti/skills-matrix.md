# Skills matrix

| Skill/capability | Path | Relevance | Target phase | Decision | Evidence / limitation |
| --- | --- | --- | --- | --- | --- |
| PDF | `C:\Users\aleks\.codex\plugins\cache\openai-primary-runtime\pdf\26.1011.51657\skills\pdf\SKILL.md` | Supplied research PDFs | 01 | USED | Instructions read. Full extraction/render blocked by missing Poppler/Python/browser fallback. |
| Spreadsheets | `C:\Users\aleks\.codex\plugins\cache\openai-primary-runtime\spreadsheets\26.1011.51657\skills\spreadsheets\SKILL.md` | Google Sheet schema/import | 01, 07 | USED | Instructions read. Live Sheet access failed; synthetic importer work remains planned. |
| Browser control | `C:\Users\aleks\.codex\plugins\cache\openai-bundled\browser\26.721.41059\skills\control-in-app-browser\SKILL.md` | Rendered QA and public route inspection | 01, 12 | BLOCKED | Instructions read; browser bootstrap failed in this environment. |
| Pro design | `C:\Users\aleks\.codex\skills\pro-design\SKILL.md` | Original website UI and visual system | 03, 04, 06 | USED | Read and applied to the route-desk redesign, token reuse, component states, motion, and verification plan. |
| skillui | Not present in the available skill catalog | User-requested UI design capability | 04, 06 | UNAVAILABLE | No installed `skillui` skill was discoverable; pro-design and existing token/component guidance used as fallback. |
| Next.js / React guidance | Repository `AGENTS.md` and bundled Next docs | Existing App Router implementation | 05 onward | USED | Repository instructions read; local Next docs are available. |
| Auth/security | Available security/auth skill families | Two-person admin and protected mutations | 05, 10 | PLANNED | Must be selected after existing provider/configuration is identified. |
| Supabase / Postgres | Supabase skill family | Only if existing persistence uses Supabase | 05, 07-10 | PLANNED | No Supabase configuration or schema found yet. |
| Vercel | Vercel skill families | Preview/release and environment configuration | 11, 13 | PLANNED | No Vercel project linkage verified. |
| Image generation | `imagegen` | Approved original raster visuals | 04 | PLANNED | Do not fabricate team/partner proof. |
| Documents / presentations | Available document skills | Not required for launch artifacts | 01-13 | NOT APPLICABLE | Markdown reports are the specified handoff format. |
| AI SDK / agents | Available Vercel AI skills | No approved AI feature | 01-13 | NOT APPLICABLE | Out of scope. |
| Messaging / recipient resolution | Available connector capabilities | Only after explicit notification authorization | 08-10 | BLOCKED | No authorized recipient or staging notification contract. |
