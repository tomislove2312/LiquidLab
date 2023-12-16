import React, { useRef } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import owl from "../../images/owl.svg";
const Contact = () => {
  const form = useRef();
  const { t } = useTranslation();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_qnxe5u7",
      "template_9i2j197",
      form.current,
      "uCmOJeKBH0qDe3jEZ"
    );
    e.target.reset();
  };

  return (
    <div className="contact__content" id="contact">
      <div className="owl_img">
        <img src={owl} alt="owl bringing letter" />
      </div>
      <h3 className="contact__title">{t("project_h")}</h3>

      <form ref={form} onSubmit={sendEmail} className="contact__form">
        <div className="contact__form-div">
          <label className="contact__form-tag">{t("name")}</label>
          <input
            type="text"
            name="name"
            className="contact__form-input"
            placeholder={t("name_insert")}
          />
        </div>
        <div className="contact__form-div">
          <label className="contact__form-tag">{t("mail")}</label>
          <input
            type="email"
            name="email"
            className="contact__form-input"
            placeholder={t("mail_insert")}
          />
        </div>
        <div className="contact__form-div contact__form-area">
          <label className="contact__form-tag">{t("project")}</label>
          <textarea
            name="project"
            cols="30"
            rows="10"
            className="contact__form-input"
            placeholder={t("project_write")}
          ></textarea>
        </div>
        <button className="button_send">
          {t("send")}
          {"    "}
          <FontAwesomeIcon icon="fa-duotone fa-paper-plane" />
        </button>
      </form>
    </div>
  );
};

export default Contact;
