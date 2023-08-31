import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import HomePage from "./components/HomePage";
import { Profile } from "./components/Profile";
import Address from "./components/Address";
import Company from "./components/Company";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound404";
// Import the navbar from the Navbar file
import Navbar from "./components/Navbar";
import { Product } from "./components/Product";
import Post from "./components/Post";

function App() {
  const paragraphs = [
     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquam pulvinar maximus. Integer eget orci ut ex faucibus scelerisque quis vel eros. Suspendisse tristique mi aliquet dui semper, quis fermentum sapien scelerisque. Morbi vitae laoreet quam. Suspendisse at sodales arcu. Pellentesque eleifend eleifend convallis. Morbi vitae nulla vel augue interdum viverra ac nec nulla. Praesent ultrices justo vitae tempus congue. Nullam ut suscipit erat. ",
      "Mauris non tortor vitae orci rhoncus volutpat. Integer congue eu nibh eget vulputate. Sed at auctor odio. Maecenas vulputate diam sit amet commodo posuere. Sed eget quam ut libero gravida imperdiet. Nulla varius id ante a efficitur. Donec libero metus, fermentum a dignissim suscipit, varius et tortor. Suspendisse tempor est ac arcu blandit maximus. Nunc nulla odio, rhoncus at ligula et, eleifend aliquet ipsum. Donec et laoreet urna. Curabitur felis magna, sodales quis lectus in, hendrerit lacinia metus. Donec leo tortor, molestie placerat porttitor non, egestas id diam. ",
      "Phasellus luctus mollis nunc, vel lobortis odio finibus sit amet. Nunc ut lacinia tortor. Donec nec ullamcorper nunc, et laoreet sapien. Fusce malesuada nulla quis ex rhoncus, eget vehicula libero aliquam. Ut luctus nunc elit, vel venenatis nulla eleifend vitae. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ac sollicitudin eros. Integer eu sapien at enim rhoncus mattis. Aenean tincidunt placerat tempor. ",
      "Integer dictum sem nec molestie pulvinar. Cras scelerisque metus vel quam dapibus, nec ornare eros feugiat. Suspendisse potenti. Aliquam eros erat, tempor et mi ut, consequat iaculis quam. Proin bibendum nec magna sit amet pretium. Donec lobortis, elit vel dignissim egestas, metus mi imperdiet ligula, vel tincidunt ex purus malesuada est. Aliquam nec lorem vitae purus posuere vulputate. Ut dictum, lacus eu rutrum interdum, nisi orci elementum justo, ac lacinia ligula arcu ac odio. Nunc id neque rhoncus, ornare dui eu, auctor velit. Aenean iaculis a libero at tincidunt. ",
      "Phasellus ut nibh tempus, faucibus dolor id, mollis neque. Sed in tempor tellus. Suspendisse aliquam nisl purus, sit amet rutrum orci finibus non. Duis ipsum ligula, pellentesque in varius eu, tincidunt a odio. Nullam id tortor pulvinar, viverra lorem ut, euismod diam. Donec eu risus blandit, scelerisque purus eu, mattis leo. Sed volutpat diam augue, vel porta elit porta et. "
              
  ]
  return (
    <Router>
      {/* Add the Navbar component below here */}
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<Product />} />
        <Route
          path="/profile/post"
          element={
            <Post
              title="Trip to Bangkok"
              desc="About my trip to Bangkok"
              content={[...paragraphs]}
              creator="@_jaylia.travels_"
              likes="0"
              imageSrc="https://www.nawpic.com/media/2020/butterfly-aesthetic-nawpic-1.png"
              imageAlt="Butterflies"
            />
          }
        />

        <Route
          path="/profile"
          element={
            <Profile
              name="Jaylia"
              username="@_jaylia.travels_"
              email="jayliaxtravels@gmail.com"
              phone="97639770"
              imageURL="https://www.nawpic.com/media/2020/butterfly-aesthetic-nawpic-1.png"
              imageAlt="Butterflies"
            />
          }
        />
        <Route
          path="/company"
          element={
            <Company
              companyName="Travels Assistant"
              catchPhrase="felis augue quis"
              motto="eget rhoncus facilisis"
              companyNumber="38759928"
            />
          }
        />
        <Route
          path="/address"
          element={
            <Address
              street="Flower Main St."
              suite="Apt. 103"
              city="Tokyo"
              zipcode="37284-2749"
            />
          }
        />
        <Route
          path="/cart"
          element={<Cart items="Cart is Empty" total="0" />}
        />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
