const itemsFn = (value: Array<string> | string) => {
  if (Array.isArray(value)) {
    return value.map((item, _index) => {
      let nameArr = item.split('/');
      let name = nameArr[nameArr.length - 1];
      return {
        text: name,
        link: item,
      };
    });
  } else {
    let nameArr = value.split('/');
    let name = nameArr[nameArr.length - 1];
    return {
      text: name,
      link: value,
    };
  }
};

export const sidebarZh: any = {
  '/web/javascript/': [
    {
      text: '设计模式',
      link: '/web/javascript/设计模式.md',
    },
    {
      text: 'JS高级',
      link: '/web/javascript/JS高级.md',
    },
    {
      text: 'Zepto',
      link: '/web/javascript/Zepto.md',
    },
    {
      text: 'Sass、Less',
      collapsed: false,
      items: [
        {
          text: 'Less and Sass',
          link: '/web/javascript/Less and Sass/Less and Sass.md',
        },
        {
          text: '1、相关介绍',
          link: '/web/javascript/Less and Sass/1、相关介绍.md',
        },
        {
          text: '2、环境配置',
          link: '/web/javascript/Less and Sass/2、环境配置.md',
        },
        {
          text: '3、SassScript',
          link: '/web/javascript/Less and Sass/3、SassScript.md',
        },
      ],
    },
    {
      text: 'html5',
      collapsed: true,
      items: [
        {
          text: 'HTML5',
          link: '/web/javascript/html5/HTML5.md',
        },
        {
          text: '弹性盒子',
          link: '/web/javascript/html5/弹性盒子.md',
        },
      ],
    },
    {
      text: '移动端',
      collapsed: true,
      items: [
        {
          text: '前言介绍',
          link: '/web/javascript/移动端/移动端.md',
        },
      ],
    },
    {
      text: 'ES6',
      collapsed: true,
      items: [
        {
          text: '01.ECMAScript 6 简介.md',
          link: '/web/javascript/eS6/01.ECMAScript 6 简介.md',
        },
        {
          text: '02.let与const.md',
          link: '/web/javascript/eS6/02.let与const.md',
        },
        {
          text: '03 解构赋值.md',
          link: '/web/javascript/eS6/03 解构赋值.md',
        },
        {
          text: '04 字符串新特性.md',
          link: '/web/javascript/eS6/04 字符串新特性.md',
        },
        {
          text: '05 字符串新方法.md',
          link: '/web/javascript/eS6/05 字符串新方法.md',
        },
        {
          text: '06 数值新特性.md',
          link: '/web/javascript/eS6/06 数值新特性.md',
        },
        {
          text: '07 ES5 数组变化.md',
          link: '/web/javascript/eS6/07 ES5 数组变化.md',
        },
        {
          text: '08 数组新特性.md',
          link: '/web/javascript/eS6/08 数组新特性.md',
        },
        {
          text: '09 对象新特性.md',
          link: '/web/javascript/eS6/09 对象新特性.md',
        },
        {
          text: '10 对象新方法.md',
          link: '/web/javascript/eS6/10 对象新方法.md',
        },
        {
          text: '11 函数新方法.md',
          link: '/web/javascript/eS6/11 函数新方法.md',
        },
        {
          text: '12 新增数据类型和数据结构.md',
          link: '/web/javascript/eS6/12 新增数据类型和数据结构.md',
        },
        {
          text: '13 遍历器.md',
          link: '/web/javascript/eS6/13 遍历器.md',
        },
        {
          text: '14 生成器 Generator.md',
          link: '/web/javascript/eS6/14 生成器 Generator.md',
        },
        {
          text: '15 Proxy.md',
          link: '/web/javascript/eS6/15 Proxy.md',
        },
        {
          text: '16 Peflect.md',
          link: '/web/javascript/eS6/16 Peflect.md',
        },
        {
          text: '17 Class 基本语法.md',
          link: '/web/javascript/eS6/17 Class 基本语法.md',
        },
        {
          text: '18 Class 的继承.md',
          link: '/web/javascript/eS6/18 Class 的继承.md',
        },
      ],
    },
  ],
  '/web/typescript/': [
    {
      text: '基本数据类型',
      link: '/web/typescript/基本数据类型.md',
    },
    {
      text: '范型',
      link: '/web/typescript/范型.md',
    },
    {
      text: 'infer',
      link: '/web/typescript/infer.md',
    },
    {
      text: '协变逆变',
      link: '/web/typescript/协变逆变.md',
    },
    {
      text: 'Utility-Types',
      collapsed: false,
      items: [
        {
          text: 'Partial.md',
          link: '/web/typescript/UtilityTypes/Partial.md',
        },
        {
          text: 'Record.md',
          link: '/web/typescript/UtilityTypes/Record.md',
        },
        {
          text: 'Exclude.md',
          link: '/web/typescript/UtilityTypes/Exclude.md',
        },
        {
          text: 'Omit.md',
          link: '/web/typescript/UtilityTypes/Omit.md',
        },
        {
          text: 'Required.md',
          link: '/web/typescript/UtilityTypes/Required.md',
        },
        {
          text: 'Readonly.md',
          link: '/web/typescript/UtilityTypes/Readonly.md',
        },
        {
          text: 'Pick.md',
          link: '/web/typescript/UtilityTypes/Pick.md',
        },
        {
          text: 'Capitalize.md',
          link: '/web/typescript/UtilityTypes/Capitalize.md',
        },
        {
          text: 'ConstructorParameters.md',
          link: '/web/typescript/UtilityTypes/ConstructorParameters.md',
        },
        {
          text: 'Extract.md',
          link: '/web/typescript/UtilityTypes/Extract.md',
        },
        {
          text: 'ThisType.md',
          link: '/web/typescript/UtilityTypes/ThisType.md',
        },
        {
          text: 'InstanceType.md',
          link: '/web/typescript/UtilityTypes/InstanceType.md',
        },
        {
          text: 'NonNullable.md',
          link: '/web/typescript/UtilityTypes/NonNullable.md',
        },
        {
          text: 'OmitThisParameter.md',
          link: '/web/typescript/UtilityTypes/OmitThisParameter.md',
        },
        {
          text: 'Parameters.md',
          link: '/web/typescript/UtilityTypes/Parameters.md',
        },
        {
          text: 'ReturnType.md',
          link: '/web/typescript/UtilityTypes/ReturnType.md',
        },
        {
          text: 'ThisParameterType.md',
          link: '/web/typescript/UtilityTypes/ThisParameterType.md',
        },
        {
          text: 'Uncapitalize.md',
          link: '/web/typescript/UtilityTypes/Uncapitalize.md',
        },
        {
          text: 'Uppercase.md',
          link: '/web/typescript/UtilityTypes/Uppercase.md',
        },
        {
          text: 'Utility Types.md',
          link: '/web/typescript/UtilityTypes/Utility Types.md',
        },
      ],
    },
  ],
  '/web/threejs/': [
    {
      text: 'threeJS.md',
      link: '/web/threejs/three.JS库',
    },
    {
      text: 'react-three-fiber',
      collapsed: true,
      items: [
        {
          text: 'index.md',
          link: '/web/threejs/react-three-fiber/index.md',
        },
        {
          text: 'use.md',
          link: '/web/threejs/react-three-fiber/use.md',
        },
        {
          text: 'canvas.md',
          link: '/web/threejs/react-three-fiber/canvas.md',
        },
        {
          text: '对象、属性和构造函数参数.md',
          link: '/web/threejs/react-three-fiber/对象、属性和构造函数参数.md',
        },
        {
          text: 'hooks.md',
          link: '/web/threejs/react-three-fiber/hooks.md',
        },
        {
          text: 'event.md',
          link: '/web/threejs/react-three-fiber/event.md',
        },
        {
          text: 'Additional-Exports.md',
          link: '/web/threejs/react-three-fiber/Additional-Exports.md',
        },
        {
          text: '扩展性能.md',
          link: '/web/threejs/react-three-fiber/扩展性能.md',
        },
        {
          text: '性能陷阱.md',
          link: '/web/threejs/react-three-fiber/性能陷阱.md',
        },
        {
          text: '加载模型.md',
          link: '/web/threejs/react-three-fiber/加载模型.md',
        },
        {
          text: '加载纹理.md',
          link: '/web/threejs/react-three-fiber/加载纹理.md',
        },
      ],
    },
    {
      text: 'react-three-deri',
      collapsed: true,
      items: [
        {
          text: '前言.md',
          link: '/web/threejs/react-three-deri/index.md',
        },
      ],
    },
  ],
  '/web/webGL/': [
    {
      text: '原理',
      link: '/web/webGL/原理.md',
    },
    {
      text: 'Canvas',
      collapsed: true,
      items: [
        {
          text: 'canvas',
          link: '/web/webGL/Canvas/canvas.md',
        },
        {
          text: 'konva',
          link: '/web/webGL/Canvas/konva.md',
        },
      ],
    },
  ],
  '/web/cI-CD/': [
    {
      text: '前言',
      collapsed: true,
      items: [
        {
          text: '前言',
          link: '/web/cI-CD/前言',
        },
        {
          text: 'CI工具',
          link: '/web/cI-CD/工具',
        },
        {
          text: 'runner',
          link: '/web/cI-CD/runner',
        },
        {
          text: '配置事例',
          link: '/web/cI-CD/配置事例',
        },
      ],
    },
  ],
  '/web/vue/': [
    {
      text: '介绍',
      link: '/web/vue/vue',
    },
    {
      text: 'vue组件之间通信方式',
      link: '/web/vue/vue组件之间通信方式',
    },
    {
      text: 'vuex',
      link: '/web/vue/vuex',
    },
    // {
    //   text: 'vue-router',
    //   collapsed: true,
    //   items: [
    //     {
    //       text: '1-vue-router',
    //       link: '/web/vue/vue-router/1-vue-router'
    //     },
    //     {
    //       text: '2-异步请求',
    //       link: '/web/vue/vue-router/2-异步请求'
    //     },
    //     {
    //       text: '3-devTools',
    //       link: '/web/vue/vue-router/3-devTools'
    //     },
    //     {
    //       text: '4-动态路由',
    //       link: '/web/vue/vue-router/4-动态路由'
    //     },
    //     {
    //       text: '5-queryString',
    //       link: '/web/vue/vue-router/5-queryString'
    //     },
    //     {
    //       text: '6-路由守卫',
    //       link: '/web/vue/vue-router/6-路由守卫'
    //     },
    //     {
    //       text: '7-嵌套路由',
    //       link: '/web/vue/vue-router/7-嵌套路由'
    //     },
    //     {
    //       text: '8-重定向与别名',
    //       link: '/web/vue/vue-router/8-重定向与别名'
    //     },
    //     {
    //       text: '9-路由组件传参',
    //       link: '/web/vue/vue-router/9-路由组件传参'
    //     },
    //     {
    //       text: '10-路由数据获取',
    //       link: '/web/vue/vue-router/10-路由数据获取'
    //     },
    //     {
    //       text: '11-路由动效',
    //       link: '/web/vue/vue-router/11-路由动效'
    //     },
    //     {
    //       text: '12-滚动行为',
    //       link: '/web/vue/vue-router/12-滚动行为'
    //     },
    //     {
    //       text: '13-路由元信息',
    //       link: '/web/vue/vue-router/13-路由元信息'
    //     },
    //     {
    //       text: '14-路由懒加载',
    //       link: '/web/vue/vue-router/14-路由懒加载'
    //     }
    //   ]

    // },
  ],
  '/web/webpack/': [
    {
      text: 'Webpack',
      collapsed: true,
      items: [
        {
          text: '',
          link: '/web/webpack/',
        },
        {
          text: '构建流程',
          link: '/web/webpack/构建流程',
        },
        {
          text: '理解',
          link: '/web/webpack/理解',
        },
        {
          text: '提高构建速度',
          link: '/web/webpack/提高构建速度',
        },
        {
          text: '优化前端性能',
          link: '/web/webpack/优化前端性能',
        },
        {
          text: 'Loader',
          link: '/web/webpack/Loader',
        },
        {
          text: 'Loader和Plugin',
          link: '/web/webpack/Loader和Plugin',
        },
        {
          text: 'Plugin',
          link: '/web/webpack/Plugin',
        },
        {
          text: 'webpack_proxy',
          link: '/web/webpack/webpack_proxy',
        },
        {
          text: 'webpack热更新',
          link: '/web/webpack/webpack热更新',
        },
      ],
    },
  ],
  '/web/react/': [
    {
      text: 'React',
      collapsed: true,
      items: [
        {
          text: '前言',
          link: '/web/react/',
        },
      ],
    },
  ],
  '/tests/cypress/': [
    {
      text: 'cypress',
      collapsed: true,
      items: itemsFn([
        '/tests/cypress/',
        '/tests/cypress/1. 环境搭建',
        '/tests/cypress/2. 第一个脚本',
        '/tests/cypress/3. 元素获取',
        '/tests/cypress/4. 父子元素',
        '/tests/cypress/5. check',
        '/tests/cypress/6. 获取元素属性',
        '/tests/cypress/7. 导航访问',
        '/tests/cypress/8. 请求与拦截',
        '/tests/cypress/9. submit',
        '/tests/cypress/10. as',
        '/tests/cypress/11. Cookie',
        '/tests/cypress/12. 接口登录与存储',
        '/tests/cypress/13. 等待元素执行',
        '/tests/cypress/14. 滑动到某个元素',
        '/tests/cypress/15. 滚动到指定位置',
        '/tests/cypress/16. 读写文件',
        '/tests/cypress/17. 聚焦元素',
        '/tests/cypress/18. 屏幕截图',
        '/tests/cypress/19. 断言',
      ]),
    },
  ],
  '/tests/playwright/': [
    {
      text: 'playwright',
      collapsed: true,
      items: itemsFn(['/tests/playwright/']),
    },
  ],

  //---------------------------------------------------------------

  '/interviews/code/': [
    '/interviews/code/',
    {
      text: 'code',
      collapsed: true,
      items: itemsFn(['/interviews/code/eventFn.md']),
    },
  ],

  // --------------------------------------------------------------
  '/service/node/': [
    {
      text: 'nodejs',
      collapsed: true,
      items: itemsFn(['/service/node/']),
    },
  ],
  '/service/rust/': [
    {
      text: 'Rust',
      collapsed: true,
      items: itemsFn(['/service/rust/', '/service/rust/安装.md']),
    },
  ],
  '/service/go/': [
    {
      text: 'Golang',
      collapsed: true,
      items: itemsFn(['/service/go/前言', '/service/go/package']),
    },
    {
      text: '基础参考',
      collapsed: true,
      items: itemsFn([
        '/service/go/基础参考/channel',
        '/service/go/基础参考/interface',
        '/service/go/基础参考/map',
      ]),
    },
    {
      text: '进阶',
      collapsed: true,
      items: itemsFn([
        '/service/go/进阶/atomic',
        '/service/go/进阶/context',
        '/service/go/进阶/reflect',
        '/service/go/进阶/sync',
      ]),
    },
    {
      text: 'Gin',
      collapsed: true,
      items: itemsFn(['/service/go/gin/前言', '/service/go/gin/structTag']),
    },
    {
      text: '反射(reflect)性能',
      link: '/service/go/反射(reflect)性能',
    },
  ],
  '/service/docker/': [
    {
      text: 'Docker',
      collapsed: true,
      items: [
        {
          text: '前言',
          link: '/service/docker/',
        },
        {
          text: 'dockerfile',
          link: '/service/docker/dockerfileMd',
        },
      ],
    },
  ],
  '/service/mongodb/': ['/service/mongodb/'],
  '/service/mysql/': ['/service/mysql/'],
  '/service/elasticsearch/': ['/service/elasticsearch/'],
  '/service/redis/': ['/service/redis/'],
  // --------------------------------------------------------------

  '/flutter/': [
    itemsFn('/flutter/路由导航.md'),
    {
      text: 'Dart',
      collapsed: true,
      items: itemsFn([
        '/flutter/dart/',
        '/flutter/dart/数据类型.md',
        '/flutter/dart/变量定义.md',
        '/flutter/dart/class.md',
        '/flutter/dart/list.md',
        '/flutter/dart/map.md',
      ]),
    },
    {
      text: 'widget',
      collapsed: true,
      items: [
        itemsFn('/flutter/widget/'),
        itemsFn('/flutter/widget/组件导航.md'),
        {
          text: '基础组件',
          collapsed: true,
          items: itemsFn([
            '/flutter/widget/基础组件/Container.md',
            '/flutter/widget/基础组件/Scaffold、Appbar.md',
            '/flutter/widget/基础组件/Row、Column.md',
            '/flutter/widget/基础组件/Image、Icon.md',
            '/flutter/widget/基础组件/Text.md',
            '/flutter/widget/基础组件/TextField.md',
            '/flutter/widget/基础组件/Form.md',
            '/flutter/widget/基础组件/Switch、Checkbox.md',
          ]),
        },
        {
          text: '滚动组件',
          collapsed: true,
          items: itemsFn([
            '/flutter/widget/滚动组件/ListView.md',
            '/flutter/widget/滚动组件/GridView.md',
            '/flutter/widget/滚动组件/SingleChildScrollView.md',
            '/flutter/widget/滚动组件/CustomScrollView.md',
            '/flutter/widget/滚动组件/NestedScrollView.md',
            '/flutter/widget/滚动组件/PageView.md',
            '/flutter/widget/滚动组件/RefreshIndicator.md',
            '/flutter/widget/滚动组件/Scrollable.md',
            '/flutter/widget/滚动组件/NotificationListener.md',
            '/flutter/widget/滚动组件/Scrollbar.md',
            '/flutter/widget/滚动组件/ScrollConfiguration.md',
            '/flutter/widget/滚动组件/AnimatedList.md',
          ]),
        },
        {
          text: 'Sliver组件',
          collapsed: true,
          items: itemsFn([
            '/flutter/widget/Sliver组件/',
            '/flutter/widget/Sliver组件/SliverAppBar.md',
            '/flutter/widget/Sliver组件/SliverList.md',
            '/flutter/widget/Sliver组件/SliverGrid.md',
            '/flutter/widget/Sliver组件/SliverPadding.md',
            '/flutter/widget/Sliver组件/SliverAnimatedOpacity.md',
            '/flutter/widget/Sliver组件/SliverAnimatedList.md',
            '/flutter/widget/Sliver组件/SliverToBoxAdapter.md',
            '/flutter/widget/Sliver组件/SliverFillViewport.md',
            '/flutter/widget/Sliver组件/sliverChildBuilderDelegate.md',
            '/flutter/widget/Sliver组件/SliverFixedExtentList.md',
            '/flutter/widget/Sliver组件/SliverFillRemaining.md',
            '/flutter/widget/Sliver组件/SliverPersistentHeader.md',
            '/flutter/widget/Sliver组件/SliverPrototypeExtentList.md',
            '/flutter/widget/Sliver组件/SliverOpacity.md',
            '/flutter/widget/Sliver组件/SliverIgnorePointer.md',
            '/flutter/widget/Sliver组件/SliverOverlapInjector.md',
            '/flutter/widget/Sliver组件/SliverOverlapAbsorber.md',
            '/flutter/widget/Sliver组件/SliverAnimatedPadding.md',
            '/flutter/widget/Sliver组件/SliverAnimatedPositioned.md',
          ]),
        },
        {
          text: '按钮组件',
          collapsed: true,
          items: itemsFn([
            '/flutter/widget/按钮组件/ButtonBar.md',
            '/flutter/widget/按钮组件/DropdownButton.md',
            '/flutter/widget/按钮组件/FlatButton.md',
            '/flutter/widget/按钮组件/FloatingActionButton.md',
            '/flutter/widget/按钮组件/IconButton.md',
            '/flutter/widget/按钮组件/PopupMenuButton.md',
            '/flutter/widget/按钮组件/ElevatedButton.md',
          ]),
        },
        {
          text: '布局组件',
          collapsed: true,
          items: itemsFn([
            '/flutter/widget/布局组件/',
            '/flutter/widget/布局组件/constraints布局约束.md',
            '/flutter/widget/布局组件/Align.md',
            '/flutter/widget/布局组件/Flow.md',
            '/flutter/widget/布局组件/Wrap.md',
            '/flutter/widget/布局组件/Positioned.md',
            '/flutter/widget/布局组件/Stack.md',
            '/flutter/widget/布局组件/LayoutBuilder.md',
            '/flutter/widget/布局组件/FittedBox.md',
          ]),
        },
        {
          text: '动画组件',
          collapsed: true,
          items: [
            '/flutter/widget/动画组件/index.md',
            '/flutter/widget/动画组件/AlignTransition.md',
            '/flutter/widget/动画组件/AnimatedBuilder.md',
            '/flutter/widget/动画组件/AnimatedCrossFade.md',
            '/flutter/widget/动画组件/AnimatedDefaultTextStyle.md',
            '/flutter/widget/动画组件/AnimatedListState.md',
            '/flutter/widget/动画组件/AnimatedModalBarrier.md',
            '/flutter/widget/动画组件/AnimatedOpacity.md',
            '/flutter/widget/动画组件/AnimatedPhysicalModel.md',
            '/flutter/widget/动画组件/AnimatedPositioned.md',
            '/flutter/widget/动画组件/AnimatedSize.md',
            '/flutter/widget/动画组件/AnimatedSwitcher.md',
            '/flutter/widget/动画组件/AnimatedWidget.md',
            '/flutter/widget/动画组件/AnimatedTheme.md',
            '/flutter/widget/动画组件/DecoratedBoxTransition.md',
            '/flutter/widget/动画组件/FadeTransition.md',
            '/flutter/widget/动画组件/Hero.md',
            '/flutter/widget/动画组件/PositionedTransition.md',
            '/flutter/widget/动画组件/PageRouteBuilder.md',
            '/flutter/widget/动画组件/RotationTransition.md',
            '/flutter/widget/动画组件/ScaleTransition.md',
            '/flutter/widget/动画组件/SizeTransition.md',
            '/flutter/widget/动画组件/SlideTransition.md',
            '/flutter/widget/动画组件/Transform.md',
          ],
        },
        {
          text: '手势组件',
          collapsed: true,
          items: itemsFn([
            '/flutter/widget/手势组件/index.md',
            '/flutter/widget/手势组件/Dismissible.md',
            '/flutter/widget/手势组件/InkWell.md',
            '/flutter/widget/手势组件/Draggable.md',
            '/flutter/widget/手势组件/DragTarget.md',
            '/flutter/widget/手势组件/GestureDetector.md',
            '/flutter/widget/手势组件/LongPressDraggable.md',
            '/flutter/widget/手势组件/DraggableScrollableSheet.md',
            '/flutter/widget/手势组件/InteractiveViewer.md',
            '/flutter/widget/手势组件/Listener.md',
            '/flutter/widget/手势组件/RawGestureDetector.md',
          ]),
        },
        {
          text: '弹出widget',
          collapsed: true,
          items: itemsFn(['/flutter/widget/弹出组件/showModalBottomSheet.md']),
        },
        {
          text: '导航和路由Widget',
          collapsed: true,
          items: itemsFn(['/flutter/widget/导航和路由Widget/index.md']),
        },
        {
          text: '画布和绘图Widget',
          collapsed: true,
          items: itemsFn(['/flutter/widget/画布和绘图Widget/index.md']),
        },
        {
          text: '样式Widget',
          collapsed: true,
          items: itemsFn(['/flutter/widget/样式Widget/index.md']),
        },
        {
          text: '其他组件',
          collapsed: true,
          items: itemsFn([
            '/flutter/widget/其他组件/Canvas.md',
            '/flutter/widget/其他组件/CustomPaint.md',
            '/flutter/widget/其他组件/BackdropFilter.md',
            '/flutter/widget/其他组件/ColorFiltered.md',
            '/flutter/widget/其他组件/BottomNavigationBar.md',
            '/flutter/widget/其他组件/ClipRect.md',

            '/flutter/widget/其他组件/Checkbox.md',
            '/flutter/widget/其他组件/CheckboxListTile.md', //
            '/flutter/widget/其他组件/Switch.md',
            '/flutter/widget/其他组件/Slider.md',
            '/flutter/widget/其他组件/Chip.md', //
            '/flutter/widget/其他组件/DataTable.md', //
            '/flutter/widget/其他组件/DatePicker.md', //
            '/flutter/widget/其他组件/Dialog.md', //
            '/flutter/widget/其他组件/Divider.md', //
            '/flutter/widget/其他组件/Drawer.md', //
            '/flutter/widget/其他组件/ExpansionPanel.md', //
            '/flutter/widget/其他组件/ExpansionTile.md', //
            '/flutter/widget/其他组件/FadeInImage.md', //
            '/flutter/widget/其他组件/FlexibleSpaceBar.md',
            '/flutter/widget/其他组件/SliverFillRemaining.md',
            '/flutter/widget/其他组件/ListTile.md',
          ]),
        },
      ],
    },
    {
      text: 'widget基础类',
      collapsed: true,
      items: itemsFn([
        '/flutter/widget基础类/',
        '/flutter/widget基础类/AutomaticKeepAliveClientMixin.md',
        '/flutter/widget基础类/ChangeNotifier.md',
        '/flutter/widget基础类/FocusManager.md',
        '/flutter/widget基础类/GestureRecognizer.md',
        '/flutter/widget基础类/NotificationListener.md',
        '/flutter/widget基础类/RefreshIndicatorState.md',
        '/flutter/widget基础类/RestorableProperty.md',
        '/flutter/widget基础类/RestorableState.md',
        '/flutter/widget基础类/RouteAware.md',
        '/flutter/widget基础类/SingleTickerProviderStateMixin.md',
        '/flutter/widget基础类/TickerProviderStateMixin.md',
        '/flutter/widget基础类/WidgetsBindingObserver.md',
        '/flutter/widget基础类/WidgetsLocalizationsDelegate.md',
      ]),
    },
    {
      text: 'Animation类',
      collapsed: true,
      items: itemsFn([
        '/flutter/Animation/',
        '/flutter/Animation/Tween.md',
        '/flutter/Animation/AnimatedWidgetBaseState.md',
        '/flutter/Animation/AnimationController.md',
        '/flutter/Animation/CupertinoPageRoute.md',
        '/flutter/Animation/CurvedAnimation.md',
      ]),
    },
    {
      text: 'controller',
      collapsed: true,
      items: itemsFn([
        '/flutter/controller/',
        '/flutter/controller/ScrollController.md',
        '/flutter/controller/TabController.md',
        '/flutter/controller/FocusManager.md',
        // '/flutter/controller/AnimationController.md',
        '/flutter/controller/Future.md',
        '/flutter/controller/ScrollNotification.md',
        '/flutter/controller/ScrollPosition.md',
        '/flutter/controller/ScrollPhysics.md',
        '/flutter/controller/ScrollMetrics.md',
        '/flutter/controller/ScrollIncrementDetails.md',
        '/flutter/controller/ScrollHoldController.md',
        '/flutter/controller/ScrollActivity.md',
        '/flutter/controller/ScrollDragController.md',
        '/flutter/controller/ScrollActivityDelegate.md',
        '/flutter/controller/StreamBuilder.md',
        '/flutter/controller/StreamController.md',
        '/flutter/controller/StreamSubscription.md',
        '/flutter/controller/TabBarView.md',
        '/flutter/controller/ValueNotifier.md',
        '/flutter/controller/ValueListenableBuilder.md',
        '/flutter/controller/ValueListenable.md',
      ]),
    },
    {
      text: 'package',
      collapsed: true,
      items: [
        {
          text: 'getX',
          collapsed: true,
          items: itemsFn(['/flutter/package/getX/前言']),
        },
        {
          text: 'provider',
          collapsed: true,
          items: itemsFn(['/flutter/package/provider/前言']),
        },
        {
          text: 'chewie',
          collapsed: true,
          items: itemsFn(['/flutter/package/chewie/前言']),
        },
        {
          text: 'infinite_scroll_pagination',
          collapsed: true,
          items: itemsFn(['/flutter/package/infinite_scroll_pagination/前言']),
        },
        {
          text: 'music',
          collapsed: true,
          items: itemsFn(['/flutter/package/music/前言']),
        },
        {
          text: 'video',
          collapsed: true,
          items: itemsFn(['/flutter/package/video/前言']),
        },
      ],
    },
    {
      text: '事件',
      collapsed: true,
      items: itemsFn(['/flutter/event/事件传递']),
    },
    {
      text: '日志',
      collapsed: true,
      items: itemsFn(['/flutter/logs/', '/flutter/logs/isolate/index.md']),
    },
  ],
  '/reactNative/': itemsFn([
    '/reactNative/reactNative',
    '/reactNative/环境搭建.md',
  ]),
  // --------------------------------------------------------------

  '/docMD/git/': itemsFn([
    '/docMD/git/版本控制',
    '/docMD/git/分支新建与合并',
    '/docMD/git/提交规范',
  ]),
  '/docMD/mac/': itemsFn(['/docMD/mac/菜单大小调整', '/docMD/mac/微信双开']),
  '/docMD/order/': [
    {
      text: '介绍',
      link: '/docMD/order/介绍',
    },
  ],
  '/system/informationSystem/': [
    {
      text: '信息系统管理',
      link: '/system/informationSystem/information.md',
    },
  ],

  // =====================Deisgn=========================
  '/design/ui/': itemsFn(['/design/ui/介绍']),
  '/design/ux/': itemsFn(['/design/ux/介绍']),

  // ========================Harmony==========================
  '/harmony/ark/arkts/': itemsFn(['/harmony/ark/arkts/']),
  '/harmony/ark/arkui/': itemsFn(['/harmony/ark/arkui/']),
};
