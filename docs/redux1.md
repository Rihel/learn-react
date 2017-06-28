
redux解决了状态传递的问题，严格控制了状态更新的操作，使得杂乱无章的状态得到了管理


## 如果还不明白，那么我们就用一个游戏打boss场景来比喻下
    在魔兽世界中，打一个副本是需要一个团队或者小队来进行
    那么我们打完这个副本需要打倒每一个BOSS，那么我们就拿打倒一个BOSS来举例子
    1. 一个团队会有一个指挥（redux）
    2. 指挥会让团员执行攻击BOSS，治疗团员，开嗜血，战复，每一个执行都会更新这场BOSS战的状态，那么每一个动作，我们就比作是action，团员即是每一个组件
    3. 玩过魔兽世界的同学都知道，在我们执行攻击、治疗操作的时候，都需要选取一个目标，才能够执行操作，那么我们就把目标（boss）比作是state，当团员执行操作（action）的时候，会更新目标（boss）的状态
    4. 执行操作的函数命令，我们需要用到dispatch，然后通过reducer进行处理，从而更新状态

    回到正题，上面的描述大概就是redux的运行机制，但是描述的东西只能够管理状态，那么react组件怎么去获得状态，和获得执行动作权限？

    react-redux就是来解决这个事情的

    在react中，数据的传递是单向的，由父组件传向子组件，子组件通过props来获得数据
    看下列代码结构，每一个数据都是从Root组件传下来的，那么现在给大家5分钟时间，思考下：

    假如我的Child1组件内部操作，更新了title，其他组件的title也会更新，在不使用redux的情况下，我们应该怎么操作

    ```
        <Root  title="aaa">
            <Father1 title={this.props.title}>
                <Child1 >{this.props.title}</Child1>
            </Father1>
            <Father2  title={this.props.title}>
                <Child2>{this.props.title}</Child2>
            </Father2>
        </Root>
    ```



    你是不是觉得很麻烦，繁琐，组件代码变得臃肿，还很冗长


    # connect函数


connect(mapStateToProps,mapDispatchToProps,未知)(component)
这个函数会有三个值
- 第一个值是决定哪个state要从props获取
- 第二个值是决定哪个dispatch（更新数据）要从props获取，在进行多一步封装函数
- component是指哪一个组件需要从props获取上面的东西

如果mapStateToProps和mapDispatchToProps等没传，那么component在props只能获得dispatch方法

**总结：如果组件功能单一，那么就没必要传mapStateToProps等等，直接使用dispatch来更新数据,当需要全局获得状态时，则就给组件connect一下**


****

    