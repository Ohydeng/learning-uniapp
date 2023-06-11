"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  data() {
    return {
      // 保存聊天的内容
      chatList: [{
        isMe: false,
        type: "txt",
        content: "你好，我是知心姐姐，请问你想和我聊什么呢？"
      }, {
        isMe: false,
        type: "img",
        content: "/static/images/1.jpg"
      }, {
        isMe: true,
        type: "txt",
        content: "哇，你真漂亮"
      }, {
        isMe: true,
        type: "img",
        content: "/static/images/2.jpg"
      }],
      myInput: ""
    };
  },
  methods: {
    choseImgAndSend() {
      console.log("1111");
      common_vendor.index.chooseImage({
        count: 1,
        sizeType: ["original", "compressed"],
        sourceType: ["album", "camera"],
        success: (res) => {
          console.log(res.tempFilePaths[0]);
          let senMsg = {
            isMe: true,
            type: "img",
            content: res.tempFilePaths[0]
          };
          this.chatList.push(senMsg);
          let resMsg = {
            isMe: false,
            type: "img",
            content: res.tempFilePaths[0]
          };
          this.chatList.push(resMsg);
          common_vendor.index.pageScrollTo({
            scrollTop: 9999,
            duration: 0
          });
          common_vendor.index.setStorageSync("chatList", JSON.stringify(this.chatList));
        }
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.chatList, (item, index, i0) => {
      return common_vendor.e({
        a: !item.isMe
      }, !item.isMe ? common_vendor.e({
        b: common_assets._imports_0,
        c: item.type === "txt"
      }, item.type === "txt" ? {
        d: common_vendor.t(item.content)
      } : {}, {
        e: item.type === "img"
      }, item.type === "img" ? {
        f: item.content
      } : {}) : common_vendor.e({
        g: item.type === "txt"
      }, item.type === "txt" ? {
        h: common_vendor.t(item.content)
      } : {}, {
        i: item.type === "img"
      }, item.type === "img" ? {
        j: item.content
      } : {}, {
        k: common_assets._imports_1
      }), {
        l: index
      });
    }),
    b: $data.myInput,
    c: common_vendor.o(($event) => $data.myInput = $event.detail.value),
    d: common_assets._imports_2,
    e: common_vendor.o((...args) => $options.choseImgAndSend && $options.choseImgAndSend(...args)),
    f: common_vendor.o((...args) => _ctx.sendMsg && _ctx.sendMsg(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-a91d9e27"], ["__file", "D:/项目/小程序/uniapp/subpages/chat/chat.vue"]]);
wx.createPage(MiniProgramPage);
