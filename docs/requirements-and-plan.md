# Requisitos y plan

## Objetivos

[Definir los resultados que busca el equipo]

## Alcance dentro

[Enumerar lo que incluye el proyecto]

## Alcance fuera

[Enumerar lo que queda excluido]

## Criterios de aceptación

[Definir resultados observables en `docs/qa/acceptance.md`]

## Plan del proyecto

| Hito o tarea | Responsable | Fecha o periodo | Estado |
|---|---|---|---|
| [Completar] | [Completar] | [Completar] | [Completar] |

## Dependencias

[Enumerar las dependencias del proyecto]

## Coordinación del equipo

[Registrar focos, responsables y acuerdos de coordinación. Compartir contratos, criterios y decisiones entre los focos.]

| Foco | Entregable | Revisión compartida |
|---|---|---|
| Backend/API | `docs/api/contract.md` y `packages/contracts/src/index.ts` | Revisar un ejemplo de éxito y uno de error con Frontend, Datos y QA; alinear request, response y errores con el flujo, criterios y modelo. |
| Datos | `docs/data/model.md` y fixture sintético versionado | Confirmar que cada dato del contrato y los criterios tenga lugar en el modelo; revisar relaciones, campos requeridos y restricciones con ejemplos normal y límite. |
| Frontend | `docs/product/screen-flow.md` | Para cada paso, alinear acción y campos con el contrato; contemplar carga, resultado, vacío y error. |
| QA | `docs/product/brief.md` y `docs/qa/acceptance.md` | Escribir criterios Given / When / Then; incluir flujo normal, límite, entrada inválida y caso vacío o de error, con evidencia y comando de verificación acordados. |

Los focos coordinan el trabajo; el equipo revisa en conjunto los contratos, criterios y decisiones antes de dividir tareas dependientes.
