// 引入组件的方式。导出方式一：直接引入
// import Button from "./src/button.vue";

// export default Button;

// 引入组件的方式。导出方式二：通过install方法
import Button from "./src/button.vue";
// import type { App } from "vue";
// Button.install = function (app: App) {
//     app.component(Button.name, Button)
// }
// export default Button;
import { withInstall } from "@xinxin-plus/utils";
export const XinButton = withInstall(Button)
export default XinButton;