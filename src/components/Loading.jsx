import React from "react";
import { Oval } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="w-full h-full flex justify-center">
      <Oval
        visible={true}
        height="80"
        width="80"
        color="#7aeffff3"
        secondaryColor="#8BD3DD"
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loading;
