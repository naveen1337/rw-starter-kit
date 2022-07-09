import { useEffect, useRef, useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useHomeLocalState, HomeContext } from "./home-ctrl";
import HomePageUI from "./home-page";

export default function HomePageHOC() {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const ctx = {};
  return (
    <HomeContext.Provider value={ctx}>
      <HomePageUI pageLoading={false} pageError={false} pageSpinner={false} />
    </HomeContext.Provider>
  );
}
