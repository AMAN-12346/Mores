import React, { useState } from "react";
import AddProperty from "./addProperty/AddProperty";

// import Styles from "./Sidebar.module.css";

const Sidebar = () => {
  const [profile, setProfile] = useState(false);
  const [showAddProperty, setShowAddProperty] = useState(false);

  const handleProfileClick = () => {
    setProfile(!profile);
  };
  const handlePostPropertyClick = () => {
    setShowAddProperty(!showAddProperty);
  };

  const IconComponent = ({ icon }) => {
    return <div dangerouslySetInnerHTML={{ __html: icon }} />;
  };

  return (
    <div className="flex">
      <div className="w-[280px] h-[1014px] border-10 border-black bg-white pl-10 overscroll-x-none ">
        {data.map((item, index) => (
          <div
            className="flex mt-5 cursor-pointer "
            onClick={handlePostPropertyClick}>
          
            <div className="bg-secondary rounded-full p-2 ">
              <IconComponent icon={item.icon} />
            </div>

            <span className="ml-7 pt-2 text-lg  hover:text-primary">
              {item.title}
            </span>
          </div>
        ))}
      </div>

      <div className="text-3xl">
        {/* Conditionally rendering the AddProperty component */}
        {showAddProperty ? <AddProperty /> : profile && <h1>Profile</h1>}
      </div>
    </div>
  );
};

