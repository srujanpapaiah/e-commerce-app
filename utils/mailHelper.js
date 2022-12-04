import transporter from "../config/transporter.config";
import config from "../config/index";

const mailHelper = async (options) => {
  const message = {
    from: config.SMTP_MAIL_EMAIL,
    to: options.email,
    subject: options.subject,
    text: options.text,
    // html: "<b></b>"
  };

  await transporter.sendMail(message);
};

export default mailHelper;
