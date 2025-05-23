
# Mouse-Click-Effect  

## Introduction  
**[Online demonstration(click to access)]((https://www.rockaz.top/GitHub-Project-Demo/Mouse-Click-Effect/))**
*But the website server is located in China*

This is an interactive web click effect library that generates dynamic text and animated balls when users click on the page. The effects include color-changing elements, smooth animations, and automatic cleanup, creating a playful and visually appealing user interaction.  

## Features  
- **Dynamic Text Effect**: Displays customizable text (e.g., "Rock~") at the click position with gradient color changes and a fade-out animation.  
- **Animated Balls**: Generates 12 colored balls (configurable quantity) arranged in a circular pattern around the click point. Balls expand, fade, and move outward during the animation.  
- **Auto-Cleanup**: Elements (text and balls) are automatically removed from the DOM after the animation completes.  
- **Color Variation**: Uses HSL color mode with time-based hue rotation for vibrant, dynamic color effects.  

## Usage  
1. **File Inclusion**:  
   Include the provided HTML, CSS, and JS files in your project. Ensure the file paths in `ApplicationExamples.html` match your project structure:  
   ```html
   <head>
       <link rel="stylesheet" href="click.css?v=1">
   </head>
   <body>
       <script src="click.js?v=1"></script>
   </body>
   ```  

2. **Test**:  
   Open `ApplicationExamples.html` in a browser. Click anywhere on the page to trigger the effects.  

## Customization  
Adjust the following parameters in `click.js` to customize the effects:  
- `ballCount`: Number of balls (default: 12).  
- `texts`: Text content array (default: `["Rock~"]`).  
- `radius`: Radius of the circular ball arrangement (default: 50px, affects initial ball positions).  

---

# 鼠标点击效果 

## 简介  
**[在线演示（点击访问）](https://www.rockaz.top/GitHub-Project-Demo/Popup-Component)**

这是一个网页交互式点击效果库，当用户点击页面时，会在点击位置生成动态文字和小球动画。效果包含颜色变化、流畅动画和自动清理功能，为用户交互增添趣味与视觉吸引力。  

## 功能特性  
- **动态文字效果**：在点击位置显示可自定义的文字（如"Rock~"），文字颜色渐变并伴随淡出动画。  
- **小球动画**：在点击点周围环形分布12个彩色小球（数量可配置），小球在动画过程中会缩放、淡化并向外移动。  
- **自动清理**：文字和小球元素在动画结束后会自动从DOM中移除，避免冗余。  
- **颜色动态变化**：采用HSL颜色模式，基于时间旋转色相，呈现鲜艳的动态色彩效果。  

## 使用方法  
1. **引入文件**：  
   将提供的HTML、CSS和JS文件添加到项目中，并确保`ApplicationExamples.html`中的文件路径与项目结构一致：  
   ```html
   <head>
       <link rel="stylesheet" href="click.css?v=1">
   </head>
   <body>
       <script src="click.js?v=1"></script>
   </body>
   ```  

2. **测试**：  
   在浏览器中打开`ApplicationExamples.html`，点击页面任意位置即可触发效果。  

## 自定义配置  
通过修改`click.js`中的以下参数调整效果：  
- `ballCount`：小球数量（默认：12）。  
- `texts`：文字内容数组（默认：`["Rock~"]`）。  
- `radius`：小球环形分布的半径（默认：50px，影响小球初始位置）。
