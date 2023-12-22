"use client";

const UserIcon = ({ user }) => {
  return (
    <>
      <span
        className={` bg-purple-400 text-white p-0.5 px-1.5 text-xs rounded-full relative border-2 border-gray-200`}
      >
        {user.name[0]}
        <span
          className={`absolute -right-1 -bottom-1  p-1 rounded-full border border-gray-500 ${
            user.available ? " bg-green-500" : " bg-yellow-500"
          }`}
        ></span>
      </span>
    </>
  );
};

export default UserIcon;
