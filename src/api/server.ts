import { Application, Express } from "express";
// import * as express from "express";

export class Server {

	public app: Application

	constructor() {
		// code...
		// this.app = new Express();

		// this.config();
		//console.log("Constructor!")
	}

	public static bootstrap(): Server {
    	return new Server();
  	}

  public config() : void {
  	this.app.listen(3000);
  }
}
