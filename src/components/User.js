import React from "react";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = { UserInfo: { name: "dummy", location: "default" } };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/SilambarasanBabu");
    const json = await data.json();
    this.setState({
      UserInfo: json,
    });
  }

  render() {
    const { name, location, avatar_url } = this.state.UserInfo;

    return (
      <div className="class-user flex justify-center mt-10 border border-black bg-green-50">
        <div>
          <img className="w-24 rounded-full p-4 m-4 mt-8" src={avatar_url} />
        </div>
        <div className=" p-4 m-4">
          <h1>Name: {name}</h1>
          <h3>Location: {location}</h3>
          <h3>
            This Project is build by myself <br /> using react and RTK
          </h3>
        </div>
      </div>
    );
  }
}

export default User;
