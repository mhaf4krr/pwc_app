import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Table, Form, Row, Col, Button, Modal, Alert } from "react-bootstrap";

import styles from "./Style.module.css";
import { Trash3Fill } from "react-bootstrap-icons";

export default function SKUSection({ parentFormik }) {
  let [modalVisible, setModalVisible] = useState(false);

  //SAVE MODAL DATA TO ORIGINAL
  function saveModalData(sku) {
    let temp = [
      ...parentFormik.values.value_addition_information.top_sku_information,
    ];
    temp = [...temp, sku];
    parentFormik.setFieldValue(
      "value_addition_information.top_sku_information",
      temp
    );

    parentFormik.setFieldTouched(
      "value_addition_information.top_sku_information",
      true
    );
  }

  //REMOVE SKU FROM EXISITING LIST
  function removeSKUfromList(sku_name) {
    let temp = [
      ...parentFormik.values.value_addition_information.top_sku_information,
    ];
    temp = temp.filter((item) => {
      return item.sku_name != sku_name;
    });

    parentFormik.setFieldValue(
      "value_addition_information.top_sku_information",
      temp
    );

    parentFormik.setFieldTouched(
      "value_addition_information.top_sku_information",
      true
    );
  }

  function renderTable() {
    let temp =
      parentFormik.values.value_addition_information.top_sku_information.map(
        (val, idx) => {
          let salesChannels = val.sale_channels.map((item) => {
            return (
              <tr key={item.channel}>
                <td> {item.channel} </td>
                <td> {item.split} %</td>
              </tr>
            );
          });

          return (
            <tr key={val.sku_name + "-" + idx}>
              <td>{idx + 1}</td>
              <td>{val["sku_name"]}</td>
              <td>{val["sale"]}</td>
              <td>
                <table className={styles["inner_table"]} border="1">
                  <tbody>{salesChannels}</tbody>
                </table>
              </td>
              <td>
                <Button
                  onClick={() => {
                    removeSKUfromList(val["sku_name"]);
                  }}
                  variant="danger"
                >
                  <Trash3Fill color="white" />
                </Button>
              </td>
            </tr>
          );
        }
      );

    return temp;
  }

  return (
    <section>
      <Table>
        <thead>
          <tr>
            <th>S.NO</th>
            <th>SKU NAME</th>

            <th>SALE IN FY 2022-2023</th>

            <th>SALE CHANNELS</th>
            <th>DELETE</th>
          </tr>
        </thead>
        <tbody>{renderTable()}</tbody>
      </Table>
      <>
        <AddSKUItem
          modalVisible={modalVisible}
          saveModalData={saveModalData}
          setModalVisible={setModalVisible}
        />
        <Button
          onClick={() => {
            setModalVisible(true);
          }}
        >
          ADD SKU TO LIST
        </Button>
      </>
    </section>
  );
}

function AddSKUItem({ saveModalData, setModalVisible, modalVisible }) {
  let initialValues = {
    sku_name: "",
    sale: "",
    sale_channels: [],
  };
  const validationSchema = Yup.object({
    sku_name: Yup.string().required(),
    sale: Yup.number().required(),
    sale_channels: Yup.array()
      .of(
        Yup.object().shape({
          channel: Yup.string().required(),
          split: Yup.number().required(),
        })
      )
      .length(3),
  });

  let formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      //SAVE MODAL DATA

      formik.resetForm();
      saveModalData(values);
      setModalVisible(false);
    },
  });

  //SAVE CHANNEL INTO MODAL FORMIK

  function saveChannelInfo(channelInfo) {
    let temp = [...formik.values.sale_channels];
    temp = [...temp, channelInfo];
    formik.setFieldValue("sale_channels", temp);
  }

  function removeChannelFromList(channel) {
    let temp = [...formik.values.sale_channels];
    temp = temp.filter((item) => {
      return item.channel != channel;
    });
    formik.setFieldValue("sale_channels", [...temp]);
  }

  function ChannelSaleTable() {
    let temp = formik.values.sale_channels.map((item, idx) => {
      return (
        <tr>
          <td> {idx + 1} </td>
          <td> {item.channel} </td>
          <td> {item.split} </td>
          <td>
            <Button variant="danger">
              <div
                onClick={() => {
                  removeChannelFromList(item.channel);
                }}
              >
                <Trash3Fill color="white" />
              </div>
            </Button>
          </td>
        </tr>
      );
    });
    return (
      <Table>
        <thead>
          <tr>
            <th>S.NO</th>

            <th>SKU CHANNEL NAME</th>
            <th>SALE SPLIT (%)</th>
            <th>DELETE</th>
          </tr>
        </thead>
        <tbody>
          {temp}
          <AddListing saveChannelInfo={saveChannelInfo} />
        </tbody>
      </Table>
    );
  }

  function AddListing({ saveChannelInfo }) {
    let formik = useFormik({
      initialValues: {
        channel: "",
        split: "",
      },

      validationSchema: Yup.object({
        channel: Yup.string().required(),
        split: Yup.number().required(),
      }),

      onSubmit: (values) => {
        saveChannelInfo(values);
        formik.resetForm();
      },
    });

    return (
      <tr>
        <td></td>
        <td>
          <Form.Control name="channel" {...formik.getFieldProps("channel")} />
        </td>
        <td>
          <Form.Control
            type="number"
            name="split"
            {...formik.getFieldProps("split")}
          />
        </td>
        <td>
          <Button
            disabled={!formik.dirty || !formik.isValid}
            onClick={formik.submitForm}
            variant="success"
          >
            ADD
          </Button>
        </td>
      </tr>
    );
  }

  return (
    <>
      <Modal
        show={modalVisible}
        onHide={() => {
          setModalVisible(false);
        }}
        size="lg"
      >
        <Modal.Header closeButton>
          <div>Add SKU Information</div>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <Form.Group as={Col} md="6" className="mt-3">
                <Form.Label>SKU NAME</Form.Label>
                <Form.Control
                  name="sku_name"
                  {...formik.getFieldProps("sku_name")}
                />
              </Form.Group>

              <Form.Group as={Col} md="6" className="mt-3">
                <Form.Label>SALE IN FY 2022-2023</Form.Label>
                <Form.Control
                  type="number"
                  name="sale"
                  {...formik.getFieldProps("sale")}
                />
              </Form.Group>
            </Row>
            <div className="my-3 mx-3">
              <Alert variant="warning">LIST TOP 3 SKU SALE CHANNELS</Alert>
            </div>
            <section className="p-2">
              <ChannelSaleTable />
            </section>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="danger"
            onClick={() => {
              setModalVisible(false);
            }}
          >
            Close
          </Button>
          <Button
            variant="success"
            disabled={!formik.dirty || !formik.isValid}
            onClick={formik.handleSubmit}
          >
            SAVE SKU
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
