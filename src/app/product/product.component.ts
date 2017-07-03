import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private products : Array<Product>;
  constructor() { }

  ngOnInit() {
    this.products = [
      new Product(1,"鼠标",2.99,3.5,"这是一个鼠标，是在学习angular时创建的",["电脑配件","办公设备"]),
      new Product(2,"键盘",3.99,4.5,"这是一个键盘，是在学习angular时创建的",["电脑配件","办公设备"]),
      new Product(1,"iphone",299.99,4.0,"这是一个手机，是在学习angular时创建的",["电脑数码","手机"]),
      new Product(1,"耳机",5.99,5.5,"这是一个耳机，是在学习angular时创建的",["影音娱乐"]),
      new Product(1,"数据线",2.99,3.5,"这是一个数据线，是在学习angular时创建的",["3C配件"]),
      new Product(1,"鼠标垫",0.99,2.5,"这是一个鼠标垫，是在学习angular时创建的",["办公设备"])
    ];
    this.products.push(new Product(1,"Angular从入门到放弃",0.99,2.5,"这是一本书，是在学习angular时创建的",["图书"]));
  }

}
export class Product{
  constructor(
    public id         : number,
    public title      : string,
    public price      : number,
    public rating     : number,
    public desc       : string,
    public categories : Array<string>
  ){}
}