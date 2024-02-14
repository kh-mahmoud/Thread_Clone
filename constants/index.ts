export const sidebarLinks = [
    {
      imgURL: "/home.svg",
      route: "/",
      label: "Home",
    },
    {
      imgURL: "/search.svg",
      route: "/search",
      label: "Search",
    },
    {
      imgURL: "/heart.svg",
      route: "/activity",
      label: "Activity",
    },
    {
      imgURL: "/create.svg",
      route: "/create-thread",
      label: "Create Thread",
    },
    // {
    //   imgURL: "/community.svg",
    //   route: "/communities",
    //   label: "Communities",
    // },
    {
      imgURL: "/user.svg",
      route: "/profile",
      label: "Profile",
    },
  ];
  
  export const profileTabs = [
    { value: "threads", label: "Threads", icon: "/reply.svg" },
    { value: "replies", label: "Replies", icon: "/members.svg" },
    { value: "likes", label: "Likes", icon: "/heart-gray.svg" },
  ];
  
  export const communityTabs = [
    { value: "threads", label: "Threads", icon: "/reply.svg" },
    { value: "members", label: "Members", icon: "/members.svg" },
    { value: "requests", label: "Requests", icon: "/request.svg" },
  ];