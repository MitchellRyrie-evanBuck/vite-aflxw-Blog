# vuex

## 1、为什么要用 vuex ？

组件通信的类型

- 父子通信
- 跨级通信
- 兄弟通信
- 路由视图级别通信

## 2、通信解决方案

- props/$emit（父子通信）
- $refs/ref（父子通信）
- $children/$parent（父子通信）
- $attrs/$listeners（父子通信、跨级通信）
- provide/inject（父子通信、跨级通信）
- eventBus（父子通信、跨级通信、兄弟通信）
- vuex（父子通信、跨级通信、兄弟通信、路由视图级别通信）
- localStorage/sessionStorage等基于浏览器客户端的存储（父子通信、跨级通信、兄弟通信、路由视图级别通信）

## 3、vuex 是什么？

Vuex 是一个专为 Vue.js 应用程序开发的 **状态管理模式**，类似 <u>redux</u>

这种状态管理模式包含：

- **State** : 状态数据源
- **View** : 使用状态数据源的视图
- **Actions** : 修改更新数据源的操作

这种模式遵循的是 <u>单向数据流</u> 模式

## 4、vuex 的工作流

- **State** : 存储应用状态数据（React 中的 State）
- **Vue Component** : 消费 <u>State</u>
- **Actions** : 提交修改 <u>State</u> 的动作（包括异步行为）（React 中的 action）
- **Mutations** : 唯一更改 <u>State</u> 的位置（React 中的 Reducer）

## 5、安装 vuex

```bash
npm i vuex
// or
yarn add vuex
```

## 6、引入 vuex

**通过 \<script\> 引入**

```html
<script src="vue.js"></script>
<script src="vuex.js"></script>
```

通过 \<script\> 方式引入，<u>vuex</u> 会自动安装（也就是主动调用 `Vue.use(Vuex)`）

**通过 `import` 引入**

```javascript
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
```

通过 `import` 方式引入，需要手动安装（手动调用 `Vue.use(Vuex)`）

## 7、从 Store 开始

**`Store`** 就是仓库，我们前面提到的 `state` 就存储在 `store` 中，同时提交动作、修改状态的方法也都由 `store` 提供和管理

### 7-1、创建一个 Store

```javascript
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
});
```

> 必须在 `Vue.use(Vuex)` 之后创建 `store`

## 8、核心概念

- state
- getters
- mutations
- actions

### 8-1、state

#### 8-1-1、state 的创建

存储应用状态数据的对象，`state` 的值可以是一个对象，也可以是一个返回对象的函数，类似 <u>vue</u> 中组件的 `data` ，使用函数的方式返回对象可以避免对象引用导致的副作用问题

```javascript
// let state = {
//   a: 1
// }
let state = _ => ({ a: 1 });

const store = new Vuex.Store({
  state,
});
const store2 = new Vuex.Store({
  state,
});

console.log(store.state == store2.state);
store.state.a = 100;
console.log(store.state.a, store2.state.a);
```

- 通过 `store.state` 访问状态数据
- `state` 数据与组件 `data` 一样是被追踪的

#### 8-1-2、在组件中使用 store

```javascript
// stores/index.js
import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';

Vue.use(Vuex);

const store = new Vuex.Store({
  state,
});

export default store;
```

```javascript
// stores/state.js
export default () => ({
  title: '开课吧',
  content: 'javascript 高级工程师',
});
```

```vue
<template>
  <div class="home">
    <h2>{{ title }}</h2>
    <div>{{ content }}</div>
  </div>
</template>

<script>
import store from '@/stores';
export default {
  name: 'home',
  data() {
    return {
      title: store.state.title,
      content: store.state.content,
    };
  },
};
</script>
```

> 问题：
>
> `state` 的更新并不会更新视图

**解决**

使用 <u>computed</u>

```vue
<template>
  <div class="home">
    <h2>{{ title }}</h2>
    <div>{{ content }}</div>
  </div>
</template>

<script>
import store from '@/stores';
export default {
  name: 'home',
  computed: {
    title() {
      return store.state.title;
    },
    content() {
      return store.state.content;
    },
  },
};
</script>
```

#### 8-1-3、store 配置

如果每个组件在使用 `store` 的时候都 `import` 会比较繁琐，这个时候，我们通过 <u>vuex</u> 提供的 `store` 选项把 `store` 对象注入到 <u>vue</u> 的原型上

```javascript
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from '@/stores';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
```

配置注入后，我们就可以在组件实例中使用 `this.$store` 来访问 `store` 对象了

```vue
<template>
  <div class="home">
    <h2>{{ title }}</h2>
    <div>{{ content }}</div>
  </div>
</template>

<script>
// import store from '@/stores' // 可以去掉了
export default {
  name: 'home',
  computed: {
    title() {
      return this.$store.state.title;
    },
    content() {
      return this.$store.state.content;
    },
  },
};
</script>
```

