先弄清楚几个概念
1. 构造函数
什么是构造函数呢？构造函数就是
2. 实例对象

原型链
---
```
每个实例对象（ object ）都有一个私有属性（称之为 __proto__ ）指向它的构造函数的原型对象（prototype ）。该原型对象也有一个自己的原型对象( __proto__ ) ，层层向上直到一个对象的原型对象为 null。根据定义，null 没有原型，并作为这个原型链中的最后一个环节
```

### 原型、原型链、构造器
- 针对构造函数的  
- 向上查找  

![](https://raw.githubusercontent.com/chenfengyanyu/my-web-accumulation/master/images/typeof/proto.jpeg)
### proto、prototype、constructor
- proto：事实上就是原型链指针！！

- prototype：上面说到这个是指向原型对象的

- constructor：每一个原型对象都包含一个指向构造函数的指针，就是constructor

### 代码展示
```js
class Base {
  static instance(){
    // TODO:返回绑定类的实例对象
    return new this();
  }
  name1(){
    // TODO:返回调用对象的类名
    return this.constructor.name;
  }

  static name2(){
    //返回绑定类的类名
    return this.name;
  }
}

class A extends Base{}
class B extends Base{}

  //========== 测试 =========
  
  // console.log(A.instance().name1()) // 'A'
  // console.log(B.instance().name1()) // 'B'
  // console.log(A.name2()) //'A'
  // console.log(B.name2()) //'B'
```

### 参考  
- [原型与原型链的理解](https://www.jianshu.com/p/f30fa27999e3)
- [JavaScript深入之从原型到原型链 ](https://github.com/mqyqingfeng/Blog/issues/2)
- [三分钟看完JavaScript原型与原型链](https://juejin.im/post/6844903567375990791)
- [MDN文档 继承与原型链](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
- [三张图搞懂JavaScript的原型对象与原型链](https://www.cnblogs.com/shuiyi/p/5305435.html)