import { TileServerEntity } from "./TileServerEntity"

export class TileServerProxy {
	tileServerEntity: TileServerEntity

	constructor(_tileServerEntity: TileServerEntity) {
		this.tileServerEntity = _tileServerEntity
	}

	async getProxiedResponse(xyz: { x: string, y: string, z: string }): Promise<Response> {
		const proxyUrl = this.getProxyUrl(xyz.x, xyz.y, xyz.z)
		let response = await fetch(proxyUrl)
		return this.appendCorsHeader(response, "*")
	}

	private getProxyUrl(x: string, y: string, z: string) {
		return this.tileServerEntity.endpoint
			.replace("{z}", z)
			.replace("{x}", x)
			.replace("{y}", y)
	}

	private appendCorsHeader(response: Response, origin: string): Response {
		const corsAppendedResponse = new Response(response.body, response)
		corsAppendedResponse.headers.set("Access-Control-Allow-Origin", origin)
		return corsAppendedResponse
	}
}