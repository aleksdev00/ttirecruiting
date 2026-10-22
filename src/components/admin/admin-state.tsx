import Link from "next/link";

type AdminStateProps = { eyebrow: string; title: string; copy: string; action?: string; href?: string };

export function AdminState({ eyebrow, title, copy, action, href }: AdminStateProps) {
  return <main className="admin-state-page"><div className="admin-state-card"><div className="admin-state-logo">TTI</div><span className="admin-kicker">{eyebrow}</span><h1>{title}</h1><p>{copy}</p>{action && href ? <Link className="admin-primary-button" href={href}>{action} <span aria-hidden>→</span></Link> : null}<small>Private workspace · Access is limited to two approved identities.</small></div></main>;
}
