import { TileServerEntity } from "./TileServerEntity"

export class TileServerProxy {
	tileServerEntity: TileServerEntity

	constructor(_tileServerEntity: TileServerEntity) {
		this.tileServerEntity = _tileServerEntity
	}

	async getProxiedResponse(xyz: { x: string, y: string, z: string }): Promise<Response> {
		const proxyUrl = this.getProxyUrl(xyz.x, xyz.y, xyz.z)
		let response = await fetch(proxyUrl)
		let proxiedResponse = new Response(response.body, response)
		proxiedResponse.headers.set("Access-Control-Allow-Origin", "*")
		return proxiedResponse
	}

	private getProxyUrl(x: string, y: string, z: string) {
		return this.tileServerEntity.endpoint
			.replace("{z}", z)
			.replace("{x}", x)
			.replace("{y}", y)
	}
}