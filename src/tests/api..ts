/*
 * API Tests
 *
 */
// todo: implement class based tests and test runner
// Dependencies
import app from "../index"
import assert from "assert"
import http from "http"
import config from "../lib/config"
import {StringDecoder} from "string_decoder"

// Holder for Tests
var api: any = {};

// Helpers
var helpers: any = {};
helpers.makeGetRequest = function(path: string, callback: any){
  // Configure the request details
  var requestDetails = {
    'protocol' : 'http:',
    'hostname' : 'localhost',
    'port' : config.httpPort,
    'method' : 'GET',
    'path' : path,
    'headers' : {
      'Content-Type' : 'application/json'
    }
  };


  // Send the request
  var req = http.request(requestDetails,function(res: any){
      callback(res);
  });
  req.end();
};

// The main init() function should be able to run without throwing.
api['app.start should start without throwing'] = function(done: any){
  assert.doesNotThrow(function(){
    try {
      app.start(function(err: string){
        done();
      })
    } catch (error) {
      throw error
    }
  },TypeError);
};

api['/ping should respond with a pong'] = function(done: any) {
  helpers.makeGetRequest("/ping", function(res: any){
    let decoder = new StringDecoder("utf-8")
    let data = ""
    res.on("data", (chunck: any) => { 
        data += decoder.write(chunck);
    }
      )
    res.on("end", () => {
      data += decoder.end()
      assert.strictEqual(data, "pong");
      done();
    })
  })
}

// Export the tests to the runner
export default api;
