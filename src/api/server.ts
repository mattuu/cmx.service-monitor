import { Request } from "express";

export class Server {
	constructor(private request: Request) {
		// code...
		console.log("Constructor!")
	}
}
