# dockerfile

> Dockerfile是一个组合映像命令的文本；可以使用在命令行中调用任何命令；
> Docker通过dockerfile中的指令自动生成镜像。

## 编写规则

- 文件名必须是 Dockerfile
- Dockerfile中所用的所有文件一定要和Dockerfile文件在同一级父目录下
- Dockerfile中相对路径默认都是Dockerfile所在的目录
- Dockerfile中一能写到一行的指令，一定要写到一行，因为每条指令都被视为一层，层多了执行效率就慢
- Dockerfile中指令大小写不敏感，但指令都用大写（约定俗成）
- Dockerfile 非注释行第一行必须是 FROM
- Dockerfile 工作空间目录下支持隐藏文件(.dockeringore)，类似于git的.gitingore
