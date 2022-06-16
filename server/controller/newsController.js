import Joi from 'joi';
import News from '../models/newsModel.js';

const newsValidatorSchema = Joi.object({
  title: Joi.string().required(),
  body: Joi.string().required(),
  authorEmail: Joi.string().email({ minDomainSegments: 2 }).required(),
});

export const addArtical = async (req, res) => {
  const { error } = newsValidatorSchema.validate(req.body);
  if (error) return res.status(422).send({ error: error.details[0].message });
  try {
    const { title, body, authorEmail } = req.body;
    const result = await News.create({
      title,
      body,
      authorEmail,
    });
    res.status(200).send({ data: result?._doc });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

export const getLastFiveArtical = async (req, res) => {
  try {
    const result = await News.find({}).sort('-createdAt').limit(5);
    res.status(200).send({ data: result });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};
