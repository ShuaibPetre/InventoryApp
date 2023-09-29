const Producetype = require("../models/producetype");
const asyncHandler = require("express-async-handler");

// Display list of all producetype.
exports.producetype_list = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: producetype list");
});

// Display detail page for a specific producetype.
exports.producetype_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: producetype detail: ${req.params.id}`);
});

// Display producetype create form on GET.
exports.producetype_create_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: producetype create GET");
});

// Handle producetype create on POST.
exports.producetype_create_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: producetype create POST");
});

// Display producetype delete form on GET.
exports.producetype_delete_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: producetype delete GET");
});

// Handle producetype delete on POST.
exports.producetype_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: producetype delete POST");
});

// Display producetype update form on GET.
exports.producetype_update_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: producetype update GET");
});

// Handle producetype update on POST.
exports.producetype_update_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: producetype update POST");
});
