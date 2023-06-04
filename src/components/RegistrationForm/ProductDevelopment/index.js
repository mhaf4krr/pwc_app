import React, { useState } from "react";
import { useFormik } from "formik";

import * as Yup from "yup";
import { Table, Form, Row, Col, Button } from "react-bootstrap";

import { Trash3Fill } from "react-bootstrap-icons";
export default function ProductDevelopmentSection({ parentFormik }) {
  //ADDS THE USER CERTIFICATE

  function addUserToExisting(user_value) {
    let temp = [
      ...parentFormik.values.product_development_status
        .product_development_support_required,
    ];
    temp = [...temp, user_value];
    parentFormik.setFieldValue(
      "product_development_status.product_development_support_required",
      temp
    );
    parentFormik.setFieldTouched(
      "product_development_status.product_development_support_required",
      true
    );
  }

  //REMOVES THE SELECTED CERTIFICATE

  function removeValueAddition(value) {
    let temp = [
      ...parentFormik.values.product_development_status
        .product_development_support_required,
    ];

    temp = temp.filter((item) => {
      return item.value_addition != value;
    });

    parentFormik.setFieldValue(
      "product_development_status.product_development_support_required",
      temp
    );
    parentFormik.setFieldTouched(
      "product_development_status.product_development_support_required",
      true
    );
  }

  function renderTable() {
    return parentFormik.values.product_development_status.product_development_support_required.map(
      (item, idx) => {
        return (
          <tr key={item["value_addition"] + "-" + idx}>
            <td>{idx + 1}</td>
            <td>{item["value_addition"]}</td>
            <td>
              <Form.Select
                name={`product_development_status["product_development_support_required"][${idx}]["requirement"]`}
                {...parentFormik.getFieldProps(
                  `product_development_status["product_development_support_required"][${idx}]["requirement"]`
                )}
              >
                <option value="">Please Choose</option>
                <option>YES</option>
                <option>NO</option>
              </Form.Select>
            </td>

            <td>
              <div>
                {item.userAdded ? (
                  <Button
                    onClick={() => {
                      removeValueAddition(item.value_addition);
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
              <th>VALUE ADDITION</th>
              <th>REQUIREMENT</th>
              <th>REMOVE</th>
            </tr>
          </thead>
          <tbody>
            {
              <>
                {renderTable()}
                <AddValueAdditionItem addUserToExisting={addUserToExisting} />
              </>
            }
          </tbody>
        </Table>
      </div>
    </section>
  );
}

function AddValueAdditionItem({ addUserToExisting }) {
  let initialValues = {
    value_addition: "",
    requirement: "",
    userAdded: true,
  };
  const validationSchema = Yup.object({
    value_addition: Yup.string().required(),
    requirement: Yup.string().required(),
    userAdded: Yup.bool().isTrue(),
  });

  let formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      addUserToExisting(values);
      formik.resetForm({
        values: initialValues,
      });
    },
  });
  return (
    <tr>
      <td></td>
      <td>
        <Form.Control
          name="value_addition"
          placeholder="OTHERS , PLEASE SPECIFY"
          {...formik.getFieldProps("value_addition")}
        />
      </td>
      <td>
        <Form.Select
          name="requirement"
          {...formik.getFieldProps("requirement")}
        >
          <option value="">Please Choose</option>
          <option>YES</option>
          <option>NO</option>
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
