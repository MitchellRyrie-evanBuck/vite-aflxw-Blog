# structTag

在 Go 语言中，结构体字段上可以使用多个标签，这些标签可以用于不同的用途。以下是一些常见的标签及其功能：

## json

功能： 用于指定 JSON 编码和解码时的字段名。
示例：

```go
type Example struct {
    Field1 string `json:"field_one"`
    Field2 int    `json:"field_two"`
}
```

## yaml

功能： 用于指定 YAML 编码和解码时的字段名。
示例：

```go
type Example struct {
    Field1 string `yaml:"field_one"`
    Field2 int    `yaml:"field_two"`
}
```

## mapstructure

功能： 用于与 github.com/mitchellh/mapstructure 包一起使用，指定字段在映射结构时的名称。
示例：

```go
type Example struct {
    Field1 string `mapstructure:"field_one"`
    Field2 int    `mapstructure:"field_two"`
}
```

## xml

功能： 用于指定 XML 编码和解码时的字段名。
示例：

```go
type Example struct {
    Field1 string `xml:"field_one"`
    Field2 int    `xml:"field_two"`
}
```

## bson

功能： 用于指定 BSON 编码和解码时的字段名。
示例：

```go
type Example struct {
    Field1 string `bson:"field_one"`
    Field2 int    `bson:"field_two"`
}
```

## db

功能： 用于指定数据库字段的名称。
示例：

```go
type Example struct {
    Field1 string `db:"field_one"`
    Field2 int    `db:"field_two"`
}
```

## protobuf

功能： 用于指定 Protocol Buffers 编码和解码时的字段名。
示例：

```go
syntax = "proto3";

message Example {
    string field_one = 1;
    int32 field_two = 2;
}
```

## form

功能： 用于 HTML 表单编码时的字段名。
示例：

```go
type Example struct {
    Field1 string `form:"field_one"`
    Field2 int    `form:"field_two"`
}
```

## url

功能： 用于 URL 编码时的字段名。
示例：

```go
type Example struct {
    Field1 string `url:"field_one"`
    Field2 int    `url:"field_two"`
}
```

## validate

功能： 用于结构体字段的验证规则，通常与验证库一起使用（例如 github.com/go-playground/validator）。
示例：

```go
type Example struct {
    Field1 string `validate:"required"`
    Field2 int    `validate:"gte=0,lte=100"`
}
```

这些标签允许你更灵活地定义结构体字段的行为，以适应不同的序列化、反序列化和验证需求。标签的使用通常取决于你所使用的库和工具。
