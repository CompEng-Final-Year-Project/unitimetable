import { useEffect, useRef } from "react";

const NotificationCard = ({setShowNotification}: {setShowNotification: React.Dispatch<React.SetStateAction<boolean>>}) => {
  const navigationCardRef = useRef<HTMLDivElement>(null)
  useEffect(()=>{
    const handler = (e: MouseEvent) => {
      if(navigationCardRef.current && !navigationCardRef.current.contains(e.target as Node) ){
        setShowNotification(false)
      }

    }
    document.addEventListener('mousedown', handler)

    return()=>{
      document.removeEventListener('mousedown', handler)
    }
  })
  return (
    <div ref={navigationCardRef} className="card fixed z-50 glass shadow-md border right-5 top-14 w-96 max-sm:w-[15rem]">
      <div className="card-body px-4 py-6  ">
        <div className="card-title sm:text-3xl">Notifications</div>
        <div className="mt-1">
          <div className="flex items-start space-x-2">
            <div className="w-auto">
              <div className="w-2 h-2 mt-2 rounded-full bg-error" />
            </div>
            <div className="capitalize">
              <p className="font-semibold text-md max-sm:text-sm">Welcome to Unitimetable</p>
              <p className="text-sm max-sm:text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente, debitis!
              </p>
            </div>
          </div>
          <div className="divider m-0"></div> 
          <div className="flex items-start space-x-2">
            <div className="w-auto">
              <div className="w-2 h-2 mt-2 rounded-full bg-error" />
            </div>
            <div className="capitalize">
              <p className="font-semibold text-md max-sm:text-sm">Welcome to Unitimetable</p>
              <p className="text-sm max-sm:text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente, debitis!
              </p>
            </div>
          </div>
          <div className="divider m-0"></div> 
        </div>
      </div>
    </div>
  );
};

export default NotificationCard;
