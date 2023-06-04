export let initialValues = {
  general_information: {
    type_of_respondent: "",
    name_of_respondent: "",
    date_of_registration: "",
    linked_shg: "",
    linked_VO: "",
    clf_name: "",
    pg_name: "",

    contact_details: {
      contact_number: "",
      alternate_number: "",
      email: "",
    },

    location_details: {
      division: "",
      district: "",
      block: "",
      complete_address: "",
    },
  },

  value_addition_information: {
    business_registration_status: "",
    business_registration_type: "",
    business_registration_date: "",
    full_time_employees: "",
    part_time_employees: "",
    business_certificates: [
      {
        certificate: "ESTABLISHMENT CERTIFICATE",
        status: "",
        userAdded: false,
      },

      {
        certificate: "MSME REGISTRATION",
        status: "",
        userAdded: false,
      },
      {
        certificate: "GST CERTIFICATE",
        status: "",
        userAdded: false,
      },
      {
        certificate: "FSSAI CERTIFICATE",
        status: "",
        userAdded: false,
      },
      {
        certificate: "IMPORT EXPORT CODE (IEC)",
        status: "",
        userAdded: false,
      },
    ],
    total_sales_FY: "",
    total_sales_last_quater: "",
    top_sku_information: [
      {
        sku_name: "HONEY",
        sale: 15000,
        sale_channels: [
          {
            channel: "Online",
            split: 30,
          },

          {
            channel: "Retail",
            split: 60,
          },
        ],
      },
    ],
  },

  product_development_status: {
    brand_name_exists: "",
    brand_name: "",
    logo_exists: "",
    logo_support_needed: "",
    product_development_support_required: [
      {
        value_addition: "TECHNICAL INPUT / KNOWLEDGE",
        requirement: "",
        userAdded: false,
      },
      {
        value_addition: "PACKAGING MATERIAL",
        requirement: "",
        userAdded: false,
      },
      {
        value_addition: "PRODUCT DESIGNING",
        requirement: "",
        userAdded: false,
      },
      {
        value_addition: "SHORTING",
        requirement: "",
        userAdded: false,
      },
      {
        value_addition: "GRADING",
        requirement: "",
        userAdded: false,
      },
      {
        value_addition: "BRANDING",
        requirement: "",
        userAdded: false,
      },
      {
        value_addition: "CERTIFICATIONS",
        requirement: "",
        userAdded: false,
      },
      {
        value_addition: "PRODUCT TESTING",
        requirement: "",
        userAdded: false,
      },
    ],
  },

  training_and_capacity_building: {
    prior_exp_business_skill_module: "",
    training_needed_business_skill: "",

    prior_exp_product_packaging_module: "",
    training_needed_product_packaging: "",

    training_availed_on_business_subject_matter: "",

    trainings_required: [],
  },
};