const data = [
  {
    title: "Profile",

    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">

    <path d="M12 4C13.0609 4 14.0783 4.42143 14.8284 5.17157C15.5786 5.92172 16 6.93913 16 8C16 9.06087 15.5786 10.0783 14.8284 10.8284C14.0783 11.5786 13.0609 12 12 12C10.9391 12 9.92172 11.5786 9.17157 10.8284C8.42143 10.0783 8 9.06087 8 8C8 6.93913 8.42143 5.92172 9.17157 5.17157C9.92172 4.42143 10.9391 4 12 4ZM12 6C11.4696 6 10.9609 6.21071 10.5858 6.58579C10.2107 6.96086 10 7.46957 10 8C10 8.53043 10.2107 9.03914 10.5858 9.41421C10.9609 9.78929 11.4696 10 12 10C12.5304 10 13.0391 9.78929 13.4142 9.41421C13.7893 9.03914 14 8.53043 14 8C14 7.46957 13.7893 6.96086 13.4142 6.58579C13.0391 6.21071 12.5304 6 12 6ZM12 13C14.67 13 20 14.33 20 17V20H4V17C4 14.33 9.33 13 12 13ZM12 14.9C9.03 14.9 5.9 16.36 5.9 17V18.1H18.1V17C18.1 16.36 14.97 14.9 12 14.9Z" fill="#018191"/>

  </svg>`,
  },

  {
    title: "My Listing",

    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">

        <path d="M1.66699 2.5H18.3337V17.5H1.66699V2.5ZM16.667 15.8333V4.16667H3.33366V15.8333H16.667ZM6.66699 5.83333H5.00033V7.5H6.66699V5.83333ZM8.33366 5.83333H15.0003V7.5H8.33366V5.83333ZM6.66699 9.16667H5.00033V10.8333H6.66699V9.16667ZM8.33366 9.16667H15.0003V10.8333H8.33366V9.16667ZM6.66699 12.5H5.00033V14.1667H6.66699V12.5ZM8.33366 12.5H15.0003V14.1667H8.33366V12.5Z" fill="#018191"/>

      </svg>`,
  },

  {
    title: "My Agents",

    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">

        <path d="M16.625 12.25V6.5625L12.25 3.5L7.875 6.5625V7.875H6.125V5.6875L12.25 1.3125L18.375 5.6875V12.25H16.625ZM12.6875 7H13.5625V6.125H12.6875V7ZM10.9375 7H11.8125V6.125H10.9375V7ZM12.6875 8.75H13.5625V7.875H12.6875V8.75ZM10.9375 8.75H11.8125V7.875H10.9375V8.75ZM12.25 19.6875L6.125 17.9812V19.25H0.875V9.625H7.83125L13.2562 11.6375C13.7375 11.8125 14.1275 12.1188 14.4261 12.5563C14.7248 12.9938 14.8744 13.475 14.875 14H16.625C17.3542 14 17.974 14.2406 18.4844 14.7219C18.9948 15.2031 19.25 15.8375 19.25 16.625V17.5L12.25 19.6875ZM2.625 17.5H4.375V11.375H2.625V17.5ZM12.2063 17.85L17.4125 16.2312C17.3687 16.0708 17.2705 15.9504 17.1176 15.8699C16.9648 15.7894 16.8006 15.7494 16.625 15.75H12.425C11.9729 15.75 11.5646 15.7208 11.2 15.6625C10.8354 15.6042 10.4417 15.5021 10.0188 15.3562L8.50938 14.8313L9.0125 13.1687L10.7625 13.7375C11.025 13.825 11.3313 13.8906 11.6813 13.9344C12.0312 13.9781 12.5125 14 13.125 14C13.125 13.8396 13.0778 13.6865 12.9833 13.5406C12.8888 13.3948 12.7756 13.3 12.6438 13.2562L7.525 11.375H6.125V16.1875L12.2063 17.85Z" fill="#018191"/>

      </svg>`,
  },

  {
    title: "Post Property",

    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M17 19.22H5V7H12V5H5C3.9 5 3 5.9 3 7V19C3 20.1 3.9 21 5 21H17C18.1 21 19 20.1 19 19V12H17V19.22Z" fill="#018191"/>
    <path d="M19 2H17V5H14C14.01 5.01 14 7 14 7H17V9.99C17.01 10 19 9.99 19 9.99V7H22V5H19V2ZM7 9H15V11H7V9ZM7 12V14H15V12H12H7ZM7 15H15V17H7V15Z" fill="#018191"/>
    </svg>`,
  },

  {
    title: "Rent Agreement",

    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">

        <path d="M15.833 1.66669H4.16634C3.7061 1.66669 3.33301 2.03978 3.33301 2.50002V17.5C3.33301 17.9603 3.7061 18.3334 4.16634 18.3334H15.833C16.2932 18.3334 16.6663 17.9603 16.6663 17.5V2.50002C16.6663 2.03978 16.2932 1.66669 15.833 1.66669Z" stroke="#018191" stroke-linecap="round" stroke-linejoin="round"/>

        <path d="M6.66602 1.66669H10.416V8.33335L8.54102 6.66669L6.66602 8.33335V1.66669Z" stroke="#018191" stroke-linecap="round" stroke-linejoin="round"/>

        <path d="M6.66602 11.6667H10.8327M6.66602 14.1667H13.3327" stroke="#018191" stroke-linecap="round"/>

      </svg>`,
  },

  {
    title: "Rent Payment",

    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">

        <path d="M17.5 3.5H3.5C2.52875 3.5 1.75875 4.27875 1.75875 5.25L1.75 15.75C1.75 16.7212 2.52875 17.5 3.5 17.5H17.5C18.4713 17.5 19.25 16.7212 19.25 15.75V5.25C19.25 4.27875 18.4713 3.5 17.5 3.5ZM17.5 15.75H3.5V10.5H17.5V15.75ZM17.5 7H3.5V5.25H17.5V7Z" fill="#018191"/>

      </svg>`,
  },

  {
    title: "Log Out",

    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">

        <path d="M14.875 7L13.6413 8.23375L15.0238 9.625H7.875V11.375H15.0238L13.6413 12.7575L14.875 14L18.375 10.5L14.875 7ZM4.375 4.375H10.5V2.625H4.375C3.4125 2.625 2.625 3.4125 2.625 4.375V16.625C2.625 17.5875 3.4125 18.375 4.375 18.375H10.5V16.625H4.375V4.375Z" fill="#018191"/>

      </svg>`,
  },
];

export default Sidebar;
