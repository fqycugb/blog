原文地址：[What is Redux JS?](https://www.mindfiresolutions.com/blog/2018/04/what-is-redux-js/)  

![What-is-Redux-JS](https://www.mindfiresolutions.com/blog/wp-content/uploads/What-is-Redux-JS.jpg)

有很多web开发者问我们，Redux.js是什么？Redux是一个开源的JavaScript库，它能帮助开发者更容易的创建自定义的用户界面，将整个应用的状态维护在单个且不可变的状态树中。不可变的状态树并不是不能变化而是不能直接修改，每次应用的状态修改都要通过redux通过特殊的函数来创建一个新的对象。Redux受到函数式编程语言-Elm和Facebook的创建用户界面的应用框架-Flux的启发，[web开发者们](http://www.mindfiresolutions.com/web.htm)甚至有选择的将几个广泛被使用的框架整合进redux，然而Redux却不同于其他的Javascript库和mvc框架。

## 什么是Redux JS？ 可以从不同的方面来理解Redux Javascript库

### 支持函数式编程    
正如前面说的那样，Redux的设计受到函数式编程语言 -Elm的影响。它支持一些被广泛应用的函数式编程的概念 - 将函数视为“第一等公民”，将函数链式连接在一起，将函数作为参数传递，支持用户自定义函数。函数式编程的概念帮助开发者写出干净和更精细粒度函数的模块化代码。更精细粒度的函数可以提高代码的复用性，同时也能提高web应用的测试，调试和维护。

### 可以像使用Flux那样使用Redux  
除了支持函数式编程之外，Redux也受到Flux的影响 - Facebook为创建用户界面而开发的一种流行的应用程序架构。Flux支持单向数据流以及为应用程序创建易于理解的更新流程，简化了客户端web应用的开发。JavaScript程序员可以像使用类似于Flux的方式来使用Redux。但是Redux却不同于Flux。Flux改变应用的状态是通过多个stores并通过事件的形式来广播这些变化。不同于Flux，Redux不能利用一个dispatcher来发送payloads到已经注册过的回调函数中。

###  拥有3大核心板块  
根据设计可知，Redux是一个简单又轻量的JavaScript库。但是它有三个重要的板块组成( actions, reducers 和 store)使得Redux成为一个有效的应用的状态管理工具。Redux通过使用actions就像使用事件那样从应用程序发送数据到store。Actions从应用程序发送各种各样的重要数据，比如用户交互，表单提交，和内部事件到store。

Store被设计成一个拥有应用程序状态的对象。store提供了辅助函数以至于让开发者可以访问应用程序的状态，注册监听事件，和分发actions。另一方面，Reducer是一个专门修改应用程序数据（action发送过来的数据）状态的函数合集。它以一个action作为参数并且返回一个新的状态。因此，reducer主要负责改变应用程序的状态。

### 广泛使用纯函数  
由于Redux支持函数式编程，通过编写精细粒度的函数，开发者可以轻松的保持代码库的简洁，可维护和可重用。他们甚至可以选择使各个函数的作用范围和逻辑保持隔离。程序员也可以使用各种各样的函数 - 纯函数，匿名函数，高阶函数和闭包。与此同时，Redux广泛的使用纯函数。纯函数返回一个新的值，传入的参数不会改变函数中已有的值或者对象。不管返回值是多少，它的状态只与传入的参数有关。因此，纯函数比其他函数更容易预测。当使用Redux时，程序员可以利用纯函数返回想要的值并且不会改变已有的对象或者值。

### 兼容各类不同的前端界面库  
大量的web开发者将Redux与AngularJS或ReactJS结合使用。除了AngularJS和ReactJS之外，Redux还能与其他许多前端视图库兼容。因此，JavaScript程序员可以
将Redux和广泛使用的视图库，例如Ember，Meteor，[Vue.js](https://www.evernote.com/shard/s603/sh/b66b62a0-8216-40f4-8300-e1bcf00c15a8/081a19f7a78b07908e106acd542adf15)，Polymer和[Backbone.js](https://mindfiresolutions.tumblr.com/post/160691286879/backbonejs-features-every-web-developers-should)结合在一起。与此同时，他们还可以依靠强大的Redux生态系统来利用许多模版，中间件和工具。因此，一个前端开发者可以通过延伸Redux来轻松的管理应用程序的状态

### 简化复杂web应用的开发
目前，Redux比其他前端库和工具更受欢迎。通过支持函数式编程，它能让程序员更轻松的写出可阅读并且可复用的代码。与此同时，Redux通过要求JavaScript程序员遵守严格的代码重组准则保持代码的一致和易于理解。程序员可以通过将数据存储地点从服务端转移至客户端，进一步加快初始服务渲染的速度。开发者可以进一步利用Redux的第三方工具来实时监视Web应用程序的各个方面

### 有它自己的缺陷  
现在，Redux是使用最广泛的[JavaScript库](https://mindfiresolutions.tumblr.com/post/161994944229/7-new-javascript-libraries-that-web-developers)之一。从其用户群包括Twitter，Uber和Khan Academy的事实可以知道其有效性。然而，Redux，就像其他JavaScript库一样有其缺陷。例如，它要求JavaScript程序员写其他的代码去捕获简单的UI变化和诸如按钮点击的用户操作。
许多程序员抱怨说，reducers不能使他们顺利的在不同任务之间切换。然而，前端开发者们可以通过与强大的视图库集成来轻松的克服这些Redux缺陷。

目前，[JavaScript开发者们](http://www.mindfiresolutions.com/Offshore-Javascript-AJAX-Development-India.htm)正在广泛的使用Redux来有效管理应用的状态。与此同时，Redux帮助开发者们编写简洁，可复用和可维护的代码并且简化测试和调试。JavaScript程序员甚至可以将几个广泛应用的前端视图库整合在一起。同样，他们可以使用各种第三方工具，中间件和模版来延伸Redux。