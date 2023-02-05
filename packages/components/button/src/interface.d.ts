import type { ButtonHTMLAttributes } from "vue";
export type ButtonSizeType = "default" | "medium" | "small" | "mini" | "tiny";
export type ButtonType = "default" | "primary" | "success" | "info" | "warning" | "danger" | "text";
export type ButtonNativeType = NonNullable<ButtonHTMLAttributes["type"]>;
export const buttonTypes = ["default", "primary", "success", "info", "warning", "danger", "text"] as const;
export const buttonNativeTypes = ['button', 'submit', 'reset'] as const;