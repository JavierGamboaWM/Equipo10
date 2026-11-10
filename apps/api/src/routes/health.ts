import { Hono } from 'hono'
import { healthResponseSchema } from '@equipo10/contracts'

export const healthRoutes = new Hono().get('/health', (context) => {
  const body = healthResponseSchema.parse({ status: 'ok' })
  return context.json(body)
})
