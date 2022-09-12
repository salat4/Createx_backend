const Events = require("../../models/Events");

const getEvents = async (req, res) => {
  const result = await Events.find();
  res.json(result);
};

module.exports = { getEvents };
