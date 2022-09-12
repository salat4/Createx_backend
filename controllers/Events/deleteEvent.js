const Events = require("../../models/Events");

const deleteEvent = async (req, res) => {
  const { id: _id } = req.params;
  const result = await Events.findByIdAndRemove(_id);
  res.json(result);
};

module.exports = { deleteEvent };
