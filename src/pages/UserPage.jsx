import UserHeader from "../components/UserHeader";
import UserPost from "../components/UserPost";

const UserPage = () => {
  return <>
    <UserHeader />
    <UserPost  likes={1200} replies={481} postImg="/post1.png" postTitle="Lets talk about threads." />
  </>
};

export default UserPage; 