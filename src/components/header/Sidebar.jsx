import React from "react";
import { Drawer, Sidebar } from "flowbite-react";
import { AiFillProduct } from "react-icons/ai";
import { FaHome } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import { PiPlugsConnectedFill } from "react-icons/pi";
import { Link } from "react-router-dom";

export default function Component({ isOpen, setIsOpen }) {
  const handleClose = () => setIsOpen(false);
  const items = [
    { name: "Home", link: "/", icon: FaHome },
    { name: "About", link: "/about", icon: MdGroups },
    { name: "Products", link: "/products", icon: AiFillProduct },
    { name: "Contact Us", link: "/contact-us", icon: PiPlugsConnectedFill },
  ];

  return (
    <>
      <Drawer
        open={isOpen}
        onClose={handleClose}
        style={{ transition: "transform .7s ease-in-out" }}
        // className="sm:w-1/3"
      >
        <Drawer.Header title="" titleIcon={(_) => React.Fragment} />
        <Drawer.Items>
          <Sidebar
            aria-label="Sidebar with multi-level dropdown example"
            className="[&>div]:bg-transparent [&>div]:p-0"
          >
            <div className="flex h-full flex-col justify-between py-2">
              <div>
                <Sidebar.Items>
                  <Sidebar.ItemGroup>
                    {items.map((item) => (
                      <Sidebar.Item
                        key={"sidebar-" + item.link}
                        as={Link}
                        to={item.link}
                        // icon={item.icon}
                        onClick={(_) => setIsOpen(false)}
                        className="text-[1.5em] font-body"
                      >
                        {item.name}
                      </Sidebar.Item>
                    ))}
                  </Sidebar.ItemGroup>
                </Sidebar.Items>
              </div>
            </div>
          </Sidebar>
        </Drawer.Items>
      </Drawer>
    </>
  );
}

// export default Sidebar;
