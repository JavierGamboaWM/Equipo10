# Data Model

This is a conceptual model for discussion; there is no Drizzle schema or connected database yet.

## Initial Entities

| Entity | Identifier | Candidate fields | Relationships | Status |
|---|---|---|---|---|
| CandidateProfile | `candidateId` | source/channel, summarized skills, and reference to source data | One person may have multiple applications | Profile/application separation is supported by the prototype; final fields are open |
| RoleApplication | `applicationId` | `candidateId`, role, stage, outcome, update date, and process summary | Belongs to one profile; one profile may have multiple applications | Role-specific tracking is supported by the discussion; stages and outcomes are open |
| Skill evidence | TBD identifier | skill, evidence or summary, process/role, date, and human author | May be associated with an application or profile | Consolidation and scale are undecided |

## Known and Proposed Rules

- Stages and outcomes belong to a specific application, not the global profile.
- The source profile remains read-only when linked to an application, according to the prototype's first vertical.
- Profiles and applications in fixtures are entirely synthetic.
- The team discussed retaining skill information across processes but did not decide whether to keep the latest assessment, average assessments, or retain each item of evidence separately. Do not infer one option.
- A reusable-pool filter must not be treated as an approved eligibility rule.

## Synthetic Fixture

Keep small, repeatable examples in `docs/data/fixtures/`. Do not use real names, emails, resumes, interview notes, or other candidate data. The current fixture illustrates referral and non-referral channels and sample application states; those values do not establish final enums.

## Verification

Before defining tables, confirm that each contract and acceptance-criteria field has a place in the model. Review identifiers, cardinality, per-role history, access constraints, and skills handling with Backend/API, Frontend, and QA.
