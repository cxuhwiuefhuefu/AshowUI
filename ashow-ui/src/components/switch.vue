<template>
    <div class="as-switch" 
         :class="{'is-checked': value}"
         @click="handleClick">
        <span class="as-switch_core" ref="core">
            <span class="as-switch_button"></span>
        </span>
        <input type="check"
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
        handleClick() {
            this.$emit('input', !this.value)
            this.$refs.input.checked = this.value;
        }
    },
    mounted() {
        // if(this)
    }
}
</script>