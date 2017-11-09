/**
 * Created by yuanrui on 2017/9/17.
 */

import {Injectable} from "@angular/core";
import {HttpService} from "./httpUtil";
@Injectable()
export class ProductService{

  constructor(public http:HttpService){}

  /**
   * yuanrui
   * 2017-09-17
   * @param param
   */
  list(param:any){
    return this.http.httpJson(this.http.httpServer()+'api-v1.0.1/product/list',param).then(data=>data);
  }

  /**
   * yuanrui
   * 2017-09-17
   * @param
   */
  listType(){
    return this.http.httpGet(this.http.httpServer()+'api-v1.0.1/product/listType').then(data=>data);
  }
}
