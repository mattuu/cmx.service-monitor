// import { Request, Express } from "express";
// import * as bodyParser from "body-parser";
// import * as express from "express";
import { Request, Application } from "express";

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
