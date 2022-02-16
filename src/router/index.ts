import React from 'react';

export interface IRouteBase {
  // 路由路径
  path: string;
  // 路由组件
  component?: any;
  // 302 跳转
  redirect?: string;
}
export interface IRouteMeta {
  title: string;
  icon?: string;
}
export interface IRoute extends IRouteBase {
  children?: IRoute[];
}
const routes: IRoute[] = [
  {
    path: '/search',
    component: React.lazy(() => import('../view/Search')),
    // children: [
    //   {
    //     path: '/system/login',
    //     component: React.lazy(() => import('../views/system/login')),
    //     meta: {
    //       title: '登录'
    //     }
    //   },

    // ],
  }
  
];

export default routes;