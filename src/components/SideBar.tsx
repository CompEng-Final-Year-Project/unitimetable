import { Button } from "@/components/ui/button";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { SideBarProps } from "@/types";

import {
  BellIcon,
  CalendarDaysIcon,
  CalendarIcon,
  HomeIcon,
  PackageIcon,
  Users2Icon,
} from "lucide-react";
import { Link } from "react-router-dom";
import { ModeToggle } from "./mode-toggle";

const SideBar = ({ showSideBar, toggle }: SideBarProps) => {
  return (
    <>
      <div
        className={`${
          showSideBar ? "block" : "hidden"
        } min-w-[16rem] w-[16rem] min-h-screen border-r bg-gray-100/40 dark:bg-gray-800/40 lg:block`}
      >
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-[60px] justify-between items-center border-b px-6">
            <div className="flex items-center gap-2 font-semibold">
              <CalendarIcon
                onClick={toggle}
                className="h-6 w-6 cursor-pointer"
              />
              <span>UniSmart</span>
            </div>
            <div className="">
              <ModeToggle />
              <Button className="rounded-full" size="icon" variant="ghost">
                <BellIcon className="h-4 w-4" />
                <span className="sr-only">Toggle notifications</span>
              </Button>
            </div>
          </div>
          <div className="flex-1 overflow-auto py-2">
            <nav className="grid items-start px-4 text-sm font-medium">
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                to="/"
              >
                <HomeIcon className="h-4 w-4" />
                Dashboard
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900 transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                to="/timetable"
              >
                <CalendarDaysIcon className="h-4 w-4" />
                Timetable
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                to="/view-all"
              >
                <PackageIcon className="h-4 w-4" />
                View All
              </Link>
              <a
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                <Users2Icon className="h-4 w-4" />
                Reports
              </a>
            </nav>
          </div>
          <div className="mt-auto p-4">
            <Card>
              <CardHeader className="pb-4">
                <CardTitle>Need Help?</CardTitle>
                <CardDescription>
                  Contact our support team for any issues or questions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" size="sm">
                  Support
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      {/* <Outlet /> */}
    </>
  );
};

export default SideBar;

// <div>
{
  /* <div className="absolute top-0 right-0 m-5 flex indicator justify-end w-full">
        <span className="indicator-item badge-xs badge badge-error"></span>
        <span
          onClick={() => setShowNotification(!showNotification)}
          className="text-2xl cursor-pointer"
        >
          <FaBell />
        </span>
      </div>
      {showNotification && <NotificationCard setShowNotification={setShowNotification} />}
      <div
        className={`max-sm:absolute z-50 top-0 left-0   w-[5rem] items-center transition-colors justify-center sm:bg-primary sm:bg-opacity-30 max-sm:bg-none h-screen   ${
          showSideBar &&
          `w-auto max-sm:w-full glass bg-primary bg-opacity-30 transition-all ease-in-out overflow-y-hidden`
        } `}
      >
        <div className="flex flex-col py-4 items-center  justify-start min-h-full h-full  ">
          {!showSideBar ? (
            <span onClick={toggle} className="text-5xl max-sm:text-3xl">
              <FaSchool />
            </span>
          ) : (
            <div className="flex flex-row items-center justify-between w-full px-[24px]  ">
              <div className="flex items-center  space-x-3">
                <div className="p-4 w-[3rem] h-[3rem] rounded-lg flex justify-center items-center bg-primary ">
                  <span className="text-xl text-white">
                    <FaSchool />
                  </span>
                </div>
                <p className="font-bold text-lg">UniTimetable</p>
              </div>
              <div onClick={toggle} className="ms-4 cursor-pointer">
                <FaTimes />
              </div>
            </div>
          )}
          <div
            className={`w-full flex flex-col justify-between h-full mt-20 px-[24px] ${
              !showSideBar && "hidden"
            }`}
          >
            <div className="w-full flex flex-col  gap-[20px]">
              <button className="btn btn-primary w-full font-normal  justify-start ">
                Home
              </button>
              <button className="btn btn-primary w-full font-normal  justify-start ">
                View Timetables
              </button>
              <button className="btn btn-primary w-full font-normal  justify-start ">
                Manage Courses
              </button>
              <button className="btn btn-primary w-full font-normal  justify-start ">
                User Directory
              </button>
              <button className="btn btn-primary w-full font-normal  justify-start ">
                Your Profiles
              </button>
            </div>
            <button className="btn btn-primary w-full font-normal  justify-start border-none">
              Sign out
            </button>
          </div>
          <span
            onClick={toggle}
            className={`text-xl cursor-pointer max-sm:hidden -rotate-90 ${
              showSideBar ? "hidden" : "mt-72"
            } `}
          >
            <FaArrowDownLong />
          </span>
        </div>
      </div> */
}
