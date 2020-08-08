<template>
    <div class="as-radio-group">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'AsRadioGroup',
    // provide: {
    //     RadioGroup: this
    // },
    provide() {
        return {
            RadioGroup: this
        }
    },
    props: {
        // as-radio-group接受到了value值
        // 将来还需要触发我们当前的input事件
        // provide 与 inject   抄袭了React的content 上下文组件 provider/consumer
        value: null
    }
}
</script>