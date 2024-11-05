# **非内置可自行实现的 Utility Types**

### DeepPartial

```tsx
type DeepPartial<T> = {
  [Key in keyof T]?: T[Key] extends object ? DeepPartial<T[Key]> : T[Key];
};
```

### ReadonlyPartial

```tsx
type ReadonlyPartial<T> = {
  readonly [P in keyof T]?: T[P];
};
```

### ReadWrite

_或叫 Mutable，移除只读修饰符，可读可写_

```tsx
type ReadWrite<T> = {
  -readonly [P in keyof T]: T[P];
};
```

### GetPromiseType

_提取 Promise 的泛型参数_

```tsx
type GetPromiseType<P extends Promise<any>> =
  P extends Promise<infer Params> ? Params : never;
```

可以与 `ReturnType` 结合使用，提取异步函数的返回值

### ChangeRecordType

_将对象中所有属性都设置为 T，第一个参数是 keyof object，如果没有传第二个参数，则将所有属性值转为 undefined_

```tsx
type ChangeRecordType<K, T = undefined> = {
  [P in keyof K]?: T;
};
```

### Values

_构造传入类型每个值的联合类型，参考 Object.values_

```tsx
type Values<T> = T[keyof T];
```

### Include

_提取 T 类型的部分（或全部）键构造一个新类型，与 Omit 作用相反_

```tsx
// 写法1
type Include<T extends object, U extends keyof any> = {
  [Key in Extract<keyof T, U>]: T[Key];
};
// 写法2 (映射类型重映射 4.1 新增语法)
type Include<T extends object, U extends keyof any> = {
  [Key in keyof T as Key extends U ? Key : never]: T[Key];
};
// 写法3
type Include<T, K extends keyof any> = Pick<T, Extract<keyof T, K>>;
```

### Nullable

_生成可以为空的联合类型_

```tsx
type Nullable<T extends keyof any> = T | null | undefined;
```

### NullableValues

_允许每个属性值为空_

注：使用了上文的 `Nullable`

```tsx
type NullableValue<T> = {
  [Key in keyof T]?: Nullable<T[Key]>;
};
```

### Proxify

```tsx
type Proxify<T> = {
  [P in keyof T]: {
    get(): T[P];
    set(v: T[P]): void;
  };
};
```

### SumAggregate

_并集_

```tsx
type SumAggregate<T, U> = T | U;
```

### Diff

_差异_

```tsx
type Diff<T, C> = Exclude<T, C> | Exclude<C, T>;
```

### Flatten（TupleToUnion）

_元组转联合类型_

```tsx
type Flatten<T> = T extends Array<infer U> ? U : never;
// 写法2
type Flatten<T extends any[]> = T[number];
```

### GetterSetterPrefix

_为现有属性添加上 set 和 get 前缀_

```tsx
type GetterSetterPrefix<T> = {
  [Key in keyof T as Key extends string ? `get${Uppercase<Key>}` : never]: {
    (): T[Key];
  };
} & {
  [Key in keyof T as Key extends string ? `set${Uppercase<Key>}` : never]: {
    (val: T[Key]): void;
  };
} & T;
```

### ExcludeValues

_剔除掉类型 T 中满足值可分配给 V 的属性名，并构造一个新类型_

```tsx
type ExcludeValues<T, V> = {
  [Key in keyof T as T[Key] extends V ? never : Key]: T[Key];
};
```

### ExtractValues

_保留类型 T 中满足值可分配给 V 的属性名，并构造一个新类型_

```tsx
type ExtractValues<T, V> = {
  [Key in keyof T as T[Key] extends V ? Key : never]: T[Key];
};
```

### ChainedAccessUnion

_构造一个描述对象类型可访问的属性链的字符串联合类型_

注：使用了上文的 `Values`

```tsx
type ChainedAccessUnion<
  T,
  A = {
    [Key in keyof T]: T[Key] extends string ? never : T[Key];
  },
  B = {
    [Key in keyof A]: A[Key] extends never
      ? never
      : A[Key] extends object
        ?
            | `${Extract<Key, string>}.${Extract<keyof A[Key], string>}`
            | (ChainedAccessUnion<A[Key]> extends infer U
                ? `${Extract<Key, string>}.${Extract<U, string>}`
                : never)
        : never;
  },
> = T extends object
  ? Exclude<keyof A | Exclude<Values<B>, never>, never>
  : never;
```

如图所示，Diff 得到 never，两者（都是联合类型）没有区别

<https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7e6fb0e5bbfc48d0a4be1ff2a589a3bf~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp>
