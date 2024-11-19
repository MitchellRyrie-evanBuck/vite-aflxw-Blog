# GeometryReader

GeometryReader 是 SwiftUI 中一个强大的容器视图，它能够让我们获取父视图提供的尺寸信息，并基于这些信息来自定义子视图的布局。本文将详细介绍 GeometryReader 的使用方法和应用场景。

## 目录

- [基本概念](#基本概念)
- [基础用法](#基础用法)
- [常见应用场景] (#常见应用场景)
- [高级用法] (#高级用法)
- [性能考虑] (#性能考虑)
- [最佳实践] (#最佳实践)

## 基本概念

GeometryReader 的基本结构如下:

```swift
struct GeometryReader<Content> where Content: View {
  init(@ViewBuilder content: @escaping (GeometryProxy) -> Content)
}
```

GeometryReader 提供了一个 GeometryProxy 对象，包含以下重要属性:

- `size`: 可用空间的大小
- `frame(in:)`: 在指定坐标空间中的框架
- `safeAreaInsets`: 安全区域的内边距

## 基础用法

以下是一个简单的示例，展示如何使用 GeometryReader:

```swift
struct ContentView: View {
    var body: some View {
        GeometryReader { geometry in
            // 使用 geometry.size 获取可用空间大小
            Circle()
                .frame(width: geometry.size.width * 0.8,
                      height: geometry.size.height * 0.8)
                .position(x: geometry.size.width/2,
                         y: geometry.size.height/2)
        }
    }
}
```

## 3. 常见应用场景

### 3.1 响应式布局

```swift
struct ResponsiveLayout: View {
    var body: some View {
        GeometryReader { geo in
            if geo.size.width > 414 { // iPad
                HStack {
                    sidebar
                    content
                }
            } else { // iPhone
                VStack {
                    content
                    sidebar
                }
            }
        }
    }
    
    var sidebar: some View {
        Text("Sidebar")
            .frame(width: 200)
    }
    
    var content: some View {
        Text("Content")
    }
}
```

### 3.2 自定义滚动效果

```swift
struct ParallaxScrollEffect: View {
    var body: some View {
        ScrollView {
            GeometryReader { geometry in
                Image("background")
                    .resizable()
                    .scaledToFill()
                    .frame(height: 300)
                    .offset(y: -geometry.frame(in: .global).minY/2)
            }
            .frame(height: 300)
            
            // 其他内容
            ForEach(0..<20) { index in
                Text("Row \(index)")
                    .padding()
            }
        }
    }
}
```

### 3.3 居中定位

```swift
struct CenterPositioning: View {
    var body: some View {
        GeometryReader { geometry in
            VStack {
                Circle()
                    .fill(Color.blue)
                    .frame(width: 100, height: 100)
                    .position(
                        x: geometry.size.width/2,
                        y: geometry.size.height/2
                    )
            }
        }
    }
}
```

## 4. 高级用法

### 4.1 坐标空间转换

```swift
struct CoordinateSpaceExample: View {
    var body: some View {
        GeometryReader { outsideGeometry in
            VStack {
                GeometryReader { insideGeometry in
                    Circle()
                        .fill(Color.red)
                        .frame(width: 50, height: 50)
                        .preference(key: CirclePreferenceKey.self,
                                  value: insideGeometry.frame(in: .global))
                }
                .frame(height: 100)
            }
        }
    }
}

struct CirclePreferenceKey: PreferenceKey {
    static var defaultValue: CGRect = .zero
    static func reduce(value: inout CGRect, nextValue: () -> CGRect) {
        value = nextValue()
    }
}
```

### 4.2 自适应网格布局

```swift
struct AdaptiveGrid: View {
    let items = 0..<50
    
    var body: some View {
        GeometryReader { geometry in
            let width = geometry.size.width
            let itemSize: CGFloat = 100
            let columns = Int(width / itemSize)
            let spacing: CGFloat = 10
            
            ScrollView {
                LazyVGrid(columns: Array(repeating: GridItem(.flexible(), spacing: spacing), count: columns),
                         spacing: spacing) {
                    ForEach(items, id: \.self) { item in
                        RoundedRectangle(cornerRadius: 10)
                            .fill(Color.blue)
                            .frame(height: itemSize)
                    }
                }
                .padding()
            }
        }
    }
}
```

## 5. 性能考虑

```swift
// 推荐：仅在需要时使用 GeometryReader
struct EfficientLayout: View {
    var body: some View {
        VStack {
            Text("Header")
            
            // 只在需要几何信息的视图中使用 GeometryReader
            GeometryReader { geometry in
                adaptiveContent(in: geometry)
            }
            
            Text("Footer")
        }
    }
    
    func adaptiveContent(in geometry: GeometryProxy) -> some View {
        // 基于几何信息的自适应内容
        if geometry.size.width > 500 {
            return AnyView(HStack {
                Text("Left")
                Text("Right")
            })
        } else {
            return AnyView(VStack {
                Text("Top")
                Text("Bottom")
            })
        }
    }
}
```

## 6. 注意事项

1. 尺寸影响：

- GeometryReader 会占用父视图提供的所有可用空间
- 可能会影响其他视图的布局

2.性能考虑：

- 避免过度使用
- 仅在必要时使用

3.布局优先级：

- GeometryReader 的优先级高于其他布局修饰符
- 可能会覆盖其他布局设置

## 7. 最佳实践

```swift
struct BestPracticesExample: View {
    var body: some View {
        GeometryReader { geometry in
            // 1. 清晰的布局结构
            VStack(spacing: 0) {
                // 2. 合理使用 size 信息
                headerView(width: geometry.size.width)
                
                // 3. 适当的条件渲染
                if geometry.size.width > geometry.size.height {
                    landscapeContent
                } else {
                    portraitContent
                }
            }
            // 4. 合理使用修饰符
            .frame(maxWidth: .infinity, maxHeight: .infinity)
        }
    }
    
    func headerView(width: CGFloat) -> some View {
        Text("Header")
            .frame(width: width)
            .background(Color.blue)
    }
    
    var landscapeContent: some View {
        HStack {
            Text("Left Panel")
            Text("Right Panel")
        }
    }
    
    var portraitContent: some View {
        VStack {
            Text("Top Panel")
            Text("Bottom Panel")
        }
    }
}
```
