import React from "react";
import styles from "../styles/Registration.module.css";

import FormSectionHeader from "@/components/FormSection";
import FormSectionSubHeader from "@/components/FormSection/SubHeader";

import CertificateSection from "@/components/RegistrationForm/Certificate";
import ProductDevelopmentSection from "@/components/RegistrationForm/ProductDevelopment";

import SpecifySelect from "@/components/RegistrationForm/TrainingSection/SpecifyAnswer";

import { Row, Col, Form, Container, Button } from "react-bootstrap";
import SKUSection from "@/components/RegistrationForm/SKUInformation";
import TrainingSection from "@/components/RegistrationForm/TrainingSection/TrainingSection";

import { initialValues } from "@/components/RegistrationForm/formikConfig";
import { validationSchema } from "@/components/RegistrationForm/schema";

import { useFormik } from "formik";

import { useTranslation } from "react-i18next";

export default function Home() {
  const { t, i18n } = useTranslation();

  async function sendDataToServer(values) {
    try {
      let res = await fetch("/api/data", {
        method: "POST",
        body: JSON.stringify(values),
      });

      if (res.ok) {
        alert("DATA SENT");
      }
    } catch (error) {
      alert("ERROR: ", error.message);
    }
  }

  const parentFormik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: sendDataToServer,
  });

  console.log({
    parentFormik: {
      errors: parentFormik.errors,
      values: parentFormik.values,
    },
  });

  return (
    <main className={styles["wrapper"]}>
      <Container>
        <section className={styles["wrapper_form"]}>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <div className="px-4">
              <div className="py-2">
                <label>Choose Language</label>
              </div>
              <div>
                <select
                  value={i18n.language}
                  onChange={(e) => {
                    let val = e.target.value;
                    i18n.changeLanguage(val);
                  }}
                >
                  <option value="en">ENGLISH</option>
                  <option value="hi">HINDI</option>
                </select>
              </div>
            </div>
          </div>
          <Form>
            <div>
              <FormSectionHeader name={t("section_label1")} />
            </div>
            <section className="px-3">
              <Row className="py-3 ">
                <Form.Group as={Col} md="3" className="my-3">
                  <Form.Label>{t("general_information.type")}</Form.Label>
                  <Form.Select
                    name={`general_information.["type_of_respondent"]`}
                    {...parentFormik.getFieldProps(
                      `general_information.["type_of_respondent"]`
                    )}
                  >
                    <option value="">Please Choose</option>
                    <option>INDIVIDUAL</option>
                    <option>COMMUNITY BASED ORGANIZATION</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col} md="4" className="my-3">
                  <Form.Label>{t("general_information.name")}</Form.Label>
                  <Form.Control
                    name={`general_information.["name_of_respondent"]`}
                    {...parentFormik.getFieldProps(
                      `general_information.["name_of_respondent"]`
                    )}
                  />
                </Form.Group>
                <Form.Group as={Col} md="4" className="my-3">
                  <Form.Label>{t("general_information.date")}</Form.Label>
                  <Form.Control
                    type="date"
                    name={`general_information.["date_of_registration"]`}
                    {...parentFormik.getFieldProps(
                      `general_information.["date_of_registration"]`
                    )}
                  />
                </Form.Group>
              </Row>

              <Row>
                <Form.Group as={Col} md="3" className="my-3">
                  <Form.Label>{t("general_information.shg")}</Form.Label>
                  <Form.Control
                    name={`general_information.["linked_shg"]`}
                    {...parentFormik.getFieldProps(
                      `general_information.["linked_shg"]`
                    )}
                  />
                </Form.Group>

                <Form.Group as={Col} md="3" className="my-3">
                  <Form.Label>{t("general_information.vo")}</Form.Label>
                  <Form.Control
                    name={`general_information.["linked_VO"]`}
                    {...parentFormik.getFieldProps(
                      `general_information.["linked_VO"]`
                    )}
                  />
                </Form.Group>

                <Form.Group as={Col} md="3" className="my-3">
                  <Form.Label>{t("general_information.clf")}</Form.Label>
                  <Form.Control
                    name={`general_information.["clf_name"]`}
                    {...parentFormik.getFieldProps(
                      `general_information.["clf_name"]`
                    )}
                  />
                </Form.Group>

                <Form.Group as={Col} md="3" className="my-3">
                  <Form.Label>{t("general_information.pg_clf")}</Form.Label>
                  <Form.Control
                    name={`general_information.["pg_name"]`}
                    {...parentFormik.getFieldProps(
                      `general_information.["pg_name"]`
                    )}
                  />
                </Form.Group>
              </Row>

              <Row>
                <Form.Group as={Col} md="3" className="my-3">
                  <Form.Label>{t("general_information.contact")}</Form.Label>
                  <Form.Control
                    name={`general_information.["contact_details"]["contact_number"]`}
                    {...parentFormik.getFieldProps(
                      `general_information.["contact_details"]["contact_number"]`
                    )}
                  />
                </Form.Group>

                <Form.Group as={Col} md="3" className="my-3">
                  <Form.Label>{t("general_information.alt_number")}</Form.Label>
                  <Form.Control
                    name={`general_information.["contact_details"]["alternate_number"]`}
                    {...parentFormik.getFieldProps(
                      `general_information.["contact_details"]["alternate_number"]`
                    )}
                  />
                </Form.Group>

                <Form.Group as={Col} md="5" className="my-3">
                  <Form.Label>{t("general_information.email")}</Form.Label>
                  <Form.Control
                    name={`general_information.["contact_details"]["email"]`}
                    {...parentFormik.getFieldProps(
                      `general_information.["contact_details"]["email"]`
                    )}
                  />
                </Form.Group>
              </Row>

              <Row>
                <Form.Group as={Col} md="3" className="my-3">
                  <Form.Label>{t("general_information.division")}</Form.Label>
                  <Form.Select
                    name={`general_information.["location_details"]["division"]`}
                    {...parentFormik.getFieldProps(
                      `general_information.["location_details"]["division"]`
                    )}
                  >
                    <option value="">Please Choose</option>
                    <option>BASTAR</option>
                    <option>DURG</option>
                    <option>RAIPUR</option>
                    <option>BILASPUR</option>
                    <option>SURGUJA</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col} md="3" className="my-3">
                  <Form.Label>{t("general_information.district")}</Form.Label>
                  <Form.Select
                    name={`general_information.["location_details"]["district"]`}
                    {...parentFormik.getFieldProps(
                      `general_information.["location_details"]["district"]`
                    )}
                  >
                    <option value="">Please Choose</option>
                    <option>Raipur</option>
                    <option>Bilaspur</option>
                    <option>Durg</option>
                    <option>Korba</option>
                    <option>Raigarh</option>
                    <option>Rajnandgaon</option>
                    <option>Koriya</option>
                    <option>Surguja</option>
                    <option>Balrampur-Ramanujganj</option>
                    <option>Jashpur</option>
                    <option>Surajpur</option>
                    <option>Janjgir–Champa</option>
                    <option>Mungeli</option>
                    <option>Kabirdham</option>
                    <option>Bemetara</option>
                    <option>Balod</option>
                    <option>Baloda Bazar-Bhatapara</option>
                    <option>Gariaband</option>
                    <option>Mahasamund</option>
                    <option>Dhamtari</option>
                    <option>Bijapur</option>
                    <option>Narayanpur</option>
                    <option>Kanker</option>
                    <option>Bastar</option>
                    <option>Dantewada</option>
                    <option>Kondagaon</option>
                    <option>Sukma</option>
                    <option>Gaurela-Pendra-Marwahi</option>
                    <option>Manendragarh-Chirmiri-Bharatpur</option>
                    <option>Mohla Manpur</option>
                    <option>Sakti</option>
                    <option>Sarangarh-Bilaigarh</option>
                    <option>Khairagarh-Chhuikhadan-Gandai</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col} md="3" className="my-3">
                  <Form.Label>{t("general_information.block")}</Form.Label>
                  <Form.Select
                    name={`general_information.["location_details"]["block"]`}
                    {...parentFormik.getFieldProps(
                      `general_information.["location_details"]["block"]`
                    )}
                  >
                    <option value="">Please Choose</option>
                    <option>Block Information</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col} md="12" className="my-3">
                  <Form.Label>{t("general_information.address")}</Form.Label>
                  <Form.Control
                    as="textarea"
                    name={`general_information.["location_details"]["complete_address"]`}
                    {...parentFormik.getFieldProps(
                      `general_information.["location_details"]["complete_address"]`
                    )}
                  />
                </Form.Group>
              </Row>
            </section>

            <div>
              <FormSectionHeader name={t("section_label2")} />
            </div>

            <section className="px-3">
              <Row className="mt-3">
                <Form.Group as={Col} md="4" className="my-3">
                  <Form.Label>{t("val_add.status")}</Form.Label>
                  <Form.Select
                    name={`value_addition_information.["business_registration_status"]`}
                    {...parentFormik.getFieldProps(
                      `value_addition_information.["business_registration_status"]`
                    )}
                  >
                    <option value="">Please Choose</option>
                    <option>REGISTERED</option>
                    <option>UNREGISTERED</option>
                    <option>INPROCESS</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group as={Col} md="4" className="my-3">
                  <Form.Label>{t("val_add.type")}</Form.Label>
                  <Form.Select
                    name={`value_addition_information.["business_registration_type"]`}
                    {...parentFormik.getFieldProps(
                      `value_addition_information.["business_registration_type"]`
                    )}
                  >
                    <option value="">Please Choose</option>
                    <option>COMPANY</option>
                    <option>CO-OP SOCIETY</option>
                    <option>MSME</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col} md="4" className="my-3">
                  <Form.Label>{t("val_add.date")}</Form.Label>
                  <Form.Control
                    type="date"
                    name={`value_addition_information.["business_registration_date"]`}
                    {...parentFormik.getFieldProps(
                      `value_addition_information.["business_registration_date"]`
                    )}
                  />
                </Form.Group>
              </Row>

              <Row className="mt-2">
                <Form.Group as={Col} md="4" className="my-3">
                  <Form.Label>{t("val_add.full_time_emp")}</Form.Label>
                  <Form.Control
                    type="number"
                    name={`value_addition_information.["full_time_employees"]`}
                    {...parentFormik.getFieldProps(
                      `value_addition_information.["full_time_employees"]`
                    )}
                  />
                </Form.Group>

                <Form.Group as={Col} md="4" className="my-3">
                  <Form.Label>{t("val_add.part_time_emp")}</Form.Label>
                  <Form.Control
                    type="number"
                    name={`value_addition_information.["part_time_employees"]`}
                    {...parentFormik.getFieldProps(
                      `value_addition_information.["part_time_employees"]`
                    )}
                  />
                </Form.Group>
              </Row>

              <FormSectionSubHeader name={t("val_add.business_cert_label")} />

              <Row>
                <CertificateSection parentFormik={parentFormik} />
              </Row>

              <FormSectionSubHeader name={t("val_add.sales_info_label")} />

              <Row className="mt-3">
                <Form.Group as={Col} md="6">
                  <Form.Label>{t("val_add.total_sales_fy")} </Form.Label>
                  <Form.Control
                    placeholder=""
                    type="number"
                    name={`value_addition_information.["total_sales_FY"]`}
                    {...parentFormik.getFieldProps(
                      `value_addition_information.["total_sales_FY"]`
                    )}
                  />
                </Form.Group>

                <Form.Group as={Col} md="6">
                  <Form.Label>
                    {t("val_add.total_sales_last_quater")}
                  </Form.Label>
                  <Form.Control
                    placeholder=""
                    type="number"
                    name={`value_addition_information.["total_sales_last_quater"]`}
                    {...parentFormik.getFieldProps(
                      `value_addition_information.["total_sales_last_quater"]`
                    )}
                  />
                </Form.Group>
              </Row>

              <FormSectionSubHeader name={t("val_add.top_sku_info")} />

              <SKUSection parentFormik={parentFormik} />
            </section>

            <div className="mt-4">
              <FormSectionHeader name={t("section_label3")} />
            </div>

            <section className="px-3 mt-3">
              <Row>
                <Form.Group as={Col} md="6" className="mt-3">
                  <Form.Label>{t("prod_dev.brand_name")}</Form.Label>
                  <Form.Select
                    name={`product_development_status.["brand_name_exists"]`}
                    {...parentFormik.getFieldProps(
                      `product_development_status.["brand_name_exists"]`
                    )}
                  >
                    <option value="">Please Choose</option>
                    <option>YES</option>
                    <option>NO</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col} md="6" className="mt-3">
                  <Form.Label>{t("prod_dev.specify_brand_name")}</Form.Label>
                  <Form.Control
                    name={`product_development_status.["brand_name"]`}
                    {...parentFormik.getFieldProps(
                      `product_development_status.["brand_name"]`
                    )}
                  />
                </Form.Group>

                <Form.Group as={Col} md="6" className="mt-3">
                  <Form.Label>{t("prod_dev.logo")}</Form.Label>
                  <Form.Select
                    name={`product_development_status.["logo_exists"]`}
                    {...parentFormik.getFieldProps(
                      `product_development_status.["logo_exists"]`
                    )}
                  >
                    <option value="">Please Choose</option>
                    <option>YES</option>
                    <option>NO</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col} md="6" className="mt-3">
                  <Form.Label>{t("prod_dev.support_logo_dev")}</Form.Label>
                  <Form.Select
                    name={`product_development_status.["logo_support_needed"]`}
                    {...parentFormik.getFieldProps(
                      `product_development_status.["logo_support_needed"]`
                    )}
                  >
                    <option value="">Please Choose</option>
                    <option>YES</option>
                    <option>NO</option>
                  </Form.Select>
                </Form.Group>
              </Row>

              <FormSectionSubHeader
                name={t("prod_dev.support_req_prod_label")}
              />
              <ProductDevelopmentSection parentFormik={parentFormik} />
            </section>

            <div className="mt-4">
              <FormSectionHeader name={t("section_label4")} />
            </div>

            <section className="px-3 mt-3">
              <SpecifySelect
                parentFormik={parentFormik}
                formKey="prior_exp_business_skill_module"
                drop_label={t("training_cb.prior_training_business_skill")}
                specify_label="Specify the Prior training you had in Business Skill"
              />

              <SpecifySelect
                parentFormik={parentFormik}
                formKey="training_needed_business_skill"
                drop_label={t("training_cb.need_training_business_skill")}
                specify_label="Specify the trainig "
              />

              <SpecifySelect
                formKey="prior_exp_product_packaging_module"
                parentFormik={parentFormik}
                drop_label={t("training_cb.prior_training_prod_packaging")}
                specify_label="Specify the Prior training you had in Product Packaging"
              />

              <SpecifySelect
                formKey="training_needed_product_packaging"
                parentFormik={parentFormik}
                drop_label={t("training_cb.need_training_prod_packaging")}
                specify_label="Specify the trainig you need"
              />

              <SpecifySelect
                formKey="training_availed_on_business_subject_matter"
                parentFormik={parentFormik}
                drop_label={t("training_cb.availed_any_training")}
                specify_label="Specify the trainig you had"
              />

              <FormSectionSubHeader
                name={t("training_cb.need_any_training_label")}
              />

              <div className="mt-3">
                <TrainingSection parentFormik={parentFormik} />
              </div>
            </section>
            <div className="mt-3 mx-2 text-center">
              <Button
                disabled={!parentFormik.dirty || !parentFormik.isValid}
                variant="danger"
                size="lg"
                onClick={parentFormik.handleSubmit}
              >
                Submit Information
              </Button>
            </div>
          </Form>
        </section>
      </Container>
    </main>
  );
}
