import React, { useState, useEffect } from "react";
import Advertising from "../../components/Advertising/Advertising";

import { Routes, Route } from "react-router-dom";
import FeaturedItems from "../../components/FeaturedItems/FeaturedItems";

function HomepageWrapper() {
  return (
    <>
      <Advertising />
      <FeaturedItems />
    </>
  );
}

export default HomepageWrapper;
