import type { ButtonHTMLAttributes } from "vue";
export type ButtonSizeType = "default" | "medium" | "small" | "mini" | "tiny";
export type ButtonType = "default" | "primary" | "success" | "info" | "warning" | "danger" | "text";
export type ButtonNativeType = NonNullable<ButtonHTMLAttributes["type"]>;