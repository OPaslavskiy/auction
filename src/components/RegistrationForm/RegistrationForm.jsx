"use client";
import Link from "next/link";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import registrationFormSchema from "@/validationSchema/registrationFormSchema";
import { CustomField } from "./RegistrationForm.styled";

const RegistrationForm = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <div>
      <h2>Реєстрація</h2>
      <Formik
        initialValues={{
          userType: "",
          edrpouIpn: "",
          rememberMe: false,
          organization: "",
          name: "",
          region: "",
          settlement: "",
          addres: "",
          index: "",
          format: "",
          mfo: "",
          edrpou: "",
          account: "",
          fullName: "",
          phoneNumber: "",
          email: "",
          password: "",
          documents: [""],
          consentPublicOffer: false,
          consentRegulations: false,
        }}
        validationSchema={registrationFormSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <div>
              <label>Тип користувача</label>
              <div role="group" aria-labelledby="radio-group">
                <label>
                  <Field type="radio" name="userType" value="customer" />
                  Замовник
                </label>
                <label>
                  <Field type="radio" name="userType" value="bidder" />
                  Учасник торгів
                </label>
              </div>

              <label htmlFor="edrpouIpn">ЄДРПОУ / ІПН:</label>
              <Field type="text" id="edrpouIpn" name="edrpouIpn" />

              <label>
                <Field type="checkbox" name="rememberMe" /> Приєднатися до
                зареєстрованної організації
              </label>
            </div>
            <div>
              <p>Дані організації</p>
              <label>Форма організації</label>
              <div role="group" aria-labelledby="radio-group">
                <label>
                  <Field type="radio" name="organization" value="government" />
                  Державна установа
                </label>
                <label>
                  <Field type="radio" name="organization" value="legalEntity" />
                  Юридична особа
                </label>
                <label>
                  <Field
                    type="radio"
                    name="organization"
                    value="entrepreneur"
                  />
                  ФОП
                </label>
                <label>
                  <Field type="radio" name="organization" value="individual" />
                  Фізична особа
                </label>
              </div>
              <label htmlFor="name">
                Назва організації \ ПІБ фізичної особи
              </label>
              <Field
                type="text"
                id="name"
                name="name"
                placeholder='Наприклад, "ФОП Василенко Петро Васильович" або "ТБ Перша Технологічна Біржа"'
              />
              <label htmlFor="region">Регіон</label>
              <select id="region" name="region">
                <option value=""></option>
                <option value="lvivDistrict">Львівська область</option>
              </select>

              <label htmlFor="settlement">Населений пункт</label>
              <Field type="text" id="settlement" name="settlement" />

              <label htmlFor="addres">
                Поштова адреса (вулиця, номер будинку, номер корпусу та ін.)
              </label>
              <Field type="text" id="addres" name="addres" />

              <label htmlFor="index">Індекс</label>
              <Field type="number" id="index" name="index" />
            </div>
            <div>
              <p>Реквізити банківського рахунку</p>
              <div role="group" aria-labelledby="radio-group">
                <label>
                  <Field type="radio" name="format" value="new" />У новому
                  форматі (IBAN)
                </label>
                <label>
                  <Field type="radio" name="format" value="old" />У старому
                  форматі
                </label>
              </div>
              <label htmlFor="mfo">МФО банку</label>
              <Field type="number" id="mfo" name="mfo" />
              <label htmlFor="edrpou">ЄДРПОУ</label>
              <Field type="number" id="edrpou" name="edrpou" />
              <label htmlFor="account">Банківський рахунок</label>
              <Field type="number" id="account" name="account" />
            </div>
            <div>
              <p>Контактна особа</p>
              <label htmlFor="fullName">ПІБ</label>
              <Field type="text" id="fullName" name="fullName" />
              <label htmlFor="phoneNumber">Номер телефону</label>
              <Field type="tel" id="phoneNumber" name="phoneNumber" />
              <label htmlFor="email">E-mail</label>
              <Field type="email" id="email" name="email" />
              <label htmlFor="password">Пароль</label>
              <Field type="password" id="password" name="password" />
            </div>
            <div>
              <p>
                Для підтвердження акаунту необхідно додати наступні документи:
              </p>
              <ul>
                <li>
                  копія установчих документів (копія виписки або витягу з ЄДР
                  юр. осіб / копія наказу про призначення керівника);
                </li>
                <li> банківські реквізити (у форматі IBAN);</li>
              </ul>
            </div>

            <FieldArray name="documents">
              <div>
                <div>
                  <Field
                    type="file"
                    name="document"
                    accept=".pdf,.doc,.docx,.jpg,.jpeg"
                  />
                  <button type="button" onClick={() => {}}>
                    Видалити
                  </button>
                </div>

                <button type="button" onClick={() => {}}>
                  + Додати документ
                </button>
              </div>
            </FieldArray>

            <label>
              <Field type="checkbox" name="consentPublicOffer" /> Я підтверджую
              свою згоду з умовами{" "}
              <Link href="/registration">Публічної оферти</Link>
            </label>

            <label>
              <Field type="checkbox" name="consentRegulations" /> Я підтверджую
              свою згоду з умовами{" "}
              <Link href="/registration">
                Регламенту роботи системи електронних торгів
              </Link>
            </label>

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegistrationForm;
