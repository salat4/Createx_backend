const Events = require("../../models/Events");

const addEvent = async (req, res) => {
  const result = await Events.create(req.body);
  res.json(result);
};

module.exports = { addEvent };
