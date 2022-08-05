import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
//@ts-ignore
import { useSnackbar } from "react-simple-snackbar";
import {} from "../../remote/app-remote";

export function isMounted() {
  const ref = useRef(true);
  useEffect(() => {
    return () => {
      ref.current = false;
    };
  }, []);
  return ref.current;
}

export function useScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
}



export function useAppSnackBar() {
  const [showErrorBar, closeErrorBar] = useSnackbar({
    position: "bottom-right",
    style: {
      backgroundColor: "#ef233c",
      borderRadius: 2,
    },
  });
  const [showInfoBar, closeInfoBar] = useSnackbar({
    position: "bottom-right",
    style: {
      backgroundColor: "#0984e3",
      borderRadius: 2,
    },
  });

  return {
    showErrorBar,
    closeErrorBar,
    showInfoBar,
    closeInfoBar,
  };
}

export function useModal() {
  const [modalState, setModalState] = useState<any>({
    visible: false,
    title: "",
    content: "",
  });
  function updateModal(e?: any) {
    if (!e) {
      setModalState({
        visible: false,
        title: "",
        content: "",
      });
    }
    setModalState({ visible: true, title: e.title, content: e.content });
  }
  return { updateModal, modalState };
}

export function useConfirmModal() {
  const [CFMState, setCFMtate] = useState<any>(null);
  function updateCFMState(payload: any) {
    if (!payload) {
      setCFMtate(null);
      return;
    }
    setCFMtate({
      title: payload.title,
      content: payload.content,
      action: payload.action,
    });
  }

  return {
    CFMState,
    updateCFMState,
  };
}
