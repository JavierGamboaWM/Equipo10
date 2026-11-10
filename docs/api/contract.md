# API Contract

## Implemented: Health Check

- **Method and path:** `GET /api/health`
- **Request:** no body.
- **Validation:** the response is validated with `healthResponseSchema`.
- **Success response:** `200`, `{ "status": "ok" }`.
- **Errors:** product errors are not documented yet.
- **Implementation:** `apps/api/src/routes/health.ts`.

### Success example

```json
{ "status": "ok" }
```

## Candidate and Application Operations

No product routes have been approved or implemented. The prototype suggests finding profiles, linking a profile to a role, and updating the application's stage/outcome. Define request, response, validation, permissions, and errors when the team approves those behaviors.

## Shared Types

Keep names and shapes aligned with `packages/contracts/src/index.ts`. Do not turn HTML demo options into enums or business rules without team review.

## Cross-Focus Verification

Review success and error examples with Frontend, Data, and QA. Align each field with the screen flow, criteria, and model; record who can read or change the data.
