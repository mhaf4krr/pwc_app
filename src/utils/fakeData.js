const { faker } = require("@faker-js/faker");

const fs = require("fs");

function writeJSONFile() {
  try {
    let data = [];

    for (let i = 0; i < 1000; i++) {
      data.push({
        general_information: {
          type_of_respondent: faker.helpers.arrayElement([
            "INDIVIDUAL",
            "COMMUNITY BASED ORGANIZATION",
          ]),
          name_of_respondent: faker.person.fullName(),
          date_of_registration: "1998-06-01",
          linked_shg: faker.company.name(),
          linked_VO: faker.company.name(),
          clf_name: faker.company.name(),
          pg_name: faker.company.name(),
          contact_details: {
            contact_number: faker.phone.number("700#######"),
            alternate_number: faker.phone.number("700#######"),
            email: faker.internet.email(),
          },
          location_details: {
            division: faker.helpers.arrayElement([
              "BASTAR",
              "DURG",
              "RAIPUR",
              "BILASPUR",
              "SURGUJA",
            ]),
            district: faker.helpers.arrayElement([
              "Raipur",
              "Bilaspur",
              "Durg",
              "Korba",
              "Raigarh",
              "Rajnandgaon",
              "Koriya",
              "Surguja",
              "Balrampur-Ramanujganj",
              "Jashpur",
              "Surajpur",
              "Janjgir–Champa",
              "Mungeli",
              "Kabirdham",
              "Bemetara",
              "Balod",
              "Baloda Bazar-Bhatapara",
              "Gariaband",
              "Mahasamund",
              "Dhamtari",
              "Bijapur",
              "Narayanpur",
              "Kanker",
              "Bastar",
              "Dantewada",
              "Kondagaon",
              "Sukma",
              "Gaurela-Pendra-Marwahi",
              "Manendragarh-Chirmiri-Bharatpur",
              "Mohla Manpur",
              "Sakti",
              "Sarangarh-Bilaigarh",
              "Khairagarh-Chhuikhadan-Gandai",
            ]),
            block: "Block Information",
            complete_address: "TEST ADDRESS",
          },
        },
        value_addition_information: {
          business_registration_status: faker.helpers.arrayElement([
            "REGISTERED",
            "UNREGISTERED",
            "INPROCESS",
          ]),
          business_registration_type: faker.helpers.arrayElement([
            "COMPANY",
            "CO-OP SOCIETY",
            "MSME",
          ]),
          business_registration_date: "2005-05-01",
          full_time_employees: faker.number.int(50),
          part_time_employees: faker.number.int(50),
          business_certificates: [
            {
              certificate: "ESTABLISHMENT CERTIFICATE",
              status: faker.helpers.arrayElement(["AVAILABLE", "REQUIRED"]),
              userAdded: false,
            },
            {
              certificate: "MSME REGISTRATION",
              status: faker.helpers.arrayElement(["AVAILABLE", "REQUIRED"]),
              userAdded: false,
            },
            {
              certificate: "GST CERTIFICATE",
              status: faker.helpers.arrayElement(["AVAILABLE", "REQUIRED"]),
              userAdded: false,
            },
            {
              certificate: "FSSAI CERTIFICATE",
              status: faker.helpers.arrayElement(["AVAILABLE", "REQUIRED"]),
              userAdded: false,
            },
            {
              certificate: "IMPORT EXPORT CODE (IEC)",
              status: faker.helpers.arrayElement(["AVAILABLE", "REQUIRED"]),
              userAdded: false,
            },
            {
              certificate: "ELECTRICITY CERTIFICATE",
              status: faker.helpers.arrayElement(["AVAILABLE", "REQUIRED"]),
              userAdded: true,
            },
          ],
          total_sales_FY: faker.number.int(1000000),
          total_sales_last_quater: faker.number.int(100000),
          top_sku_information: [
            {
              sku_name: faker.commerce.productName(),
              sale: faker.number.int(100000),
              sale_channels: [
                {
                  channel: faker.company.name(),
                  split: faker.number.int(60),
                },
                {
                  channel: faker.company.name(),
                  split: faker.number.int(20),
                },
                {
                  channel: faker.company.name(),
                  split: faker.number.int(20),
                },
              ],
            },
            {
              sku_name: faker.commerce.productName(),
              sale: faker.number.int(100000),
              sale_channels: [
                {
                  channel: faker.company.name(),
                  split: faker.number.int(100),
                },
              ],
            },
          ],
        },
        product_development_status: {
          brand_name_exists: faker.helpers.arrayElement(["YES", "NO"]),
          brand_name: faker.company.name(),
          logo_exists: faker.helpers.arrayElement(["YES", "NO"]),
          logo_support_needed: faker.helpers.arrayElement(["YES", "NO"]),
          product_development_support_required: [
            {
              value_addition: "TECHNICAL INPUT / KNOWLEDGE",
              requirement: faker.helpers.arrayElement(["YES", "NO"]),
              userAdded: false,
            },
            {
              value_addition: "PACKAGING MATERIAL",
              requirement: faker.helpers.arrayElement(["YES", "NO"]),
              userAdded: false,
            },
            {
              value_addition: "PRODUCT DESIGNING",
              requirement: faker.helpers.arrayElement(["YES", "NO"]),
              userAdded: false,
            },
            {
              value_addition: "SHORTING",
              requirement: faker.helpers.arrayElement(["YES", "NO"]),
              userAdded: false,
            },
            {
              value_addition: "GRADING",
              requirement: faker.helpers.arrayElement(["YES", "NO"]),
              userAdded: false,
            },
            {
              value_addition: "BRANDING",
              requirement: faker.helpers.arrayElement(["YES", "NO"]),
              userAdded: false,
            },
            {
              value_addition: "CERTIFICATIONS",
              requirement: faker.helpers.arrayElement(["YES", "NO"]),
              userAdded: false,
            },
            {
              value_addition: "PRODUCT TESTING",
              requirement: faker.helpers.arrayElement(["YES", "NO"]),
              userAdded: false,
            },
          ],
        },
        training_and_capacity_building: {
          prior_exp_business_skill_module: {
            value_addition: "Logo Development",
            requirement: faker.helpers.arrayElement(["YES", "NO"]),
            userAdded: true,
          },
          training_needed_business_skill: {
            value_addition: "Logo Development",
            requirement: faker.helpers.arrayElement(["YES", "NO"]),
            userAdded: true,
          },
          prior_exp_product_packaging_module: {
            value_addition: "Logo Development",
            requirement: faker.helpers.arrayElement(["YES", "NO"]),
            userAdded: true,
          },
          training_needed_product_packaging:
            "Special Training in Product Packaging 1",
          training_availed_on_business_subject_matter: {
            value_addition: "Logo Development",
            requirement: faker.helpers.arrayElement(["YES", "NO"]),
            userAdded: true,
          },
          trainings_required: [
            {
              training: "Logo Making",
              userAdded: true,
            },
            {
              training: "Social Media Campaigning",
              userAdded: true,
            },
          ],
        },
      });
    }

    fs.writeFileSync("./data.json", JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
}

writeJSONFile();
