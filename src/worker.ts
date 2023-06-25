import apiRouter from "./router"

export default {
	async fetch(request: Request, _env: Env, _ctx: ExecutionContext): Promise<Response> {
		return apiRouter.handle(request)
	}
}