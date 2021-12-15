import type { ComponentType } from "react";
import PageA from './pages/a';
import PageB from './pages/b';

export interface Route {
  pathname: string
  name: string
  component: ComponentType
  tabbar?: boolean
  icon?: string
  activeIcon?: string
}

export const routes: Route[] = [
  {
    pathname: '/a',
    name: 'A',
    tabbar: true,
    icon: '',
    activeIcon: '',
    component: PageA,
  },
  {
    pathname: '/b',
    name: 'B',
    tabbar: true,
    icon: '',
    activeIcon: '',
    component: PageB,
  },
]
