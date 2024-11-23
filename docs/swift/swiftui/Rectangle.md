# Rectangle

## Rectangle 基本概念

Rectangle 是 SwiftUI 提供的一个矩形形状视图，它继承自 Shape 协议。主要用于绘制矩形、创建背景、边框等。

## 基础用法

```swift
// 1. 基本矩形
Rectangle()
    .fill(.blue) // 填充颜色
    .frame(width: 100, height: 50) // 设置大小

// 2. 带圆角的矩形
Rectangle()
    .cornerRadius(10) // 添加圆角
    .fill(.red)
    .frame(width: 200, height: 100)

// 3. 带边框的矩形
Rectangle()
    .stroke(.green, lineWidth: 2) // 只有边框
    .frame(width: 150, height: 75)
```

## 常见修饰符

```swift
Rectangle()
    // 1. 填充和描边
    .fill(.blue) // 填充颜色
    .stroke(.red, lineWidth: 2) // 边框
    
    // 2. 大小和位置
    .frame(width: 100, height: 50) // 尺寸
    .offset(x: 10, y: 10) // 偏移
    .rotation(.degrees(45)) // 旋转
    
    // 3. 外观修饰
    .opacity(0.5) // 透明度
    .shadow(radius: 10) // 阴影
    .blur(radius: 3) // 模糊效果
```

## 实际应用示例

### 创建卡片背景

```swift
struct CardBackground: View {
    var body: some View {
      Rectangle()
            .fill(.white)
            .cornerRadius(10)
            .shadow(radius: 5)
            .frame(height: 200)
            .overlay(
                VStack {
                    Text("卡片标题")
                    Text("卡片内容")
                }
            )
    }
}
```

### 创建渐变背景

```swift
struct GradientBackground: View {
    var body: some View {
        Rectangle()
            .fill(
                LinearGradient(
                    gradient: Gradient(colors: [.blue, .purple]),
                    startPoint: .topLeading,
                    endPoint: .bottomTrailing
                )
            )
            .ignoresSafeArea()
    }
}
```

### 创建进度条

```swift
struct ProgressBar: View {
    @State private var progress: CGFloat = 0.7
    
    var body: some View {
        Rectangle()
            .fill(.gray.opacity(0.2))
            .frame(height: 20)
            .overlay(
                Rectangle()
                    .fill(.blue)
                    .frame(width: UIScreen.main.bounds.width * progress)
                    .animation(.spring(), value: progress),
                alignment: .leading
            )
    }
}
```

### 创建网格布局

```swift
struct GridLayout: View {
    var body: some View {
        LazyVGrid(columns: Array(repeating: GridItem(.flexible()), count: 3)) {
            ForEach(0..<9) { index in
                Rectangle()
                    .aspectRatio(1, contentMode: .fit)
                    .fill(.blue.opacity(0.2))
                    .overlay(
                        Text("\(index)")
                    )
            }
        }
        .padding()
    }
}
```

### 与其他形状的组合使用

```swift
struct CombinedShapes: View {
    var body: some View {
        ZStack {
            // 背景矩形
            Rectangle()
                .fill(.blue.opacity(0.2))
            
            // 前景圆形
            Circle()
                .fill(.white)
                .frame(width: 50, height: 50)
        }
        .frame(width: 200, height: 100)
        .clipShape(RoundedRectangle(cornerRadius: 10))
    }
}
```
