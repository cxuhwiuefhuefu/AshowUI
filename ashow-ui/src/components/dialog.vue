<template>
    <transition name="dialog-fade">
        <div class="as-dialog_wrapper" v-show="visible" @click.self="handleClose">
            <div class="as-dialog" :style="{width: width, marginTop: top}">
                <div class="as-dialog_header">
                    <slot name="title">
                        <!-- 将span标签放在slot内，这样不仅可以定义title文本，还可以自定义样式等 -->
                        <span class="as-dialog_title">
                            {{title}}
                        </span>
                    </slot>
                    <button class="as-dialog_headerbtn" @click="handleClose">
                        <i class="as-icon-close"></i>
                    </button>
                </div>
                <div class="as-dialog_body">
                    <span>这是一段信息</span>
                </div>
                <div class="as-dialog_footer" v-if="$slots.footers">
                    <as-button>取消</as-button>
                    <as-button type="primary">确定</as-button>
                </div>
            </div>
        </div>
    </transition>
</template> 

<script>
export default {
    name: 'AsDialog',
    props: {
        title: {
            type: String,
            default: '提示'
        },
        width: {
            type: String,
            default: '50%'
        },
        top: {
            type: String,
            defalut: '15vh'
        },
        footer: {
            type: Object
        },
        visible: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            show: false,
        }
    },
    methods: {
        handleClose() {
            this.$emit('update:visible', false)
        }
    }

}
</script>


<style lang="scss" scoped>
.as-dialog_wrapper {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    margin: auto;
    z-index: 2001;
    background-color: rgba(0, 0, 0, 0.5);
    .as-dialog {
        position: relative;
        margin: 15vh auto 50px;
        background: #fff;
        border-radius: 2px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
        box-sizing: border-box;
        width: 30%;
        &_header {
            padding: 20px 20px 10px;
            .as-dialog_title {
                line-height: 24px;
                font-size: 18px;
                color: #303133;
            }
            .as-dialog_headerbtn {
                position: absolute;
                top: 20px;
                right: 20px;
                padding: 0;
                background: transparent;
                border: none;
                outline: none;
                cursor: pointer;
                font-size: 16px;
                .as-icon-close {
                    color: #909090;
                }
            }
        }
        &_body {
            padding: 30px 20px;
            color: #606266;
            font-size: 14px;
            word-break: break-all;
        }
        &_footer {
            padding: 10px 20px 20px;
            text-align: right;
            box-sizing: border-box;
            ::v-deep .as-button:first-child {
                margin-right: 20px;   
            }
        }
    }
}

// 动画效果
.dialog-fade-enter-active {
    animation: fade 0.3s;
}
.dialog-fade-leave-active {
    animation: fade 0.3s reverse;
}
@keyframes fade {
    0% {
        opacity: 0;
        transform: translateY(-20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}


</style>

