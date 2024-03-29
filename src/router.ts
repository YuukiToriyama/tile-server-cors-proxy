import { Router } from "itty-router"
import { TileServerProxy } from "./TileServerProxy"

const router = Router()

router.get("/ritsumei-arc/meisai-sougou/:z/:x/:y", ({ params }) => {
	const tileServerProxy = new TileServerProxy({
		endpoint: 'https://www.arc.ritsumei.ac.jp/archive01/theater/image/PB/geo/maps/meisai_sougou/{z}/{x}/{y}.png'
	})
	return tileServerProxy.getProxiedResponse({
		x: params.x,
		y: params.y,
		z: params.z
	})
})

router.get("/ritsumei-arc/meisai-hasegawa/:z/:x/:y", ({ params }) => {
	const tileServerProxy = new TileServerProxy({
		endpoint: 'https://www.arc.ritsumei.ac.jp/archive01/theater/image/PB/geo/maps/meisai_hasegawa/{z}/{x}/{y}.png'
	})
	return tileServerProxy.getProxiedResponse({
		x: params.x,
		y: params.y,
		z: params.z
	})
})

router.get("/ritsumei-arc/kyoto-city-s28/:z/:x/:y", ({ params }) => {
	const tileServerProxy = new TileServerProxy({
		endpoint: 'https://www.arc.ritsumei.ac.jp/archive01/theater/image/PB/geo/maps/s28/{z}/{x}/{y}.png'
	})
	return tileServerProxy.getProxiedResponse({
		x: params.x,
		y: params.y,
		z: params.z
	})
})

export default router