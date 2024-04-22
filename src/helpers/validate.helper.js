const validateHelper = async (schema, data) => {
  try {
    await schema.validateAsync(data);
  } catch (error) {
    throw error;
  }
};

export default validateHelper;
