import { Application } from "express";

export class Server {

	public app: Application

	constructor() {
		// code...
		this.app = new Application();

		this.config();
		//console.log("Constructor!")
	}

	public static bootstrap(): Server {
    	return new Server();
  	}

  public config() : void {
  	this.app.listen(3000);
  }
}
