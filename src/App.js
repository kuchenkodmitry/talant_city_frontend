import './App.css'
import Header from './components/header/header';
import Tabs from './components/tabs';
import Trainers from './components/trainers/index'
import About from './components/about/index'
import Footer from './components/footer/index'
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { fetchBooks } from './redux/slices/books';
import { fetchcCurses } from './redux/slices/courses';
import { fetchSuperMemory } from './redux/slices/superMemory';
import { fetchSchedule } from './redux/slices/schedule'
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import Modal from './components/modal/index'
import Post from './components/post/index'
import { fetchvideos } from './redux/slices/videos';
import { fetchReviews } from './redux/slices/reviews';
import { fetchTrainers } from './redux/slices/trainers';
import ToHeaderButton from './components/toHeaderButton/index'
import {Routes, Route, useLocation } from "react-router-dom";
import SliderReview from './components/reviews/slider/SliderComponent'
import Apaptetion from './components/adaptation/index'


function App() {
  
  const dispatch = useDispatch()
 const location = useLocation()
  React.useEffect(() => {
    dispatch(fetchBooks());
    dispatch(fetchcCurses());
    dispatch(fetchSuperMemory());
    dispatch(fetchSchedule());
    dispatch(fetchvideos());
    dispatch(fetchReviews());
    dispatch(fetchTrainers());
    console.log(location.pathname);
    if(location.pathname == '/admin'){
      window.location.href="http://94.228.118.86:1000/admin"
    }
  }, [])

  return (
    <>
    <ToHeaderButton/>
      <Modal />
      <Post />
      {/* <Apaptetion/> */}
      <Header />
      <Tabs />
      <Trainers />
      {/* <Reviews /> */}
      <SliderReview/>
      <About />
      <Footer />
    </>
  );
}

export default App;
