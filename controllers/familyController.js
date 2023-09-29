const Family = require("../models/family");
const asyncHandler = require("express-async-handler");

// Display list of all familys.
exports.family_list = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: family list");
});

// Display detail page for a specific family.
exports.family_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: family detail: ${req.params.id}`);
});

// Display family create form on GET.
exports.family_create_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: family create GET");
});

// Handle family create on POST.
exports.family_create_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: family create POST");
});

// Display family delete form on GET.
exports.family_delete_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: family delete GET");
});

// Handle family delete on POST.
exports.family_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: family delete POST");
});

// Display family update form on GET.
exports.family_update_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: family update GET");
});

// Handle family update on POST.
exports.family_update_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: family update POST");
});
