# webpack 配置-其他

### context

Webpack 在寻找相对路径的文件时会以 context 为根目录

```js
context: path.resolve(__dirname, "app");
```

### hash

| 变量名    | 含义                        |
| --------- | --------------------------- |
| id        | Chunk 的唯一标识，从 0 开始 |
| name      | Chunk 的名称                |
| hash      | Chunk 的唯一标识的 Hash 值  |
| chunkhash | Chunk 内容的 Hash 值        |
