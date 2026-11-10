# Requirements and Plan

## Objectives

- Prepare an MVP that lets recruiting track the history of people entering hiring processes, including interview participants from any source channel.
- Show which roles each person has been considered for and record stage and outcome per application.
- Retain useful information for human review when future roles open.
- Complete the project within the five-week training program and practice cross-focus work in an understandable repository.

## Scope

### Agreed Direction

- Include people entering the process regardless of referral status, and retain the history of candidates who have participated in interviews through other channels.
- Keep a person's profile distinct from applications to different roles.
- Track stage and outcome, and retain a summary of capabilities for human review in future roles.
- Keep recruiting responsible for coordination and candidate contact.

### First Vertical Proposed by the Prototype

1. Find an existing profile.
2. Link it to a role and create a role-specific application.
3. Update that application's stage and outcome without changing the source profile.

The HTML also shows a reusable pool, anonymized summaries for hiring managers, profile maintenance, and administration. These views are discussion concepts; the team must confirm whether they belong in the MVP.

### Outside the First Vertical Described

- Employee-submitted referrals.
- Integration or synchronization with the existing recruiting/referral system.
- Automated advancement, hiring, ranking, or matching decisions.
- Real candidate data or production deployment during initial project preparation.

## Initial Acceptance Criteria

These criteria derive from the prototype's first vertical and need team review before becoming implementation tickets:

- Recruiting can find an existing synthetic profile and link it to a role.
- Linking creates or represents an application for that role without editing the source profile.
- Stage and outcome are stored on the relevant application; one profile can have applications for multiple roles.
- The interface can find applications by role and stage.
- The future-candidate pool does not determine eligibility automatically; people define and review any reuse filters.
- Information presented to a hiring manager does not reveal direct identifiers until the team agrees on access and sharing flows.

## Current Point and Work Plan

| Milestone or activity | Initial owner | Date / period | Status based on the assets |
|---|---|---|---|
| Kick-off, team organization, and orientation to week-one deliverables | Team / program mentors | 3 Nov 2026 | Training context documented |
| Select the project and discuss flexible focus assignments | Team | 5 Nov 2026 | Project selected; initial focuses discussed |
| Define MVP direction and prepare an initial visual concept | Team | 6 Nov 2026 and later prototype | Direction and initial boundaries discussed; detailed rules remain open |
| Align the brief, criteria, plan, architecture, and repository with the week-one guide | Team | Week 1 | In progress; this update records the asset context |
| Break work down by focus and agree on the next increment | Team | Next coordination | Mentioned as a next step; completion is not confirmed by the assets |

## Team Coordination

The program suggests Frontend, Backend/API, Data, and QA focuses. The assignments discussed on 5 November are a flexible starting point:

| Team member | Initial focus discussed | Coordination |
|---|---|---|
| Nayib Vargas | Backend/API and data; possible deployment/cloud support | Coordinate contracts and model with Sergio and the other focuses |
| Sergio Mora Araya | Backend/API and data | Coordinate with Nayib; boundaries across API, data, and deployment remain open |
| Christopher Sanchez | Frontend / user experience | Work on the screen flow with Javier |
| Javier Gamboa Mora | Frontend / user experience and planning support | Support coordination; assignments remain flexible |
| Marcos Blanco | Mentor and reviewer | Questions, materials, and feedback on the repository and PR |

The team should review contracts, the data model, criteria, and decisions together before splitting dependent tasks.

## Dependencies and Open Decisions

- Define stages, transitions, and outcomes to retain per role.
- Define human criteria and role-specific checklists for considering a candidate reusable, including required skills and how to handle evidence from different or older processes.
- Agree on how a person's profile relates to applications for different roles and how to summarize the skills profile.
- Agree on what hiring managers can see, whether they use the app directly, and how summaries are anonymized.
- Confirm the profile source, loading method, and data ownership; connecting to the existing system was left as possible later work.
- Choose the SQL driver before configuring Drizzle, connections, or migrations.
- Decide whether a product-facing AI feature belongs in scope. Reading or summarizing feedback and mapping requirements were discussed as possibilities, not approved scope.
