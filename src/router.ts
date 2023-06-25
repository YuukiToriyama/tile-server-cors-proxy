import { Router } from "itty-router"

const router = Router()

router.get("/ritsumei-arc/meisai-sougou/:z/:x/:y", handlers => {
	const json = {
		x: handlers.params.x,
		y: handlers.params.y,
		z: handlers.params.z
	}
	return new Response(JSON.stringify(json), {
		headers: {
			"content-type": "application/json;charset=UTF-8"
		}
	})
})

export default router