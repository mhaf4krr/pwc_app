import React, { useState } from "react";

import { Row, Col, Form } from "react-bootstrap";

export default function SpecifySelect({
  parentFormik,
  drop_label,
  specify_label,
  formKey,
}) {
  let [ans, setAns] = useState("");

  return (
    <Row>
      <Form.Group as={Col} md="6" className="my-3">
        <Form.Label>{drop_label}</Form.Label>
        <Form.Select
          value={ans}
          onChange={(e) => {
            let val = e.target.value;
            if (val === "YES") {
              setAns("YES");
            }

            if (val === "NO") {
              setAns("NO");
              parentFormik.setFieldValue(
                `training_and_capacity_building.["${formKey}"]`,
                "NO"
              );

              parentFormik.setFieldTouched(
                `training_and_capacity_building.["${formKey}"]`,
                true
              );
            }
          }}
        >
          <option value="">Please Choose</option>
          <option>YES</option>
          <option>NO</option>
        </Form.Select>
      </Form.Group>

      {ans === "YES" ? (
        <Form.Group as={Col} md="5" className="my-3">
          <Form.Label>{specify_label}</Form.Label>
          <Form.Control
            name={`training_and_capacity_building.["${formKey}"]`}
            {...parentFormik.getFieldProps(
              `training_and_capacity_building.["${formKey}"]`
            )}
          />
        </Form.Group>
      ) : null}
    </Row>
  );
}
