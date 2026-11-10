import { Hono } from 'hono'
import { healthRoutes } from './routes/health'

const app = new Hono()
app.route('/api', healthRoutes)

export default {
  port: 3001,
  fetch: app.fetch,
}
