<template>
  <div class="my-outer">
    <div class="el-ui">
      <el-form ref="form" :model="articleForm" label-width="80px">
        <el-form-item label="标题">
          <el-input v-model="articleForm.title"></el-input>
        </el-form-item>
        <el-form-item label="内容摘要">
          <el-input
            v-model="articleForm.abstract"
            type="textarea"
            :autosize="autosize"
          ></el-input>
        </el-form-item>
        <el-form-item label="分类">
          <el-select
            class="cateSelect"
            v-model="value1"
            placeholder="请选择一级分类"
          >
            <el-option
              v-for="item in options1"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            >
            </el-option>
          </el-select>
          <el-select
            class="cateSelect"
            v-model="value2"
            placeholder="请选择二级分类"
          >
            <el-option
              v-for="item in options2"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="封面">
          <el-upload
            class="avatar-uploader"
            action=""
            :show-file-list="false"
            :http-request="UnloadImg"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item class="editor-content" label="内容">
          <v-md-editor
            :toc-nav-position-right="false"
            class="my-editor"
            v-model="articleForm.content"
            height="500px"
            left-toolbar="undo redo clear | h bold italic strikethrough quote | emoji | ul ol table hr | link image code | save"
          ></v-md-editor>
        </el-form-item>
      </el-form>
      <div style="display:flex;justify-content:flex-end;">
        <el-button type="primary" round @click="submitRelease">发布</el-button>
        <el-button type="success" round @click="submitPreserve">保存至草稿</el-button>
      </div>
    </div>
  </div>
</template>

<script>
// 进阶版引入组件
import Vue from "vue";
import VMdEditor from "@kangc/v-md-editor/lib/codemirror-editor";
import "@kangc/v-md-editor/lib/style/codemirror-editor.css";
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';
// highlightjs
import hljs from "highlight.js";
// codemirror 编辑器的相关资源
import Codemirror from "codemirror";
// mode
import "codemirror/mode/markdown/markdown"; 
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import "codemirror/mode/htmlmixed/htmlmixed";
import "codemirror/mode/vue/vue";
// edit
import "codemirror/addon/edit/closebrackets";
import "codemirror/addon/edit/closetag";
import "codemirror/addon/edit/matchbrackets";
// placeholder
import "codemirror/addon/display/placeholder";
// active-line
import "codemirror/addon/selection/active-line";
// scrollbar
import "codemirror/addon/scroll/simplescrollbars";
import "codemirror/addon/scroll/simplescrollbars.css";
// style
import "codemirror/lib/codemirror.css";
// 显示行号
import createLineNumbertPlugin from "@kangc/v-md-editor/lib/plugins/line-number/index";
VMdEditor.use(createLineNumbertPlugin());
// 显示快捷复制代码按钮
import createCopyCodePlugin from "@kangc/v-md-editor/lib/plugins/copy-code/index";
import "@kangc/v-md-editor/lib/plugins/copy-code/copy-code.css";
VMdEditor.use(createCopyCodePlugin());
// 引入emoji
import createEmojiPlugin from "@kangc/v-md-editor/lib/plugins/emoji/index";
import "@kangc/v-md-editor/lib/plugins/emoji/emoji.css";
VMdEditor.use(createEmojiPlugin());
VMdEditor.Codemirror = Codemirror;
// import Prism from "prismjs"; 
import { reqPostArticleAdd } from "@/api";
VMdEditor.use(githubTheme, {
  // Prism,
  Hljs: hljs,
  // extend(md) {
  // md为 markdown-it 实例，可以在此处进行修改配置,并使用 plugin 进行语法扩展
  // md.set(option).use(plugin);
  // },
  codeHighlightExtensionMap: {
    vue: "html",
  },
});
Vue.use(VMdEditor);
export default {
  components: {},
  data() {
    return {
      articleForm: {
        // 标题
        title: "",
        // 内容摘要
        abstract: "",
        // 内容
        content: "",
      },
      // 分类
      options1: JSON.parse(sessionStorage.getItem("catesFirst")),
      options2: JSON.parse(sessionStorage.getItem("catesSecond")),
      value1: "",
      value2: "",
      imageUrl: "",
      // 上传图片
      fileData: "",
      formData: {},
      state: {
        release: "已发布",
        preserve: "草稿",
      },
      // 摘要输入框
      autosize:{minRows: 5, maxRows: 6}
    };
  },

  computed: {},
  methods: {
    UnloadImg(file) {
      // 此时我们只是储存了file，并没有直接提交，如果你需要直接提交直接在后面调用接口，传递FormData格式的file参数即可，复制submitFormData 里面的逻辑即可。
      this.imageUrl = URL.createObjectURL(file.file);
      this.fileData = file.file;
      // console.log(file);
    },
    submitRelease() {
      // 通常文件上传，我们需要将参数变成`FormData`格式，所以通过`new FormData`进行转化，根据需要我们需要传递file和desc两个参数。
      let newFormData = new FormData();
      newFormData.append("cover_img", this.fileData);
      newFormData.append("title", this.articleForm.title);
      newFormData.append("content", this.articleForm.content);
      newFormData.append("abstract", this.articleForm.abstract);
      newFormData.append("cate_f_id", this.value1);
      newFormData.append("cate_s_id", this.value2);
      newFormData.append("state", this.state.release);
      reqPostArticleAdd(newFormData);
    },
    submitPreserve() {
      // 通常文件上传，我们需要将参数变成`FormData`格式，所以通过`new FormData`进行转化，根据需要我们需要传递file和desc两个参数。
      let newFormData = new FormData();
      newFormData.append("cover_img", this.fileData);
      newFormData.append("title", this.articleForm.title);
      newFormData.append("content", this.articleForm.content);
      newFormData.append("abstract", this.articleForm.abstract);
      newFormData.append("cate_f_id", this.value1);
      newFormData.append("cate_s_id", this.value2);
      newFormData.append("state", this.state.preserve);
      reqPostArticleAdd(newFormData);
    },
  },
  mounted() {
    this.$store.dispatch("getCatesFirst");
    this.$store.dispatch("getCatesSecond");
  },
};
</script>

<style>
.my-outer {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 110px;
  margin-bottom: 100px;
}
.el-ui {
  width: 1200px;
}
/* 分类选择 */
.cateSelect {
  margin-right: 20px;
}

/* 图片上传 */
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.my-editor {
  margin-top: 80px;
}
.editor-content{
  margin-top: -30px;
}
</style>
