import * as Yup from "yup";

let general_information_schema = Yup.object().shape({
  type_of_respondent: Yup.string().required(),
  name_of_respondent: Yup.string().required(),
  date_of_registration: Yup.string(),
  linked_shg: Yup.string(),
  linked_VO: Yup.string(),
  clf_name: Yup.string(),
  pg_name: Yup.string(),

  contact_details: Yup.object().shape({
    contact_number: Yup.string().length(10).required(),
    alternate_number: Yup.string(),
    email: Yup.string().email(),
  }),

  location_details: Yup.object().shape({
    division: Yup.string().required(),
    district: Yup.string().required(),
    block: Yup.string(),
    complete_address: Yup.string().required(),
  }),
});

//SECTION B - VALUE ADDITION STARTS
let business_certificates_schema = Yup.object().shape({
  certificate: Yup.string().required(),
  status: Yup.string().required(),
  userAdded: Yup.bool().required(),
});

let top_sku_information_schema = Yup.object().shape({
  sku_name: Yup.string().required(),
  sale: Yup.number().required(),
  sale_channels: Yup.array().of(
    Yup.object().shape({
      channel: Yup.string().required(),
      split: Yup.number().required(),
    })
  ),
});

let product_development_status_schema = Yup.object().shape({
  brand_name_exists: Yup.string().required(),
  brand_name: Yup.string().required(),
  logo_exists: Yup.string().required(),
  logo_support_needed: Yup.string().required(),
  product_development_support_required: Yup.array().of(
    Yup.object().shape({
      value_addition: Yup.string().required(),
      requirement: Yup.string().required(),
      userAdded: Yup.bool().required(),
    })
  ),
});

let training_and_capacity_building_schema = Yup.object().shape({
  prior_exp_business_skill_module: Yup.string().required(),
  training_needed_business_skill: Yup.string().required(),

  prior_exp_product_packaging_module: Yup.string().required(),
  training_needed_product_packaging: Yup.string().required(),

  training_availed_on_business_subject_matter: Yup.string().required(),

  trainings_required: Yup.array().of(
    Yup.object({
      training: Yup.string().required(),
      userAdded: Yup.bool().isTrue(),
    })
  ),
});

let value_addition_information_schema = Yup.object().shape({
  business_registration_status: Yup.string().required(),
  business_registration_type: Yup.string().required(),
  business_registration_date: Yup.string().required(),
  full_time_employees: Yup.string().required(),
  part_time_employees: Yup.string().required(),
  business_certificates: Yup.array().of(business_certificates_schema),
  total_sales_FY: Yup.string().required(),
  total_sales_last_quater: Yup.string().required(),
  top_sku_information: Yup.array().of(top_sku_information_schema),
});

export let validationSchema = Yup.object().shape({
  general_information: general_information_schema,
  value_addition_information: value_addition_information_schema,
  product_development_status: product_development_status_schema,
  training_and_capacity_building: training_and_capacity_building_schema,
});
