# Screen Flow

This flow summarizes the vertical proposed in `referral-pipeline-candidates2.html`. The population includes candidates with interview history, whether referred or sourced through another channel. The HTML is a discussion prototype, not an approved specification for access or eligibility.

## Initial Journey

| Screen or step | Action | Information shown or changed | Status / agreement |
|---|---|---|---|
| Role pipeline | Search or filter applications by role and stage | Linked profile, role, application stage, and outcome | Core proposed vertical; stage names remain open |
| Profile repository | Review an existing profile and link it to a role | Source and profile details; this action leaves the profile read-only | Proposed by the HTML; no real repository connection exists or is approved |
| Role application | Update the stage and record the outcome | Stage and outcome belong to the application, not the global profile | Part of the tracking goal; values and transitions remain open |
| Reusable pool | Search profiles for a future role using role and skills | Prior stages, recorded skills, and summary | Prototype concept; `Interview` / `Decision` is only a demo filter |
| Hiring-manager view | Review a summarized, anonymized profile | Profile summary without direct identifiers | Limited access was discussed; access mode and fields remain open |
| Administration / profiles | Maintain profiles, roles, skills, and accounts | Profile and configuration data | Appears in the prototype; not confirmed for the MVP |

## Interface States

Each approved view should cover loading, results, empty, and recoverable error states. In the first vertical, an empty state should explain that no applications match the current filter. Errors should preserve entered data when safe.

## Backend/API and Data Review

Each approved action must align with `docs/api/contract.md`, `docs/data/model.md`, and `packages/contracts/src/index.ts`. Keep the source profile separate from its role-specific applications. Do not derive enums, selection criteria, or permissions from demo values.
