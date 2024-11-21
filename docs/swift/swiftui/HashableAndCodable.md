# Hashable, Codable

## Hashable

Hashable 协议继承自 Equatable 协议，用于使类型可以被哈希化，这意味着该类型可以：
被用作字典的键（Dictionary key）
被添加到集合（Set）中

```swift
// 基本使用示例
struct Person: Hashable {
    let name: String
    let age: Int
    
    // 如果所有属性都符合 Hashable，Swift 会自动生成 hash(into:) 方法
    // 如果需要自定义哈希逻辑，可以自己实现：
    func hash(into hasher: inout Hasher) {
        hasher.combine(name)
        hasher.combine(age)
    }
}

// 使用示例
let person = Person(name: "John", age: 30)
var dict = [Person: String]()
var set = Set<Person>()
```

## Codable

Codable 是 Encodable 和 Decodable 协议的组合类型，用于数据编码和解码：
Encodable: 可以将数据编码（序列化）为外部表示形式（如 JSON）
Decodable: 可以从外部表示形式解码（反序列化）为数据

```swift
// 基本使用示例
struct User: Codable {
    let name: String
    let age: Int
}

// JSON 编码示例
let user = User(name: "Alice", age: 25)
do {
    // 编码为 JSON
    let encoder = JSONEncoder()
    let jsonData = try encoder.encode(user)
    let jsonString = String(data: jsonData, encoding: .utf8)
    
    // 解码 JSON
    let decoder = JSONDecoder()
    let decodedUser = try decoder.decode(User.self, from: jsonData)
} catch {
    print("编码/解码错误: \(error)")
}
```

## 常见用途

1. Hashable:
作为字典的键
存储在 Set 中
需要比较对象相等性时

```swift
// Hashable 示例
let users = Set<User>() // 需要 Hashable
let userDict = [User: String]() // 需要 Hashable
```

2.Codable:
JSON 数据处理
网络请求数据模型
本地数据存储
配置文件读写

```swift
// Codable 网络请求示例
struct Response: Codable {
    let status: String
    let data: [User]
}

func fetchUsers() async throws {
    let url = URL(string: "https://api.example.com/users")!
    let (data, _) = try await URLSession.shared.data(from: url)
    let response = try JSONDecoder().decode(Response.self, from: data)
}
```

3.同时使用:

```swift
struct Item: Hashable, Codable {
    let id: String
    let name: String
    let price: Double
    
    // Codable 的编码解码方法会自动生成
    // Hashable 的 hash 方法会自动生成
}
```
