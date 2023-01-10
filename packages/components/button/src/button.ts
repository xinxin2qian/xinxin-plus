import { ExtractPropTypes } from "vue";
export const ButtonType = ["primary", "success", "info", "warning", "danger", "text"];
export const ButtonSize = ["large", "medium", "small", "mini"];
export const buttonProps = {
    type: {
        type: String,
        validator(value: string) {
            return ButtonType.includes(value)
        }
    },
    size: {
        type: String,
        validator(value: string) {
            return ButtonSize.includes(value)
        }
    }
}
// vue自带的ExtractPropTypes进行包装，导出的才能是真正的类型
export type ButtonProps = ExtractPropTypes<typeof buttonProps>