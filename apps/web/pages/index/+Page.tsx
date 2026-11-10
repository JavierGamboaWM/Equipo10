import '../../src/index.css'

export default function Page() {
  return (
    <main className="workspace">
      <header className="page-header">
        <p className="eyebrow">Team 10 · Talent workspace</p>
        <h1>Candidate Pipeline</h1>
        <p className="intro">
          A training MVP concept for following candidates across hiring roles and waves.
        </p>
      </header>

      <section className="concept-card" aria-labelledby="vertical-slice-title">
        <div className="section-kicker">Proposed first vertical</div>
        <h2 id="vertical-slice-title">From an existing profile to a role pipeline</h2>
        <ol className="flow-list">
          <li>
            <span className="step-number">1</span>
            <span><strong>Choose a profile</strong><small>Use an existing profile as read-only source data.</small></span>
          </li>
          <li>
            <span className="step-number">2</span>
            <span><strong>Link it to a role</strong><small>Keep each role application separate from the person profile.</small></span>
          </li>
          <li>
            <span className="step-number">3</span>
            <span><strong>Record progress</strong><small>Track the application stage and outcome for human review.</small></span>
          </li>
        </ol>
      </section>

      <aside className="scope-note" aria-label="Prototype scope">
        <strong>Concept in progress</strong>
        <p>
          This screen records the current direction, not a working pipeline. Source-system
          integration, reuse criteria, candidate skills rules, and hiring-manager access still
          need team decisions. The app must not rank or evaluate candidates automatically.
        </p>
      </aside>
    </main>
  )
}
