import { Hono } from 'hono'
import { handle } from 'hono/aws-lambda'
import { logger } from 'hono/logger'
import routes from './routes'

const app = new Hono()
app.use(logger())
app.route('/', routes)

export const handler = handle(app)
