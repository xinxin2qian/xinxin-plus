<template>
    <button>
        <slot>{{ p.size }} || {{ p.type }}</slot>
    </button>
</template>
<script lang="ts" setup>
import { computed } from 'vue';
import { buttonProps } from './button';
defineOptions({
  name: 'XinButton'
})
const props = defineProps(buttonProps);
const p = computed(() => {
    const { size = "meduim", type = "text" } = props;
    return {
        size,
        type
    }
})
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