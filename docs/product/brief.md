# Application Context

## Purpose

Prepare a training MVP for tracking people who take part in hiring processes across hiring waves. The tracked population includes candidates who have participated in interviews, whether they were referred or entered through any other channel. The concept preserves process history so recruiting can review prior candidates when new roles open.

The latest prototype uses **Candidate Pipeline** as its working name. The project began as referral tracking, but the team clarified that interview history must include non-referred candidates as well.

## Users

- **Recruiter / recruiting team:** primary user; manages profiles and role applications, records stages and outcomes, and coordinates with hiring teams.
- **Hiring manager / team lead:** proposed secondary user; may review anonymized summaries of available profiles. Direct access and detail level are still undecided.
- **Candidate:** not a direct user in the MVP described by the supplied assets.

## Need

The team identified that it lacks a central view of who has participated in hiring processes, how far each person progressed, and what capabilities were recorded. The goal is to avoid starting from scratch when a prior candidate may be considered for another role. The person's profile must remain distinct from each role-specific application.

## Current Process Known from the Assets

The discussion refers to an existing referral source and recruiting-managed hiring processes. The assets do not fully document how records are received, reviewed, or updated today, and they do not confirm a technical connection to the source system.

## Constraints and Boundaries

- The first goal is to complete a training MVP. Any real use at the firm would require later validation.
- The initial concept starts from existing profiles. Employee referral submission and integration with the source system are outside the first vertical described.
- Use synthetic data only in this repository. Do not add real names, contact details, resumes, interview notes, or other candidate data.
- The app records information for human review. It does not score, rank, or automatically decide who should advance or be hired.
- Eligibility for a reusable pool and interpretation of skills depend on rules the team has not agreed on yet.

## Team Scope

- **Agreed direction:** track people entering hiring processes by stage and outcome, including interview participants who came through channels other than referrals, so recruiting can review profiles for future opportunities.
- **First vertical proposed by the prototype:** find an existing profile, link it to a role, and update that role application's stage and outcome while leaving the source profile unchanged.
- **Concept views in the prototype:** role pipeline, profile repository, reusable pool, limited hiring-manager view, and administration. The team still needs to confirm which views belong in the MVP.
- **Outside the first vertical:** direct referral submission, source-system synchronization, and automated evaluation or selection.

## Assumptions to Validate

- Stages and outcomes may differ by role; the final vocabulary and transitions are not agreed yet.
- One person may participate in more than one process and should have a separate application for each role.
- The information retained for future roles, reuse criteria, and how long prior assessments remain relevant need team decisions.
- Hiring managers may need anonymized summaries; the team still needs to decide whether they access the app directly or receive information through recruiting.
