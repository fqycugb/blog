
### 功能需求 
横向滚动，自动循环滚动

### 技术方案  
- 方案一 CSS3：animation + keyframes + transform
- 方案二 JS： 

### 使用说明  

### 实现代码  
```html
 <!DOCTYPE html>
 <html lang="en">
     <head>
         <meta charset="utf-8" />
         <title>自动滚动动画</title>
         <style>
           *{
             margin:0;
             padding:0;
           }
           .scroll-wrap{
            width:100vw;
            height:40vh;
            display:flex;
            overflow-x:auto;
            background-color:#ccc;

           }
           .scroll-item{
            width:25vw;
            height:40vh;
            font-size:50px;
            font-weight: bolder;
            flex-shrink: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: lightblue;
            animation: scroll-animation 10s linear infinite;
           }
           @keyframes scroll-animation{
             0%{
              transform:translateX(0vw);
             }
             100%{
               transform:translateX(-200vw);
             }
           }
         </style>
     </head>
     <body>
          <section class='scroll-wrap'>
            <div class='scroll-item'>1</div>
            <div class='scroll-item'>2</div>
            <div class='scroll-item'>3</div>
            <div class='scroll-item'>4</div>
            <div class='scroll-item'>5</div>
            <div class='scroll-item'>6</div>
            <div class='scroll-item'>7</div>
            <div class='scroll-item'>8</div>
            <div class='scroll-item'>9</div>
            <div class='scroll-item'>10</div>
            <div class='scroll-item'>11</div>
            <div class='scroll-item'>12</div>
          </section>
         <script>

         </script>
     </body>
 </html>
```

### 参考  
