import './singlePost.css'

const SinglePost = () => {
  return (
      <div className='singlePost'>
          <div className="singlePostWrapper">
              <img className='singlePostImg'
                  src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
              />
              <h1 className="singlePostTitle">
                  Lorem ipsum dolor sit amet.
                  <div className="singlePostEdit">
                      <i className='singlePostIcon far fa-edit'></i>
                      <i className='singlePostIcon far fa-trash-alt'></i>
                  </div>
              </h1>
              <div className="singlePostInfo">
                  <span className='singlePostAuthor'>Author: <b>Tyson</b></span>
                  <span className='singlePostDate'>1 hour ago</span>
              </div>
              <p className='singlePostDesc'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque vel explicabo dicta eum non quo magnam, voluptatum commodi nulla, rem vitae quia illum mollitia necessitatibus! Eveniet molestiae odit cupiditate iure?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque vel explicabo dicta eum non quo magnam, voluptatum commodi nulla, rem vitae quia illum mollitia necessitatibus! Eveniet molestiae odit cupiditate iure?
              </p>
          </div>
      </div>
  )
}

export default SinglePost