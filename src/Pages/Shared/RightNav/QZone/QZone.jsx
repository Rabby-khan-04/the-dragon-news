import React from "react";
import qzone1 from "../../../../assets/qZone1.png";
import qzone2 from "../../../../assets/qZone2.png";
import qzone3 from "../../../../assets/qZone3.png";

const QZone = () => {
  return (
    <>
      <h2 className="mb-5 text-primary text-xl font-bold">Q-Zone</h2>
      <div>
        <img src={qzone1} alt="" />
        <img src={qzone2} alt="" />
        <img src={qzone3} alt="" />
      </div>
    </>
  );
};

export default QZone;
