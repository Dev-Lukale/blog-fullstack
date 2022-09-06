import "./postDetail.css"
import Sidebar from "../../components/sidebar/Sidebar"
import SinglePost from "../../components/singlePost/SinglePost"

const PostDetail = () => {
  return (
    <div className="postDetail">
      <SinglePost />
      <Sidebar />
    </div>
  )
}

export default PostDetail