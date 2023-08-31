import React from "react";
import { AiOutlineHeart } from "react-icons/ai";

export class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      desc: this.props.desc,
      content: this.props.content,
      creator: this.props.creator,
      likes: this.props.likes,
      imageSrc: this.props.imageSrc,
      imageAlt: this.props.imageAlt,
    };

    this.likePost = this.likePost.bind(this);
    this.toggleImages = this.toggleImages.bind(this);
  }

  likePost() {
    console.log("You have liked the post.");
    this.likes = this.likes.parseInt();
    this.likes += 1;

    this.setState({
      likes: this.likes,
    });
  }

  toggleImages = () => {
    const imageUrls = [
      {
        "https://wallpapercave.com/wp/wp7319721.jpg": " Just a description",
      },
      {
        "https://i.pinimg.com/originals/41/c1/f2/41c1f232113aab21579131e2cbd1e753.jpg":
          " Just a description",
      },
      {
        "https://wallpapers.com/images/hd/seashell-light-purple-aesthetic-bsjiol323oqr70pg.jpg":
          " Just a description",
      },
      {
        "https://ih1.redbubble.net/image.1327257146.4842/st,small,845x845-pad,1000x1000,f8f8f8.jpg":
          " Just a description",
      },
    ];

    /**
     * > This returns a number between 0 and imageUrls.length
     * > Use this number to access the url at position x in imageUrls if
     * x is the rendom number returned
     */
    var number = Math.floor(Math.random() * imageUrls.length);

    this.setState({
      imageSrc: imageUrls[number].imageSrc,
      imageAlt: imageUrls[number].imageAlt,
    });
  };

  render() {
    return (
      <div className="card m-3" style={{ width: "fit-content" }}>
        <div className="card w-100">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">{this.state.title}</h2>
              <h5 className="card-title">{this.state.desc}!</h5>
            </div>
            <p className="card-content p-2">{this.state.content[0]}</p>

            {/* Image Article With Test START */}
            <div className="col-md-6 col-lg-12 d-flex">
              {/* Article Image TAG */}
              <img
                src={this.state.imageSrc}
                className=""
                alt={this.state.imageAlt}
              />
              {/* Article Image Description P-TAG */}
              <div className="d-block p-2">
                <p className="card-content ps-2">{this.state.content[1]}</p>
                <p className="card-content ps-2">{this.state.content[2]}</p>
              </div>
            </div>
            {/* Image Article With Test END */}

            <p className="card-content p-2">{this.state.content[3]}</p>
            <p className="card-creator">Posted By: {this.state.creator}</p>
            <p className="card-likes">Likes: {this.state.likes}</p>
            <div className="card-body"></div>
          </div>
          <button className="btn btn-info me-2" onClick={this.toggleImages}>
            Next Image
          </button>
          <br></br>
          <span className="card-action justify-content-center">
            <button
              className="btn btn-xs btn-circle btn-info"
              onClick={this.likePost}
            >
              <AiOutlineHeart />
            </button>
          </span>
        </div>
      </div>
    );
  }
}

export default Post;
