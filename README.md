# Zhuxiwen's project system
## 模块
### core模块 
core模块帮助加载root级的依赖注入服务，包括：restapi服务，interceptor，和APP_INITIALIZER

只允许appModule引入该模块一次。
### layout模块
该模块为应用顶层视图，分为passport（与权限相关的页面顶层布局）和normal布局（包含header和侧边栏，内容区域交由routing模块呈现），

### routing模块
该模块将致力于呈现页面主要内容视图

### shared模块
该模块主要用于导入导出共享第三方模块

## 设计架构

### 权限管理（基于session）
服务端进行session验证后，返回前端该用户相关的权限角色，该angular应用通过服务进行全局性的状态推送（behaviorSubject）

### 启动
在应用启动阶段会请求服务器关于该用户的相关权限，直到明确该用户状态后才会进入根组件。
在根组件中会监听用户的权限身份状态，根据不同身份返回不同页面（管理员or员工or锁定用户）

### 路由 
主要有routing模块以及其子特性模块的routing模块进行懒加载配置。
前端将配置路由守卫，用户只能访问与其身份（管理员，员工）匹配的页面。

### interceptor
由于对response错误处理的逻辑比较统一，所以将其从服务中分离了出来，这部分统一由一个interceptor进行转化处理成了success response，对于组件和服务来说，最后订阅到的response中将全部不包含error response。

--------------

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
