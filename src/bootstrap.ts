import { Server } from "src/api/server/index";

export class Bootstrapper{
	constructor(){
	}
	 
	server: Server = new Server();

	public static Init(): void {

		console.log("BOOTSTRAPPER INIT()!");		
	}
}

Bootstrapper.Init();	