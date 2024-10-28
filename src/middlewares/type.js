const { z } = require("zod");
const { BadRequestError } = require("../utils/request");

exports.validateGetTypes = (req, res, next) => {
  const validateQuery = z.object({
    type_option: z.string().optional().nullable(),
  });

  const resultValidateQuery = validateQuery.safeParse(req.query);
  if (!resultValidateQuery.success) {
    throw new BadRequestError(resultValidateQuery.error.errors);
  }

  next();
};

exports.validateGetTypeById = (req, res, next) => {
  const validateParams = z.object({
    id: z.string(),
  });

  const result = validateParams.safeParse(req.params);
  if (!result.success) {
    throw new BadRequestError(result.error.errors);
  }

  next();
};

exports.validateCreateType = (req, res, next) => {
  const validateBody = z.object({
    type_option: z.string().optional().nullable(),
  });

  const result = validateBody.safeParse(req.body);
  if (!result.success) {
    throw new BadRequestError(result.error.errors);
  }

  next();
};

exports.validateUpdateType = (req, res, next) => {
  const validateParams = z.object({
    id: z.string(),
  });

  const resultParams = validateParams.safeParse(req.params);
  if (!resultParams.success) {
    throw new BadRequestError(resultParams.error.errors);
  }

  const validateBody = z.object({
    type_option: z.string().optional(),
  });

  const resultBody = validateBody.safeParse(req.body);
  if (!resultBody.success) {
    throw new BadRequestError(resultBody.error.errors);
  }

  next();
};

exports.validateDeleteTypeById = (req, res, next) => {
  const validateParams = z.object({
    id: z.string(),
  });

  const result = validateParams.safeParse(req.params);
  if (!result.success) {
    throw new BadRequestError(result.error.errors);
  }

  next();
};
