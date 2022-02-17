import React from 'react';

export interface IRouteBase {
  // 路由路径
  path: string;
  // 路由组件
  component?: any;
  // 302 跳转
  redirect?: string;
  meta: IRouteMeta
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
    path: '/',
    component: React.lazy(() => import('../pages/Home')),
    meta: {
      title: '首页',
    },
  }
  
];

export default routes;