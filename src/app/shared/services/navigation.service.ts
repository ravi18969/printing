import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface IMenuItem {
  type: string,       // Possible values: link/dropDown/icon/separator/extLink
  name?: string,      // Used as display text for item and title for separator type
  state?: string,     // Router state
  icon?: string,      // Material icon name
  tooltip?: string,   // Tooltip text 
  disabled?: boolean, // If true, item will not be appeared in sidenav.
  sub?: IChildItem[], // Dropdown items
  badges?: IBadge[]
}
interface IChildItem {
  type?: string,
  name: string,       // Display text
  state?: string,     // Router state
  icon?: string,
  sub?: IChildItem[]
}

interface IBadge {
  color: string;      // primary/accent/warn/hex color codes(#fff000)
  value: string;      // Display text
}

@Injectable()
export class NavigationService {
  constructor() { }


  iconMenu: IMenuItem[] = [
    {
      name: 'DASHBOARD',
      type: 'link',
      tooltip: 'Dashboard',
      icon: 'dashboard',
      state: 'dashboard',
      // badges: [{ color: 'accent', value: '100+' }],
    },
    // {
    //   name: 'DOC',
    //   type: 'extLink',
    //   tooltip: 'Documentation',
    //   icon: 'library_books',
    //   state: 'http://egret-doc.mhrafi.com/'
    // },
    // {
    //   name: 'Create',
    //   type: 'link',
    //   tooltip: 'Inbox',
    //   icon: 'album',
    //   state: 'dashboard'
    // },
    {
      name: 'New Job',
      type: 'dropDown',
      tooltip: 'Chat',
      icon: 'build',
      state: 'dashboard',
      sub: [
        { name: 'Create', icon: 'settings', state: 'job/create-job' },
        { name: 'Papers', icon: 'line_weight', state: 'job/select-papers' },
      ]
    },
    {
      name: 'Edit Job',
      type: 'link',
      tooltip: 'Inbox',
      icon: 'create',
      state: 'job/edit-job'
    },
    {
      name: 'Fabrication',
      type: 'link',
      tooltip: 'Inbox',
      icon: 'format_paint',
      state: 'job/fabrication'
    },
    // {
    //   name: 'Step4',
    //   type: 'dropDown',
    //   tooltip: 'Chat',
    //   icon: 'album',
    //   state: 'dashboard',
    //   sub: [
    //     { name: 'CONFIRM', 
    //       state: 'confirm',
    //       type: 'dropDown',
    //       sub: [
    //         { name: 'New', state: 'confirm' },
    //         { name: 'Comming Soon', state: 'loader' },
    //       ]  
    //     },
    //     { name: 'LOADER', state: 'loader' },
    //   ]
    // },
    {
      name: 'Inventory',
      type: 'link',
      tooltip: 'Inbox',
      icon: 'store',
      state: 'job/inventory'
    },
    {
      name: 'List items',
      type: 'link',
      tooltip: 'Chat',
      icon: 'layers',
      state: 'job/list-jobs'
    },
  ]

  // Icon menu TITLE at the very top of navigation.
  // This title will appear if any icon type item is present in menu.
  iconTypeMenuTitle: string = 'Frequently Accessed';
  // sets iconMenu as default;
  menuItems = new BehaviorSubject<IMenuItem[]>(this.iconMenu);
  // navigation component has subscribed to this Observable
  menuItems$ = this.menuItems.asObservable();

  // Customizer component uses this method to change menu.
  // You can remove this method and customizer component.
  // Or you can customize this method to supply different menu for
  // different user type.
  publishNavigationChange(menuType: string) {
    this.menuItems.next(this.iconMenu);
  }
}