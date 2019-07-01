const Clarifai = require("clarifai");

const app = new Clarifai.App({
  apiKey: "5152061081e040988c7f81a2398d7bc4"
});

const handleClarifaiApi = (req, res) => {
  app.models
    .initModel({
      id: Clarifai.FACE_DETECT_MODEL
    })
    .then(generalModel => {
      return generalModel.predict(req.body.imageUrl);
    })
    .then(response => res.status(200).json(response))
    .catch(err => res.status(400).json("unable to work with API"));
};

module.exports = {
  handleClarifaiApi: handleClarifaiApi
};
