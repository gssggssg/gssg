# webpack 配置-module

## 描述

配置 **webpack** 处理不同模块的东西的方式

## 配置

### module.rules

#### 描述

值为 **Array**，允许你在 webpack 配置中配置 `loader`;

#### 属性

##### 条件

`module.rules` 一些属性的条件值，可以是以下类型

- **字符串**：匹配输入必须以提供的字符串开始。是的。目录绝对路径或文件绝对路径。
- **正则表达式**：test 输入值。
- **函数**：调用输入的函数，必须返回一个真值(truthy value)以匹配。
- **条件数组**：至少一个匹配条件。
- **对象**：匹配所有属性。每个属性都有一个定义行为。

这里拿常用一些属性示例：

```js
/*
 * 字符串
 * 文件绝对路径
 */
module: {
  rules: [
    {
      include: path.resolve(__dirname, "src"),
    },
  ];
}

/*
 * 正则表达式
 */
module: {
  rules: [
    {
      test: /\.css$/,
    },
  ];
}

/*
 * 函数
 * 参数：资源的绝对路径
 * 返回值：true - 可以使用该loader处理； false - 不可使用
 */
module: {
  rules: [
    {
      test: (path) => path.indexOf(".css") !== -1,
    },
  ];
}

/*
 * 数组
 * 只要通过数组中，任何一项的条件，就可以使用该loader处理
 */
module: {
  rules: [
    {
      test: [/\.css$/, path.resolve(__dirname, "src/css")],
    },
  ];
}
```

##### module.rules.test

匹配符合条件的资源，使用这个`rule`中配置的`loader`进行处理
简单来说：`test`中规则匹配成功，就用 loader 处理文件；

一般是提供一个正则表达式或正则表达式的数组；

```js
module: {
  rules: [
    {
      // 只匹配文件以css文后缀的资源
      test: /\.css$/,
    },
  ];
}
```

##### module.rules.include

匹配符合条件的资源进行`loader`的处理；

```js
module: {
  rules: [
    {
      // 只匹配绝对路径下中 src 文件夹的资源
      include: path.resolve(__dirname, "src"),
    },
  ];
}
```

##### module.rules.exclude

**排除**指定条件的资源进行`loader`的处理；

```js
module: {
  rules: [
    {
      // 排除 node_modules 文件夹
      exclude: /node_modules/,
    },
  ];
}
```

##### module.rules.loader

指定使用一个 `loader`；

```js
module: {
  rules: [
    {
      // 指定使用 "styles-loader" 这个 loader
      loader: "styles-loader",
    },
  ];
}
```

##### module.rules.use

指定使用多个 `loader`；
执行顺序：**从右到左** | **从下到上**；

```js
module: {
  rules: [
    use: [
      'style-loader',
      {
        loader: 'css-loader',
      },
    ]
  ];
}
```

##### module.rules.options

`loader`的其他选项，不同的`loader`有不同的`optoons`，要配合`loader`来使用；

```js
module: {
  rules: [
    {
      loader: "css-loader",
      options: {
        modules: true,
      },
    },
  ];
}
```

##### module.rules.oneOf

在`oneOf`数组中,如果一个`loader`规则匹配成功，就不会执行其他`loader`的匹配规则了;

```js
module: {
  rules: [
    {
      test: /\.css$/,
      oneOf: [
        {
          resourceQuery: /inline/, // foo.css?inline
          use: "url-loader",
        },
        {
          resourceQuery: /external/, // foo.css?external
          use: "file-loader",
        },
      ],
    },
  ];
}
```

##### module.rules.enforce

值有一下两种，默认为中间执行;

- `pre` 优先执行
- `post` 延后执行

```js
module: {
  rules: [
    {
      // 优先执行该loader
      enforce: "pre",
    },
  ];
}
```

##### 嵌套

可以使用属性 `rules` 和 `oneOf` 指定嵌套规则。
