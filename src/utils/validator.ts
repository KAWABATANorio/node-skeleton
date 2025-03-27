import { ZodSchema } from 'zod'
import type { ValidationTargets } from 'hono'
import { zValidator as zv } from '@hono/zod-validator'
import { HTTPException } from 'hono/http-exception'
import logger from './logger'
export { z } from 'zod'

export const zValidator = <T extends ZodSchema, Target extends keyof ValidationTargets>(target: Target, schema: T) =>
  zv(target, schema, result => {
    if (!result.success) {
      logger.debug(result.error)
      throw new HTTPException(400, { cause: result.error })
    }
  })
