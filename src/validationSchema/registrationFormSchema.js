import * as Yup from "yup";

const registrationFormSchema = Yup.object().shape({
  userType: Yup.string().required("Оберіть тип користувача"),
  edrpouIpn: Yup.string().required("Це поле обов'язкове"),
  organization: Yup.string().required("Оберіть форму організації"),
  name: Yup.string().required("Це поле обов'язкове"),
  region: Yup.string().required("Оберіть регіон"),
  settlement: Yup.string().required("Це поле обов'язкове"),
  addres: Yup.string().required("Це поле обов'язкове"),
  index: Yup.number().required("Це поле обов'язкове"),
  format: Yup.string().required("Оберіть формат"),
  mfo: Yup.number().required("Це поле обов'язкове"),
  edrpou: Yup.number().required("Це поле обов'язкове"),
  account: Yup.number().required("Це поле обов'язкове"),
  fullName: Yup.string().required("Це поле обов'язкове"),
  phoneNumber: Yup.string()
    .matches(/^[+\-()0-9\s]+$/, "Невірний формат номеру телефону")
    .min(10, "Номер повинен містити мінімум 10 цифр")
    .required("Це поле обов'язкове"),
  email: Yup.string()
    .email("Введіть дійсний email")
    .matches(
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/,
      "Невірний формат елекотронної пошти"
    )
    .required("Це поле обов'язкове"),
  password: Yup.string().required("Це поле обов'язкове"),
  documents: Yup.array().of(Yup.string().required("Оберіть документ")),
  consentPublicOffer: Yup.boolean().oneOf([true], "Підтвердіть згоду"),
  consentRegulations: Yup.boolean().oneOf([true], "Підтвердіть згоду"),
});

export default registrationFormSchema;
