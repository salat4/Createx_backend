const Events = require("../../models/Events");

const getEvents = async (req, res) => {
  try {
    const result = await Events.find({});
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { getEvents };
