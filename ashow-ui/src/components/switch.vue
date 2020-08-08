<template>
    <div class="as-switch" 
         :class="{'is-checked': value}"
         @click="handleClick">
        <span class="as-switch_core" ref="core">
            <span class="as-switch_button"></span>
        </span> 
        <input type="checkbox"
               class="as-switch_input" 
               :name="name"
               ref="input" />
    </div>
</template>

<script>
export default {
    name: 'AsSwitch',
    props: {
        value: {
            type: Boolean,
            default: false
        },
        activeColor: {
            type: String,
            default: ""
        },
        inactiveColor: {
            type: String,
            default: ""
        },
        name: {
            type: String,
            default: ""
        }
    },
    methods: {
        async handleClick() {
            this.$emit('input', !this.value)
            // 点击的时候还需要修改我们的背景颜色
            // 等待value发生了改变 再setColor
            // 数据修改后，等待我们的DOM更新，再去修改我们的按钮的颜色
            await this.$nextTick();
            this.setColor();
            // 点击的时候也修改checked属性
            this.$refs.input.checked = this.value;
        },
        setColor() {
            // 修改开关的颜色
            if(this.activeColor || this.inactiveColor) {
                var color = this.value ? this.activeColor : this.inactiveColor;
                console.log(color, 111111)
                this.$refs.core.style.borderColor = color;
                this.$refs.core.style.backgroundColor = color;
            }    
        }
    },
    mounted() {
        // 修改开关的颜色
        this.setColor();
       
        // 控制checkbox的值，Input值同步value的值
        this.$refs.input.checked = this.value;
        // console.log(this.$data)
    }
}

</script>

<style lang="scss" scoped>
.as-switch {
    display: inline-block;
    align-items: center;
    position: relative;
    font-size: 14px;
    line-height: 20px;
    vertical-align: middle;
    .as-switch_core {
        margin: 0;
        display: inline-block;
        position: relative;
        width: 40px;
        height: 20px;
        border: 1px solid #dcdfe6;
        outline: none;
        border-radius: 10px;
        box-sizing: border-box;
        background: #dcdfe6;
        cursor: pointer;
        transition: border-color 0.3s, background-color 0.3s;
        vertical-align: middle;
        .as-switch_button {
            position: absolute;
            top: 1px;
            left: 1px;
            border-radius: 100%;
            transition: all 0.3s;
            width: 16px;
            height: 16px;
            background-color: #fff;
        }
    }
}

// 选中样式
.as-switch.is-checked {
    .as-switch_core {
        border-color: #409eff;
        background-color: #409eff;
        .as-switch_button {
            transform: translateX(20px);
        }
    }
}

// 隐藏input标签
.as-switch_input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
}
</style>

