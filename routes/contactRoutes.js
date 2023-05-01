const { request } = require("express");
const express = require("express");
const router = express.Router();
const {getContacts,getContact,createContact,updateContact,delteContact} = require("./controllers/contactController")

router.route("/").get(getContacts)

router.route("/:id").get(getContact)

router.route("/").post(createContact)

router.route("/:id").put(updateContact)

router.route("/:id").delete(delteContact)

module.exports = router;