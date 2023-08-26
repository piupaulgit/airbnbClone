"use client";

import useRegisterModal from "@/app/hooks/useRegisterModal";
import React from "react";
import Modal from "./Modal";

const RegisterModal = () => {
  const registerModal = useRegisterModal();

  const bodyContent = <div className="flex flex-col gap-4">body content</div>;
  const footerContent = (
    <div className="flex flex-col gap-4">footer content</div>
  );
  return (
    <Modal
      disabled={false}
      isOpen={registerModal.isOpen}
      title="Register"
      actionLabel="Continue"
      onClose={registerModal.onClose}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default RegisterModal;
