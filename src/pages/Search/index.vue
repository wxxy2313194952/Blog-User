<template>
  <div style="margin:100px auto;width:1200px;">
    <v-md-editor v-model="text" left-toolbar="undo redo | tip" height="500px" />
  </div>
</template>

<script>
import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';

import Prism from 'prismjs';

VueMarkdownEditor.use(vuepressTheme, {
  Prism,
  extend(md) {
    // md为 markdown-it 实例，可以在此处进行修改配置,并使用 plugin 进行语法扩展
    // md.set(option).use(plugin);
  }
});
export default {
  data() {
      return {
        text:`::: tip
  你可以点击 toolbar 中的 tip 来快速插入
:::

::: warning
  这是一段警告
:::

::: danger
  这是一个危险警告
:::

::: details
  这是一个详情块，在 IE / Edge 中不生效
:::

::: tip 自定义标题
  你也可以自定义块中的标题
:::

::: danger STOP
  危险区域，禁止通行
:::

\`\`\`javascript
{
  "code": 200,
  "message": "获取文章列表成功",
  "data":{
    "username":
  }
}
\`\`\`
`,
      };
    },
}
</script>

<style>
/* margin-top: 75px; */
</style>