<template>
  <button class="as-button" 
          :class="[`as-button--${type}`, {
                    'is-plain': plain,
                    'is-round': round,
                    'is-circle': circle,
                    'is-disabled': disabled
          }]"

          @click="handleClick"
  >
    
    <!-- 图标 -->
    <i v-if="icon" :class="`as-icon-${icon}`"></i>
    
    <!-- 文字 -->
    <!-- 如果没有传入文本插槽，则不显示span内容 -->
    <span v-if="$slots.default"><slot></slot></span>

  </button>
</template>

<script>
export default {
    name: 'AsButton', // 起这个名字不是必须的 比如拿到这个组件注册的时候就能拿到组价的名字
    // 封装一个通用的组件，会对我们的props做一个约束，会对props进行校验，换句话说我希望接受的type是字符串类型的 约束你给我传的类型
    props: {
        type: {
            //  数据类型：字符串类型
            type: String,
            default: 'default'
        },
        // 是否是朴素按钮
        plain: { 
            type: Boolean, // 由于是布尔值，用对象来控制是最简单的
            default: false
        },
        // 是否是圆弧的按钮
        round: {
            type: Boolean,
            default: false
        },
        // 是否是圆形的按钮
        circle: {
            type: Boolean,
            default: false
        },
        // 图标按钮
        icon: {
            type: String,
            default: ''
        },
        // 禁用按钮
        disabled: {
          type: Boolean,
          default: false
        }
    },
    created() {
        // console.log(this.type);
        // console.log(this.$slots.default);
    },
    mounted() {
      console.log(this.$slots.default);
    },
    methods: {
      handleClick (e) {
        this.$emit('click', e);
      }
    }
}
</script>

<style lang="scss" scoped>
// scope就是我们的样式只影响我们的当前组件

.as-button {
    display: inline-block;
    line-height: 1; // 根据该元素的本身的字体大小
    white-space: nowrap; // 定义元素内的空白怎么处理： 只保留一个空白，文本不会换行，会在同一行上继续，直到遇到br标签为止
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: 0.1s;
    font-weight: 500;

    // 禁止元素的文字被选中
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
    &:hover,
    &:focus {
        color: #409eff;
        border-color: #c6e2ff;
        background-color: #ecf5ff;
    }
}

.as-button {
  // 原色按钮
  &--primary {
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
    &:hover,
    &:focus {
      background: #66b1ff;
      border-color: #66b1ff;
      color: #fff;
    }
    &.is-plain {
      color: #409eff;
      background: #ecf5ff;
      border-color: #b3d8ff;
      &:hover,
      &:focus {
        background: #409eff;
        border-color: #409eff;
        color: #fff;
      }
    }
  }
  // 成功按钮
  &--success {
    color: #fff;
    background-color: #67c23a;
    border-color: #67c23a;
    &:hover,
    &:focus {
      background: #85ce61;
      border-color: #85ce61;
      color: #fff;
    }
    &.is-plain {
      color: #67c23a;
      background: #f0f9eb;
      border-color: #c2e7b0;
      &:hover,
      &:focus {
        background: #67c23a;
        border-color: #67c23a;
        color: #fff;
      }
    }
  }
  // 信息按钮
  &--info {
    color: #fff;
    background-color: #909399;
    border-color: #909399;
    &:hover,
    &:focus {
      background: #a6a9ad;
      border-color: #a6a9ad;
      color: #fff;
    }
    &.is-plain {
      color: #909399;
      background: #f4f4f5;
      border-color: #d3d4d6;
      &:hover,
      &:focus {
        background: #909399;
        border-color: #909399;
        color: #fff;
      }
    }
  }
  // 警告按钮
  &--warning {
    color: #fff;
    background-color: #e6a23c;
    border-color: #e6a23c;
    &:hover,
    &:focus {
      background: #ebb563;
      border-color: #ebb563;
      color: #fff;
    }
    &.is-plain {
      color: #e6a23c;
      background: #fdf6ec;
      border-color: #f5dab1;
      &:hover,
      &:focus {
        background: #e6a23c;
        border-color: #e6a23c;
        color: #fff;
      }
    }
  }
  // 危险按钮
  &--danger {
    color: #fff;
    background-color: #f56c6c;
    border-color: #f56c6c;
    &:hover,
    &:focus {
      background: #f78989;
      border-color: #f78989;
      color: #fff;
    }
    &.is-plain{
      color: #f56c6c;
      background: #fbc4c4;
      &:hover,
      &:focus{
        background: #f56c6c;
        border-color: #f56c6c;
        color: #fff;
      } 
    }
  }  
}

// 椭圆角按钮
.as-button.is-round {
    border-radius: 20px;
    padding: 12px 23px;
}

// 圆形按钮
.as-button.is-circle {
    border-radius: 50%;
    padding: 12px;
}

// 相邻兄弟选择器
.as-button [class*=as-icon-] + span {
  margin-left: 5px;
}

// 禁用按钮
.as-button.is-disabled {
  cursor: no-drop;
}

</style>


