import { Hono } from 'hono'
import { z, zValidator } from '~/utils/validator'
import logger from '~/utils/logger'
import prisma from '~/utils/prisma'

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
    async c => {
      const params = c.req.valid('param')
      const user = await prisma.users.findUnique({ where: { id: params.userId } })
      logger.debug(user)
      return c.json(user)
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
        email: z.coerce.string().email(),
        name: z.string(),
      })
    ),
    async c => {
      const params = c.req.valid('json')
      await prisma.users.create({ data: params })
      logger.debug(`id: ${typeof params.email} ${params.name}`)
      return c.text('', 201)
    }
  )

export default routes
