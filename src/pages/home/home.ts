import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import { ProductService} from '../../service/product.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items:any;
  products:any;

  constructor(public navCtrl: NavController,public alert:AlertController,public productService:ProductService) {

  }

  ngOnInit(){
    this.getItems();
    this.getProducts({"type":''});
  }
  //获取类目
  getItems(){
    this.productService.listType().then(data=>{
      if(data.state==1){
        if(data.data.length>0){
          this.items = data.data;
        } else{
          let alert = this.alert.create({
            title: '消息提示!',
            subTitle: '服务器维护中，请稍后!',
            buttons: ['我知道了']
          });
          alert.present();
        }
      }
    });
  }

  //获取产品
  getProducts(params){
    this.productService.list(params).then(data=>{
      if(data.state==1){
        console.log(data);
        this.products = data.data.data;
      }
    });
  }

  //修改类型
  chgType(type_id,$event){
    let eles = document.getElementsByClassName('type-list');
    for(let i = 0;i<eles.length;i++){
      eles[i].setAttribute('class',eles[i].getAttribute('class').replace(' act',''));
    }
    $event.currentTarget.setAttribute('class',$event.currentTarget.getAttribute('class')+' act')
    this.getProducts({"product_type":type_id});
  }
}
