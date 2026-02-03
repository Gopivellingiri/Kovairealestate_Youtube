import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../features/Home/HomePage";
import AboutUsPage from "../features/About/AboutUsPage";
import ContactPage from "../features/Contact/ContactPage";
import AgentPage from "../features/Agents/AgentPage";
import ListingPage from "../features/Listing/ListingPage";
import LoginPage from "../features/auth/LoginPage";
import SignupPage from "../features/auth/SignupPage";
import VerifyOTP from "../features/auth/VerifyOTP";

const PublicRoutes = (
  <Routes>
    <Route path="/" element={<Navigate to="/listing" replace />} />
    <Route path="/home" element={<HomePage />} />
    <Route path="/about" element={<AboutUsPage />} />
    <Route path="/contact" element={<ContactPage />} />
    <Route path="/agent" element={<AgentPage />} />
    <Route path="/listing" element={<ListingPage />} />
    //auth page
    <Route path="/login" element={<LoginPage />} />
    <Route path="/register" element={<SignupPage />} />
    <Route path="/verify-otp" element={<VerifyOTP />} />
  </Routes>
);

export default PublicRoutes;
