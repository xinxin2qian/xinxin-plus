import type { ExtractPropTypes, PropType } from 'vue';
import type { ButtonNativeType, ButtonSizeType, ButtonType } from './interface';
// import { buttonTypes, buttonNativeTypes } from "./interface";
import { componentSizes } from '@xinxin-plus/constants';
// export const ButtonType = ["primary", "success", "info", "warning", "danger", "text"];
// export const ButtonSize = ["large", "medium", "small", "mini"];
export const buttonTypes = ['default', 'primary', 'success', 'info', 'warning', 'danger', 'text'] as const;
export const buttonNativeTypes = ['button', 'submit', 'reset'] as const;
export const Props = {
  type: {
    type: String as PropType<ButtonType>,
    default: (): ButtonType => 'default',
    validator(value: ButtonType) {
      return buttonTypes.includes(value);
    }
  },
  size: {
    type: String as PropType<ButtonSizeType>,
    validator(value: ButtonSizeType) {
      return componentSizes.includes(value);
    }
  },
  plain: {
    type: Boolean,
    default: (): Boolean => false
  },
  round: {
    type: Boolean,
    default: (): Boolean => false
  },
  circle: {
    type: Boolean,
    default: (): Boolean => false
  },
  loading: {
    type: Boolean,
    default: (): Boolean => false
  },
  disabled: {
    type: Boolean,
    default: (): Boolean => false
  },
  icon: {
    type: String,
    default: (): String => ''
  },
  autoFocus: {
    type: Boolean,
    default: (): Boolean => false
  },
  nativeType: {
    type: String as PropType<ButtonNativeType>,
    default: (): ButtonNativeType => 'button',
    validator(value: ButtonNativeType) {
      return buttonNativeTypes.includes(value);
    }
  }
};
export const Emits = {
  click: (evt: MouseEvent): MouseEvent => evt
};
// vue自带的ExtractPropTypes进行包装，导出的才能是真正的类型
export type ButtonProps = ExtractPropTypes<typeof Props>;
