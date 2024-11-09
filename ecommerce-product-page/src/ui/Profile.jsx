import CartIcon from "./CartIcon";

function Profile() {
  return (
    <div className="flex items-center justify-center gap-4 lg:gap-7">
      <CartIcon />

      <div className="h-8 w-8 cursor-pointer rounded-full hover:border-2 hover:border-orange-main lg:h-10 lg:w-10">
        <img
          src="../images/image-avatar.png"
          alt="a profile picture avatar"
          className="w-full"
        />
      </div>
    </div>
  );
}

export default Profile;
