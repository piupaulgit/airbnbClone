"use client";

import useLoginModal from "@/app/hooks/useLoginModal";
import React from "react";
import Modal from "./Modal";

const LoginModal = () => {
  const loginModal = useLoginModal();

  const bodyContent = <div className="flex flex-col gap-4">body login</div>;
  const footerContent = (
    <div className="flex flex-col gap-4">footer content</div>
  );
  return (
    <Modal
      disabled={false}
      isOpen={loginModal.isOpen}
      title="Login"
      actionLabel="Continue"
      onClose={loginModal.onClose}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default LoginModal;
