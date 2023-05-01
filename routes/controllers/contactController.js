const asyncHandler = require("express-async-handler");
const Contact = require("../../models/contactModel")
//@desc Get contacts
//@route GET /api/contacts
//@access public
const getContacts = asyncHandler(async(req, res) => {
    const contacts = await Contact.find()
    res.status(200).json(contacts)
})

//@desc Get contact
//@route GET /api/contacts/:id
//@access public
const getContact = asyncHandler(async(req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact) {
        res.status(404);
        throw new Error("Contact Not Found!")
    }else{
        res.status(200).json(contact)
    }
})

//@desc Create contact
//@route POST /api/contact
//@access public
const createContact = asyncHandler(async(req, res) => {
    const {name, email, phone } = req.body ;
    if(!name || !email || !phone){
        res.status(400)
        throw new Error("All fields madaatory")
    }else{
        const contact = await Contact.create({
            name,
            email,
            phone
        })
        res.status(201).json(contact)
    }
})

//@desc Update contact
//@route PUT /api/contact/:id
//@access public
const updateContact = asyncHandler(async(req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact) {
        res.status(404);
        throw new Error("Contact Not Found!")
    }else{
        const updatedContact = await Contact.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        )
        res.status(200).json(updatedContact)
    }
    
})


//@desc Delete contact
//@route DELETE /api/contacts/:id
//@access public
const delteContact = asyncHandler(async(req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact) {
        res.status(404);
        throw new Error("Contact Not Found!")
    }else{
       await Contact.findByIdAndDelete(req.params.id)
       res.status(200).json(contact)
    }
})

module.exports = {getContacts,getContact,createContact,updateContact,delteContact}