#### 8-1-4、使用辅助函数 `mapState`

当一个组件需要获取多个状态时候，将这些状态都声明为计算属性会有些重复和冗余。为了解决这个问题，我们可以使用 `mapState` 辅助函数帮助我们生成计算属性，让你少按几次键，通常我们把 `store` 的 `state` 通过 `mapState` 函数映射到组件的 `computed` 上

```vue
<template>
  <div class="home">
    <h2>{{ title }}</h2>
    <div>{{ content }}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'home',
  computed: mapState(['title', 'content']),
};
</script>
```

通过对象方式进行映射

> 场景：当组件中已有与 `store` 同名的数据名称

```vue
<template>
  <div class="home">
    <h1>{{ title }}</h1>
    <h2>{{ subTitle }}</h2>
    <div>{{ content }}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'home',
  data() {
    return { title: 'Vuex' };
  },
  computed: mapState({
    subTitle: 'title',
    content: ({ content }) =>
      content.length <= 12 ? content : content.substring(0, 12) + '......',
  }),
};
</script>
```

#### 8-1-5、使用扩展运算符组合

通过对象扩展运算符，可以把 `mapState` 返回的 `state` 属性与组件已有计算属性进行融合

```vue
<script>
import { mapState } from 'vuex';

export default {
  computed: {
    computed() {
      /.../;
    },
    ...mapState({
      // ...
    }),
  },
};
</script>
```

### 9、getters

有时候我们需要从 store 中的 state 中派生出一些状态，类似组件的 `data` 与 `computed`，`store` 也提供了一个 `getters` 对象来处理派生数据

#### 9-1、getters 函数

与组件属性一样，我们是通过定义一个函数的形式来返回派生数据的，`getters` 函数接受两个参数

- 第一个参数：`state` 对象
- 第二个参数：`getters` 对象

#### 9-2、通过属性访问

同样的，与组件计算属性一样，默认是通过属性的方式去访问 `getters` 中的数据的，这种方式与组件的计算属性一样，也是会缓存结果的

#### 9-3、通过方法访问

我们还可以通过闭包函数的形式返回一个函数，来实现给 `getters` 函数传参，需要注意的是这种方式不支持结果缓存

#### 9-4、使用辅助函数 `mapGetters`

与 `mapState` 函数类似，通常映射到组件的 `computed` 上

### 10、mutations

更改 Vuex 的 store 中的状态的唯一方法是提交 mutation（类似 redux 中的 action + reducer），Vuex 中的 mutation 非常类似于事件：每个 mutation 都有一个字符串的 **事件类型 (type)** 和 一个 **回调函数 (handler)**

> `mutation` 中的函数不要直接调用

#### 10-1、提交

```javascript
store.commit(type, payload)
// or
store.commit({
    type: ...,
    payload: ...
})

```

**type**

要提交的 `mutation` 回调函数名称，type 为固定的 key

**payload**

载荷：提交的额外数据，任意格式

#### 10-2、mutation 函数

`mutation` 中的函数被 `commit` 执行的时候，接收两个参数

- 第一个参数：`state` 对象
- 第二个参数： `commit` 提交的 `payload`

在 `mutation` 函数中，我们就可以通过 `state` 对象进行状态数据的修改

#### 10-3、使用辅助函数 `mapMutations`

`mapMutations` 函数的使用与 `mapState` 和 `mapGetters` 类似，但是其一般是把组件的 `methods` 映射为 `store` 的 `mutations` 的 `commit` 调用

#### 10-4、mutation 函数必须是同步的

`commit` 方法没有返回值

### 11、actions

`action` 中的函数与 `mutation` 中的函数类似，但是它主要用来进行异步任务的处理，然后通过提交 `mutation` 来修改 `state`

> 注意：`action` 中的函数不要直接修改 `state`

#### 11-1、提交

```javascript
store.dispatch(type, payload)
// or
store.dispatch({
    type: ...,
    payload: ...
})

```

`action` 任务需要通过 `dispatch` 方法来提交（派发），与 `commit` 类似

`dispatch` 方法有返回值，且一定返回一个 `promise` 对象

#### 11-2、action 函数

`action` 中的函数执行的过程中也接受两个参数

- 第一个参数：`store` 对象
- 第二个参数： `dispatch` 提交的 `payload`

#### 11-3、使用辅助函数 `mapActions`

与 `mapMutations` 函数类似，把组件的 `methods` 映射为 `store` 的 `actions` 的 `dispatch` 调用

## Module

这个更多的是基于一种代码组织结构上的辅助

<https://vuex.vuejs.org/zh/guide/modules.html>

<https://vuex.vuejs.org/zh/guide/structure.html>
