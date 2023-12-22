"user client";

const UserIcon = ({ user }) => {
  return (
    <>
      <span
        className={` bg-green-400 text-white p-0.5 px-1.5 text-xs rounded-full`}
      >
        {user.name[0]}
      </span>
    </>
  );
};

export default UserIcon;
