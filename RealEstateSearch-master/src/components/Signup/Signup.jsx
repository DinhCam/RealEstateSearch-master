import { fb } from "../../services";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { FormField } from "../FormField";
import { defaultValues, validationSchema } from "./formikConfig";

export const Signup = () => {
  const history = useHistory();
  const [serverError, setServerError] = useState("");

  const signup = ({ email, userName, password }, { setSubmitting }) => {
    fb.auth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        if (res?.user?.uid) {
          // fetch("/api/createUser", {
          //   method: "POST",
          //   body: JSON.stringify({
          //     userName,
          //     userId: res.user.uid,
          //   }),
          //   headers: {
          //     "Content-Type": "application/json",
          //   },
          // })
          //   .then(() => {
          // res.user.updateProfile({
          //   displayName: userName,
          // });
          fb.auth.currentUser.updateProfile({
            displayName: userName,
          });
          fb.firestore
            .collection("users")
            .doc(res.user.uid)
            .set({ userName, avatar: "" });
          // fb.firestore
          //   .collection("users")
          //   .doc(res.user.uid)
          //   .collection("conversations")
          //   .doc("chatdummy")
          //   .collection("messages")
          //   .doc("messagedummy")
          //   .set({
          //     message: "dummy",
          //   });
          // })
        } else {
          setServerError(
            "We're having trouble signing you up. Please try again."
          );
        }
      })
      .catch((err) => {
        if (err.code === "auth/email-already-in-use") {
          setServerError("An account with this email already exists");
        } else {
          setServerError(
            "We're having trouble signing you up. Please try again."
          );
        }
      })
      .finally(() => setSubmitting(false));
  };

  return (
    <div className="auth-form-container">
      <div className="auth-form">
        <h1 className="title">????ng K??</h1>
        <Formik
          onSubmit={signup}
          validateOnMount={true}
          initialValues={defaultValues}
          validationSchema={validationSchema}
        >
          {({ isValid, isSubmitting }) => (
            <Form>
              <h2 className="label">T??n t??i kho???n</h2>
              <FormField name="userName" placeholder="Nh???p t??n t??i kho???n..." />
              <h2 className="label" >Email</h2>
              <FormField name="email" type="email" placeholder="Nh???p email..." />
              <h2 className="label">M???t kh???u</h2>
              <FormField name="password" type="password" placeholder="Nh???p m???t kh???u..." />
              <h2 className="label">X??c nh???n m???t kh???u</h2>
              <FormField
                type="password"
                name="verifyPassword"
                placeholder="Nh???p l???i m???t kh???u..."
              />

              <div className="auth-link-container">
                B???n ???? c?? t??i kho???n?{" "}
                <span
                  className="auth-link"
                  onClick={() => history.push("login")}
                >
                  ????ng nh???p ngay!
                </span>
              </div>

              <button disabled={isSubmitting || !isValid} type="submit">
                ????ng K??
              </button>
            </Form>
          )}
        </Formik>

        {!!serverError && <div className="error">{serverError}</div>}
      </div>
    </div>
  );
};
