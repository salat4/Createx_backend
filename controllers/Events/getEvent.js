const Events = require("../../models/Events");

const getEvent = async (req, res) => {
  try {
    const { id: _id } = req.params;
    const result = await Events.findById(_id);
    console.log('event try')
    res.status(200).json(result);
  } catch (error) {
        console.log("event error");

    res.status(500).json(error);
  }
};

module.exports = { getEvent };
