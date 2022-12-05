import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/article",
    name: "article",
    meta: {
      title: "文章列表",
      icon: "IconArticle",
    },
    component: () => import("../views/article/PageAtricle.vue"),
    children: [
      {
        path: "/article",
        name: "article",
        meta: {
          title: "文章详情",
        },
        component: () => import("../views/article/PageAtricleDetail.vue"),
      },
    ],
  },
  {
    path: "/comment",
    name: "comment",
    meta: {
      title: "回复",
      icon: "IconComment",
    },
    component: () => import("../views/comment/PageComment.vue"),
  },
  {
    path: "/message",
    name: "message",
    meta: {
      title: "留言",
      icon: "IconMessage",
    },
    component: () => import("../views/message/PageMessage.vue"),
  },

  {
    path: "/user",
    name: "user",
    meta: {
      title: "用户列表",
      icon: "IconUser",
    },
    component: () => import("../views/user/PageUser.vue"),
  },
  {
    path: "/link",
    name: "link",
    meta: {
      title: "友情链接",
      icon: "IconLink",
    },
    component: () => import("../views/link/PageLink.vue"),
  },
  {
    path: "/category",
    name: "category",
    meta: {
      title: "分类",
      icon: "IconCategory",
    },
    component: () => import("../views/category/PageCategory.vue"),
  },
  {
    path: "/tag",
    name: "tag",
    meta: {
      title: "标签",
      icon: "IconTag",
    },
    component: () => import("../views/tag/PageTag.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
export { routes };
