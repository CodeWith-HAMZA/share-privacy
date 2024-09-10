export const dummyImgUrl =
  "https://lh3.googleusercontent.com/ogw/AF2bZygRvYfXTacY7IhglNV_8iFv3m37ev2meftszITG0leA0Qo=s32-c-mo";

import type { Component } from "vue";
import { HomeIcon, UserRoundPlus } from "lucide-vue-next"; // Import your icons here

// Define the type for each menu item
interface MenuItem {
  id: number;
  name: string;
  icon: Component;
  color: string;
  onClick: () => void;
  url: string;
}

// Define the array of menu items
export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Home",
    icon: HomeIcon,
    color: "red",
    onClick: () => {
      console.log("Home clicked");
    },
    url: "/",
  },
  {
    id: 2,
    name: "Following",
    icon: UserRoundPlus,
    color: "red",
    onClick: () => {
      console.log("Following clicked");
    },
    url: "/following",
  },
];

// demo image
export const dummyImg =
  "https://fastly.picsum.photos/id/8/300/320.jpg?hmac=hfC55Yp-XFlQl4JkNg77MVnE4geeb0w1UAOExAfTtfM";
export const dummyVideo =
  "https://utfs.io/f/a229d104-d4e0-45a7-b271-2040ef2f0d7a-3a.mp4";
