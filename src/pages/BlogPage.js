import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ".././index.css";
import Login from "../components/Login";
class BlogPage extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <h1 id="Blog-Head">Welcome Guest, Login or Signup</h1>
        <Login />

        <Footer />
      </>
    );
  }
}
export default BlogPage;
