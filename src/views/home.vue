<template>
  <div class="ctf-ics-mobile-ui-doc">
    <aside>
      <div class="list-box">
        <div
          class="item-list"
          v-for="(item, index) in MenuLangList"
          :key="index"
        >
          <p class="titls">
            <span>{{ item["title"] }}</span>
          </p>
          <li
            v-for="(v, i) in item.list"
            :key="i"
            :class="{ active: v.path === route.path }"
            @click="
              switchMenu({
                parentTitle: item['title'],
                title: v['title'],
                index: index,
                index1: i,
                path: v['path'],
              })
            "
          >
            {{ v["title"] }}
          </li>
        </div>
      </div>
    </aside>
    <main >
      <router-view v-highlight></router-view>
    </main>
     <div class="iphone-view">
      <iphone-view/>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, watchEffect } from "vue";
import { useRouter, useRoute } from "vue-router";
import MenuList from "@/const/menuList.js";
import { useMainStore } from "@/store/index";
import iphoneView from './iphone-view.vue'
const $store = useMainStore();
const router = useRouter();
const route = useRoute()
const menuIndex = ref(sessionStorage.getItem("mIndex") || "0-0");
let menuData = [];
const state = reactive({
  MenuLangList: [],
  lang: $store.getLang,
});
const activeIndex = ref(sessionStorage.getItem("index") || 0);
// 菜单切换
const switchMenu = (obj) => {
  if (router.currentRoute.value.path != obj.path) {
    router.push(obj.path);
  }
  menuIndex.value = obj.index + "-" + obj.index1;
  sessionStorage.setItem("mIndex", obj.index + "-" + obj.index1);
};
watchEffect(() => {
  MenuList.forEach((item, index) => {
    let menuItem = {
      title: $store.lang == "CN" ? item["title-cn"] : item["title-en"],
      list: [],
    };
    menuData.push(menuItem);
    item["list"].forEach((v, i) => {
      let menuItem = {
        title: $store.lang == "CN" ? v["title-cn"] : v["title-en"],
        path: v["path"],
      };
      menuData[index]["list"].push(menuItem);
      state.MenuLangList = menuData;
    });
  });
});
const { MenuLangList } = state;
console.log('MenuLangList', MenuLangList)
</script>

<style lang="scss" scoped>
.ctf-ics-mobile-ui-doc {
  display: flex;
  height: calc(100vh - 64px - 2vh);
  margin-top: 2vh;
  overflow: hidden;
  aside {
    // width: 317px;
    width: 260px;
    height: 100%;
    border-right: 1px solid rgba(0, 0, 0, 0.06);
    overflow-y: auto;
    .list-box {
      width: 100%;
      height: auto;
      overflow: hidden;
      padding-bottom: 30px;
      box-sizing: border-box;
      .item-list {
        width: 100%;
        height: auto;
        overflow: hidden;
        p {
          padding-left: 34px;
          box-sizing: border-box;
          height: 30px;
          span {
            width: 100%;
            height: 100%;
            display: inline-block;
            font-size: 14px;
            color: #00000073;
            border-bottom: 1px solid #f0f0f0;
          }
        }
        li {
          list-style: none;
          padding-left: 34px;
          box-sizing: border-box;
          cursor: pointer;
          font-size: 14px;
          color: #000000d9;
          line-height: 40px;
          transform: all 0.2s ease;
          &:hover {
            color: #0e80eb;
          }
        }
        li.active {
          color: #0e80eb;
          background: rgba(14, 128, 235, 0.1);
          border-left: 3px solid #0e80eb;
          padding-left: 31px;
          transform: all 0.2s ease;
        }
      }
    }
  }
  main {
    // width: calc(100% - 317px);
    flex: 1;
    height: 100%;
    // padding: 0 calc(2vw + 100px) 0 2vw;
    padding: 20px;

    overflow-x: hidden;
    overflow-y: auto;
    word-wrap: break-word;
    // border: 1px solid blue;
  }
}
aside::-webkit-scrollbar {
  width: 2px;
  height: 2px;
}

aside::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background: #b8b8bb;
}

aside::-webkit-scrollbar-track {
  border-radius: 0px;
  background: #fff;
}
main::-webkit-scrollbar {
  width: 2px;
  height: 2px;
}

main::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background: #b8b8bb;
}

main::-webkit-scrollbar-track {
  border-radius: 0px;
  background: #fff;
}
.iphone-view {
  // max-width: 420px;
  // min-width: 420px;
  max-width: 375px;
  min-width: 375px;
  flex: 1;
  // border: 3px solid green;
  padding: 30px;
}
</style>
