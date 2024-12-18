---
pageClass: custom-page-imgs-class
---

# DecoratedBoxTransition(装饰盒过渡组件)

DecoratedBoxTransition 是 Flutter 中的一个动画过渡组件，用于在两个装饰盒之间应用动画过渡效果。它可以在不同的装饰盒之间应用动画，例如改变颜色、边框、阴影等装饰效果。以下是关于 DecoratedBoxTransition 的详细介绍，包括其属性、功能、用法、使用场景、示例和注意事项。

```dart
  const DecoratedBoxTransition({
    super.key,
    required this.decoration,
    this.position = DecorationPosition.background,
    required this.child,
  })
```

## 属性及功能

DecoratedBoxTransition 的主要属性及其功能：

- position：动画的位置，通常是一个 `Animation<double>`。
- decoration：装饰的样式，通常是一个 Decoration 对象，可以包括颜色、边框、阴影等。
- child：装饰盒的子组件，通常是一个 Widget。

## 用法

以下是如何使用 DecoratedBoxTransition 的示例：

```dart
AnimationController controller = AnimationController(
  duration: Duration(seconds: 2),
  vsync: this,
);

Animation<double> animation = CurvedAnimation(
  parent: controller,
  curve: Curves.easeInOut,
);

DecoratedBoxTransition(
  position: DecorationTween(
    begin: BoxDecoration(color: Colors.blue),
    end: BoxDecoration(color: Colors.red),
  ).animate(animation),
  decoration: BoxDecoration(),
  child: Container(),
);
```

## 使用场景

DecoratedBoxTransition 适用于以下场景：

- 当需要在两个装饰盒之间实现装饰效果的动画过渡时，可以使用 DecoratedBoxTransition。
- 可以用于改变装饰盒的颜色、边框、阴影等装饰效果的过渡动画。

## 注意事项

- 在使用 DecoratedBoxTransition 时，需要注意设置起始和结束的装饰样式。
- 可以在 DecorationTween 中定义起始和结束的装饰样式，然后使用 animate 方法生成动画对象。

## 示例

以下是一个示例，展示了如何使用 DecoratedBoxTransition 来实现装饰效果的动画过渡：

```dart
import 'package:flutter/material.dart';

class AnimatedDecorationExample extends StatefulWidget {
  @override
  _AnimatedDecorationExampleState createState() =>
      _AnimatedDecorationExampleState();
}

class _AnimatedDecorationExampleState extends State<AnimatedDecorationExample>
    with TickerProviderStateMixin {
  late AnimationController _animationController;
  late Animation<Decoration> _animation;

  @override
  void initState() {
    super.initState();
    _animationController = AnimationController(
      vsync: this,
      duration: Duration(milliseconds: 500),
    );

    _animation = DecorationTween(
      begin: BoxDecoration(color: Colors.blue),
      end: BoxDecoration(color: Colors.red),
    ).animate(_animationController);
  }

  void _toggleDecoration() {
    if (_animationController.status == AnimationStatus.completed) {
      _animationController.reverse();
    } else {
      _animationController.forward();
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Animated Decoration Example'),
      ),
      body: Center(
        child: DecoratedBoxTransition(
          position: DecorationPosition.background,
          decoration: _animation,
          child: GestureDetector(
            onTap: _toggleDecoration,
            child: Container(
              width: 200,
              height: 200,
              alignment: Alignment.center,
              child: Text(
                'Tap to Change Decoration',
                style: TextStyle(color: Colors.white),
              ),
            ),
          ),
        ),
      ),
    );
  }

  @override
  void dispose() {
    _animationController.dispose();
    super.dispose();
  }
}

void main() {
  runApp(MaterialApp(home: AnimatedDecorationExample()));
}

```

![AnimatedDecorationExample](./imgs/AnimatedDecorationExample.gif)

在这个示例中，我们使用 DecoratedBoxTransition 实现了一个装饰效果的动画过渡，将容器的背景颜色从蓝色渐变到红色。
