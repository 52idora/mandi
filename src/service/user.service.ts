import {Injectable} from "@angular/core";
import {HttpService} from "./httpUtil";
/**
 * Created by yuanrui on 2017/8/24.
 */

@Injectable()
export class UserService{

  constructor(private http:HttpService){}

  //用户信息
  find(param:any){
    return this.http.httpPost(this.http.httpServer()+'user/find',param).then(data=>data);
  }

  //修改密码
  //user_id password new_password
  pwdEdit(param:any){
  	return this.http.httpPost(this.http.httpServer()+'user/updatePwd',param).then(data=>data);
  }
}
