import { testClient } from 'hono/testing'
import app from './index'

describe('users', () => {
  test('GET /users/:userId', async () => {
    const res = await testClient(app)[':userId'].$get({ param: { userId: '1' } })
    expect(res.status).toBe(200)
    expect(await res.json()).toEqual({ name: 's.jobs' })
  })

  test('POST /users', async () => {
    const res = await testClient(app).index.$post({ json: { userId: 1 } })
    expect(res.status).toBe(201)
  })
})
