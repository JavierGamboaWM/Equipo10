# Architecture and Design

## Design Status

The repository contains a Bun workspace scaffold with a Hono API, a React + Vike app, and Zod contracts. The API implements only a health check. There is no database connection, Drizzle schema, recruiting integration, or candidate operation.

The profile/application separation below is an initial model suggested by the discussion and prototype. The team should review it before implementing storage.

## Components

- **Web:** React + Vike for reviewing profiles and applications, showing the pipeline, and editing only approved fields.
- **API:** Bun + Hono for validating and serving agreed operations.
- **Contracts:** shared Zod schemas to align forms, API payloads, types, and verification.
- **Data:** Drizzle ORM over SQL; the driver is undecided. Version migrations before changing the schema.
- **Source systems:** outside the first vertical. The prototype represents existing profiles without connecting to an external system.

## Proposed Data Flow

`Web → API → SQL`

A profile identifies a person and retains source data. An application links that profile to a role and contains the stage, outcome, and summary for that process. A person may have multiple applications. Updating an application must not overwrite the source profile.

A future search for reusable profiles could query prior applications and skills evidence for human review. The criteria are undefined and must not be implemented from the HTML's demo filter.

## Screen Flow

See `docs/product/screen-flow.md`. The first proposed path is to find an existing profile, link it to a role, and update that application's stage and outcome.

## Contracts and Model

- The current API contract documents only `GET /api/health`.
- Candidate and application routes have not been approved.
- `docs/data/model.md` describes candidate entities for review, not an approved database schema.
- Keep `packages/contracts/src/index.ts` aligned with any operation the team approves.

## Technical Decisions

- Approved foundation: Bun, Hono, React, strict TypeScript, Vike, Drizzle, and Zod.
- Pending: SQL driver and database/migration configuration.
- No AI provider or product AI feature is approved. The prototype does not establish automated evaluation.
- Authentication and real authorization are undefined; role selectors in the prototype only switch demo views.

## Cross-Focus Review

Before implementing an operation, agree on behavior, fields, permissions, and acceptance criteria across Frontend, Backend/API, Data, and QA. Review synthetic-data handling and the effect on the global profile versus each role application.
