import { socket } from "../../webSockets/socket";
import { useState, useEffect } from "react";

const MagneticSwitch = ({switchStatus}) => {
  // const [switchStatus, setSwitchStatus] = useState(null);

  // useEffect(() => {
  //   const onSwitch = (data) => {
  //     console.log(data);
  //     setSwitchStatus(data);
  //   };

  //   socket.on("synthetic-farm-1/magnetic_switch", onSwitch);

  //   return () => {
  //     socket.off("synthetic-farm-1/magnetic_switch", onSwitch);
  //   };
  // }, []);

  return (
    <>
      {switchStatus !== null ? (
        <div>
          <p>
            Switch Status: (Last update: {switchStatus.readableDate})
          </p>
          <p>{switchStatus === 0 ? "Closed" : "Opened"}</p>
        </div>
      ) : (
        <p>Switch Status: no data received yet</p>
      )}
    </>
  );
};

export default MagneticSwitch;