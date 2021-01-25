import dotenv from 'dotenv'
import { create, router as Router, defaults } from 'json-server'
import routers from './routers'

const PORT = parseInt(`${process.env.FAKE_SERVER_PORT}`) || 3000

dotenv.config()
const server = create()
const router = Router(routers)
const middlewares = defaults()

server.use(middlewares)
server.use(router)
server.listen(PORT, () => {
    console.log('> Fake Server in runnig ~')
    console.log(`> Ready on http://localhost:${PORT}`)
})
