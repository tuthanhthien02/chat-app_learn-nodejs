import React from "react";

const Message = () => {
  return (
    <div className={`chat chat-end`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          {/* <img alt="Tailwind CSS chat bubble component" src={profilePic} /> */}
          <img
            alt="Tailwind CSS chat bubble component"
            src="https://cdn0.iconfinder.com/data/icons/cryptocurrency-137/128/1_profile_user_avatar_account_person-132-64.png"
          />
        </div>
      </div>
      <div className={`chat-bubble text-white bg-blue-500 shake pb-2`}>
        {/* className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass} pb-2`}> */}
        {/* {message.message} */}
        message dummy
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        {/* {formattedTime} */}
        12:00 PM
      </div>
    </div>
  );
};

export default Message;
