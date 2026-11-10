# Acceptance Criteria

These criteria describe the first vertical proposed by the prototype. The team should confirm them and complete the access criteria before turning them into implementation work.

## Criterion: Link an Existing Profile to a Role

- **Given** a synthetic profile that already appears in the repository
- **When** recruiting links it to a role
- **Then** an application is recorded for that profile and role without changing the source profile.

## Criterion: Update an Application

- **Given** a profile with an application for a role
- **When** recruiting records a stage or outcome change
- **Then** the change is reflected on that application and does not change the same profile's applications for other roles.

## Criterion: Review the Pipeline

- **Given** synthetic applications for different roles and stages
- **When** recruiting filters by role or stage
- **Then** only matching applications appear, with profile, role, stage, and outcome distinguishable.

## Criterion: Include Interviewed Candidates Without a Referral

- **Given** a synthetic profile whose source channel is not a referral and that has interview history
- **When** recruiting searches profiles or reviews prior applications
- **Then** that profile appears alongside referred candidates, with role, stage, and outcome history available for human review.

## Criterion: Review Reusable Profiles

- **Given** a profile that may be relevant to a future role
- **When** recruiting reviews prior information
- **Then** the interface presents evidence for human review and does not calculate an automated decision or ranking.

## Cases to Cover When the Flow Is Implemented

- Normal profile-linking and update flow.
- Profile without prior applications and empty filter state.
- Multiple applications for the same profile across different roles.
- Invalid input and recoverable API error.
- Anonymized view and identity controls once access rules are approved.

## Verification

- **Evidence:** capture screenshots, API responses, or execution results when the flow exists.
- **Command or procedure:** agree with the team as part of the first increment; the supplied assets contain no execution evidence.
- **Frontend review:** confirm filters, states, and messages are understandable and support recovery.
- **Cross-focus review:** confirm each criterion matches scope, screen flow, contract, model, and access decisions.
