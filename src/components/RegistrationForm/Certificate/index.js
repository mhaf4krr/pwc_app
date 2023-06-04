import React, { useState } from "react";
import { useFormik } from "formik";

import * as Yup from "yup";
import { Table, Form, Row, Col, Button } from "react-bootstrap";

import { Trash3Fill } from "react-bootstrap-icons";
export default function CertificateSection({ parentFormik }) {
  //ADDS THE USER CERTIFICATE

  function addUserToExisting(user_value) {
    let temp = [
      ...parentFormik.values.value_addition_information.business_certificates,
    ];
    temp = [...temp, user_value];
    parentFormik.setFieldValue(
      "value_addition_information.business_certificates",
      temp
    );
    parentFormik.setFieldTouched(
      "value_addition_information.business_certificates",
      true
    );
  }

  //REMOVES THE SELECTED CERTIFICATE

  function removeCertificate(cert_name) {
    let temp = [
      ...parentFormik.values.value_addition_information.business_certificates,
    ];

    temp = temp.filter((item) => {
      return item.certificate != cert_name;
    });

    parentFormik.setFieldValue(
      "value_addition_information.business_certificates",
      temp
    );
    parentFormik.setFieldTouched(
      "value_addition_information.business_certificates",
      true
    );
  }

  function renderTable() {
    return parentFormik.values.value_addition_information.business_certificates.map(
      (cert, idx) => {
        return (
          <tr key={cert.certificate + "-" + idx}>
            <td>{idx + 1}</td>
            <td>{cert["certificate"]}</td>
            <td>
              <Form.Select
                name={`value_addition_information["business_certificates"][${idx}]["status"]`}
                {...parentFormik.getFieldProps(
                  `value_addition_information["business_certificates"][${idx}]["status"]`
                )}
              >
                <option value="">Please Choose</option>
                <option>AVAILABLE</option>
                <option>REQUIRED</option>
              </Form.Select>
            </td>

            <td>
              <div>
                {cert.userAdded ? (
                  <Button
                    onClick={() => {
                      removeCertificate(cert.certificate);
                    }}
                    variant="danger"
                  >
                    <Trash3Fill color="white" />
                  </Button>
                ) : (
                  <Button disabled variant="secondary">
                    <Trash3Fill color="white" />
                  </Button>
                )}
              </div>
            </td>
          </tr>
        );
      }
    );
  }
  return (
    <section>
      <div>
        <Table hover>
          <thead>
            <tr>
              <th>S.NO</th>
              <th>Certificate</th>
              <th>Status</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {
              <>
                {renderTable()}
                <AddUserCertificate addUserToExisting={addUserToExisting} />
              </>
            }
          </tbody>
        </Table>
      </div>
    </section>
  );
}

function AddUserCertificate({ addUserToExisting }) {
  let initialValues = {
    certificate: "",
    status: "",
    userAdded: true,
  };
  const validationSchema = Yup.object({
    certificate: Yup.string().required(),
    status: Yup.string().required(),
    userAdded: Yup.bool().isTrue(),
  });

  let formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      addUserToExisting(values);
      formik.resetForm();
    },
  });
  return (
    <tr>
      <td></td>
      <td>
        <Form.Control
          name="certificate"
          {...formik.getFieldProps("certificate")}
        />
      </td>
      <td>
        <Form.Select name="status" {...formik.getFieldProps("status")}>
          <option value="">Please Choose</option>
          <option>AVAILABLE</option>
          <option>REQUIRED</option>
        </Form.Select>
      </td>

      <td>
        <div>
          <Button
            disabled={!formik.isValid || !formik.dirty}
            onClick={formik.handleSubmit}
            variant="success"
          >
            ADD
          </Button>
        </div>
      </td>
    </tr>
  );
}
