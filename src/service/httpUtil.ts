/**
 * Created by pc-e on 2017/7/15.
 */
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpService {
  constructor(
    public http: Http) {
  }

  public ev = "dev";

  //private dev_server ="http://localhost:9001/";
  private dev_server ="http://www.yuyuehui.com:8000/mandi/";
  private pub_server ="https://elb.raise3d.com/fuzhiweb/";

  private dev_img_server = "https://dovhdr3rdpvpl.cloudfront.net/";
  private pub_img_server = "https://dovhdr3rdpvpl.cloudfront.net/";

  private dev_web_server = "https://cloud.raise3d.com/";
  private pub_web_server = "https://cloud.raise3d.com/";

  public httpServer(){
    if(localStorage.SERVER=='OWN'){
      return localStorage.SERVER_URL;
    } else{
       if('dev'==this.ev){
      return this.dev_server;
      } else{
        return this.pub_server;
      }
    }
  }
  public imgServer(){
    if(localStorage.SERVER=='OWN'){
      return localStorage.SERVER_IMG_URL;
    } else{
      if('dev'==this.ev){
        return this.dev_img_server;
      } else{
        return this.pub_img_server;
      }
    }
  }
  public webServer(){
    if('dev'==this.ev){
      return this.dev_web_server;
    } else{
      return this.pub_web_server;
    }
  }

  public httpGet(url: string) {

    var headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=UTF-8');
    let options = new RequestOptions({ headers: headers });
    return this.http.get(url, options).toPromise()
      .then(res => res.json())
      .catch(err => {
        this.handleError(err);
      });
  }
  public httpPost(url: string, body: any) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    let options = new RequestOptions({ headers: headers });
    let params=[];
    if(localStorage.CUR_USER !=null){
      params.push("Auth"+"="+encodeURIComponent(JSON.parse(localStorage.CUR_USER).access_ticket));
    }
    Object.keys(body).forEach(function (context) {
      params.push(context+'='+encodeURIComponent(body[context]));
      });
    return this.http.post(url, params.join('&'), options).toPromise()
      .then(res => res.json())
      .catch(err => {
        this.handleError(err);
      });
  }
  public httpJson(url: string, body: any) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=UTF-8');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(url, JSON.stringify(body), options).toPromise()
      .then(res => res.json())
      .catch(err => {
        this.handleError(err);
      });
  }

  private handleError(error: Response) {
    return Observable.throw(error.json().error || 'Server Error');
  }
}
