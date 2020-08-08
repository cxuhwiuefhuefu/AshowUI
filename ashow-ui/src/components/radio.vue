<template>
    <label class="as-radio" 
           :class="{'is-checked': label === model}">
        <span class="as-radio_input">
            <span class="as-radio_inner"></span>
            <input type="radio"
                   class="as-radio_original"
                   :value="label"
                   :name="name"
                   v-model="model">
        </span>       
        <span class="as-radio_label">
            <slot></slot>
            <!-- 如果没有传内容，就把label作为文本显示 -->
            <template v-if="!$slots.default">{{label}}</template>
        </span>
    </label>
</template>

<script>
// 父组价传进来的 子组件不能直接修改 不能违反单向数据流的原则 model取决于外界传进来的值 而且还能修改传进来的值
// 这个设计看源码看到的

export default {
    name: 'AsRadio',
    inject: {
        RadioGroud: {
            default: ''
        }, 
    },
    props: {
        label: {
            type: [String, Number, Boolean],
            default: ''
        },
        value: null,
        name: {
            type: String,
            default: ''
        }
    },
    computed: {
        model: {
            get() {
                // 值的来源有两个 取决于是否被radioGroup包裹
                return this.isGroup ? this.RadioGroud.value : this.value;
            },
            set(value) {
                // 触发父组件给当前组件注册的input事件
                return this.isGroup ? this.RadioGroud.$emit('input', value) : this.$emit('input', value);
            }
        },
        // 用于判断radio是否被radioGroup包裹
        isGroup() {
            return !!this.RadioGroud;
        }
    }
}
</script>



<style lang="scss" scoped>
.as-radio {
    color: #606266;
    font-weight: 500;
    line-height: 1;
    position: relative;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;
    outline: none;
    font-size: 14px;
    margin-right: 30px;
    -moz-user-select: none;
    -webkit-user-select: none;
    .as-radio_input {
        white-space: nowrap;
        cursor: pointer;
        outline: none;
        display: inline-block;
        line-height: 1;
        position: relative;
        vertical-align: middle;
        .as-radio_inner {
            border: 1px solid #dcdfe6;
            border-radius: 100%;
            width: 14px;
            height: 14px;
            background-color: #fff;
            position: relative;
            cursor: pointer;
            display: inline-block;
            box-sizing: border-box;
            &::after {
                width: 4px;
                height: 4px;
                border-radius: 100%;
                background-color: #fff;
                content: '';
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%) scale(0);
                transition: transform .15s ease-in;
            }
        }
        // 让原始的框看不到
        .as-radio_original {
            opacity: 0;
            outline: none;
            position: absolute;
            z-index: -1;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: 0;
        }
    }
    .as-radio_label {
        font-size: 14px;
        padding-left: 10px;
    }
}

// 选中的样式
.as-radio.is-checked {
    .as-radio_input {
        .as-radio_inner {
            border-color: #409eff;
            background-color: #409eff;
            &:after {
                transform: translate(-50%, -50%) scale(1);
            }
        }
    }
    .as-radio_label {
        color: #409eff;
    }
}
    
</style>

