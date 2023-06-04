import React, { useState } from "react";
import { useFormik } from "formik";

import * as Yup from "yup";
import { Table, Form, Row, Col, Button } from "react-bootstrap";

import { Trash3Fill } from "react-bootstrap-icons";
export default function TrainingSection({ parentFormik }) {
  //ADDS THE USER CERTIFICATE

  function addUserToExisting(user_value) {
    let temp = [
      ...parentFormik.values.training_and_capacity_building.trainings_required,
    ];
    temp = [...temp, user_value];
    parentFormik.setFieldValue(
      "training_and_capacity_building.trainings_required",
      temp
    );
    parentFormik.setFieldTouched(
      "training_and_capacity_building.trainings_required",
      true
    );
  }

  //REMOVES THE SELECTED CERTIFICATE

  function removeTraining(training_name) {
    let temp = [
      ...parentFormik.values.training_and_capacity_building.trainings_required,
    ];

    temp = temp.filter((item) => {
      return item.training != training_name;
    });

    parentFormik.setFieldValue(
      "training_and_capacity_building.trainings_required",
      temp
    );
    parentFormik.setFieldTouched(
      "training_and_capacity_building.trainings_required",
      true
    );
  }

  function renderTable() {
    return parentFormik.values.training_and_capacity_building.trainings_required.map(
      (item, idx) => {
        return (
          <tr key={item.training + "-" + idx}>
            <td>{idx + 1}</td>
            <td>{item["training"]}</td>

            <td>
              <div>
                {item.userAdded ? (
                  <Button
                    onClick={() => {
                      removeTraining(item.training);
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
              <th>TRAINING NEEDED</th>

              <th>REMOVE</th>
            </tr>
          </thead>
          <tbody>
            {
              <>
                {renderTable()}
                <AddUserNeededTraining addUserToExisting={addUserToExisting} />
              </>
            }
          </tbody>
        </Table>
      </div>
    </section>
  );
}

function AddUserNeededTraining({ addUserToExisting }) {
  let initialValues = {
    training: "",
    userAdded: true,
  };
  const validationSchema = Yup.object({
    training: Yup.string().required(),
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
        <Form.Control name="training" {...formik.getFieldProps("training")} />
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
