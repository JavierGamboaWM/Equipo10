# Team 10 · Candidate Pipeline

A training MVP concept for tracking candidates across hiring processes and waves, including people who participated in interviews through referrals or any other channel. The current direction is to start from an existing candidate profile, link it to a role, and track that role-specific application's stage and outcome. The team has not approved production use or an integration with the existing recruiting source.

## Quick start

Install Bun, then run these commands from the repository root:

```sh
bun install
bun run dev
```

The API and web development servers start together. To run one workspace:

```sh
bun run dev:api
bun run dev:web
```

Check TypeScript:

```sh
bun run typecheck
```

## Workspaces

- `apps/api`: Bun + Hono API; Drizzle is included, while the SQL database driver awaits an approved choice.
- `apps/web`: React + Vike (`vike-react`).
- `packages/contracts`: shared Zod schemas and types.

All candidate records in this repository must be synthetic. Candidate reuse rules, skill interpretation, hiring-manager access, and source-system integration remain open. See [AGENTS.md](AGENTS.md), the [product brief](docs/product/brief.md), the [screen flow](docs/product/screen-flow.md), and the [project plan](docs/requirements-and-plan.md).
