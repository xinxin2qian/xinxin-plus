<template>
    <button class="xin-button" :class="classList" :type="nativeType" :auto-focus="autoFocus" :disabled="disabled || loading" @click="handlerClick">
        <slot></slot>
    </button>
</template>
<script lang="ts" setup name="XinButton">
import { computed } from 'vue';
import { Props, Emits } from './button';
// defineOptions({
//   name: 'XinButton'
// })
const props = defineProps(Props);
const emits = defineEmits(Emits);
const classList = computed(() => {
    const { type, size, round, plain, circle, disabled, loading } = props
    return [
        {
            [`xin-button--${type}`]: type,
            [`xin-button--${size}`]: size,
            [`is-disabled`]: disabled,
            [`is-loading`]: loading,
            [`is-round`]: round,
            [`is-plain`]: plain,
            [`is-circle`]: circle
        }
    ]
})
function handlerClick (evt: MouseEvent): void {
    emits("click", evt);
}
// const p = computed(() => {
//     const { size = "meduim", type = "text" } = props;
//     return {
//         size,
//         type
//     }
// })
// export default defineComponent({
//     name: "XinButton",
//     props: buttonProps,
//     setup(props) {
//         const p = computed(() => {
//             const { size = "meduim", type = "text" } = props;
//             return {
//                 size,
//                 type
//             }
//         })
//         return {
//             p
//         }
//     }
// })
</script>