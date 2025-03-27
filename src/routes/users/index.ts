import { Hono } from 'hono'
import { z, zValidator } from '~/utils/validator'
import logger from '~/utils/logger'

const routes = new Hono()
  /**
   * @api {get} /users/:userId get user
   * @apiVersion 1.0.0
   * @apiName getUser
   * @apiGroup User
   *
   * @apiParam {String} userId user id
   *
   * @apiSuccess {String} name name
   */
  .get(
    '/:userId',
    zValidator(
      'param',
      z.object({
        userId: z.coerce.number().int(),
      })
    ),
    c => {
      const params = c.req.valid('param')
      logger.debug(`id: ${typeof params.userId} ${params.userId}`)
      return c.json({
        name: 's.jobs',
      })
    }
  )

  /**
   * @api {post} /users/ post user
   * @apiVersion 1.0.0
   * @apiName getUser
   * @apiGroup User
   *
   * @apiBody {String} userId user id
   *
   */
  .post(
    '/',
    zValidator(
      'json',
      z.object({
        userId: z.number(),
      })
    ),
    c => {
      const params = c.req.valid('json')
      logger.debug(`id: ${typeof params.userId} ${params.userId}`)
      return c.text('', 201)
    }
  )

export default routes
