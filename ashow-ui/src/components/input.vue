<template>
    <div class="as-input" 
         :class="{'as-input-suffix': showSuffix}">
        <input class="as-input_inner"
               :class="{'is-disabled': disabled}"
               :placeholder="placeholder"
               :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
               :name="name"
               :value="value"
               @input="handleInput"
               :disabled="disabled">
        <span class="as-input_suffix" 
              v-if="showSuffix">
            <i class="as-input-icon as-icon-circle-close" 
               v-if="clearable && value" 
               @click="clear"></i>
            <i class="as-input_icon as-icon-view" 
               v-if="showPassword && type === 'passsword'" 
               @click="handlePassword" 
               :class="{'as-icon-view-active': passwordVisible}"></i> 
        </span>             
    </div>
</template>


<script>
export default {
    name: 'asInput',
    components: {
    },
    props: {
        placeholder: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: 'text'
        },
        name: {
            type: String,
            default: ''
        },
        disabled: {
            type: Boolean,
            default: false
        },
        value: {
            type: String,
            default: ''
        },
        // 是否显示clear按钮
        clearable: {
            type: Boolean,
            default: false
        },
        // 是否显示密码的按钮
        showPassword: {
            type: Boolean,
            default: false
        }
    },
    watch: {},
    computed: {
        showSuffix() {
            return this.clearable || this.showPassword
        }
    },
    data() {
        return {
            // 是否显示密码框
            passwordVisible: false
        }
    },
    methods: {
        handleInput(e) {
            this.$emit('input', e.target.value);
        },
        clear() {
            this.$emit('input', '');
        },
        handlePassword() {
            this.passwordVisible = !this.passwordVisible;
        }
    }
}
</script>

<style lang="scss" scoped>
.as-input {
    width: 100%;
    position: relative;
    font-size: 14px;
    display: inline-block;
    .as-input_inner {
        -webkit-appearance: none;
        background-color: none;
        background-image: none;
        border: 1px solid #dcdfe5;
        border-radius: 4px;
        box-sizing: border-box;
        color: #606266;
        display: inline-block;
        font-size: inherit;
        height: 40px;
        line-height: 40px;
        outline: none;
        padding: 0 15px;
        transition: border-color .2 cubic-bezier(.645, 045, .355, 1);
        width: 100%;
        &:focus {
            outline: none;
            border-color: #409eff;
        }
        // input禁用样式
        &.is-disabled {
            background-color: #f5f7fa;
            border-color: #e4e7ed;
            color: #c0c4cc;
            cursor: not-allowed;
        }
    }
}
.as-input_suffix {
    .as-input_inner {
        padding-right: 30px;
    }
    .as-input_suffix {
        position: absolute;
        right: 10px;
        height: 100%;
        top: 0;
        line-height: 40px;
        text-align: center;
        color: #c0c4cc;
        transition: all .3s;
        z-index: 900;
        i {
            color: #c0c4cc;
            font-size: 14px;
            cursor: pointer;
            transition: color .2s cubic-bezier(.645, .045, .355, 1);
        }
        .as-icon-view-active {
            color: blue;
        }
    }
}
</style>
