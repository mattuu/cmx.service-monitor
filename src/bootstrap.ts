import { Server } from "./api";

export class Bootstrapper{
	constructor(){
	}
	 
	server: Server = new Server();

	public static Init(): void {

		console.log("BOOTSTRAPPER INIT()!");		
	}
}

Bootstrapper.Init();	