"user client";

const UserIcon = ({ user }) => {
  return (
    <>
      <div className={` bg-green-400 text-white p-1.5 px-3 rounded-full`}>
        {user.name[0]}
      </div>
    </>
  );
};

export default UserIcon;