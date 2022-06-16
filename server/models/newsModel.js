import mongoose from 'mongoose';

const validateEmail = (email) => {
  const matchEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return matchEmail.test(email);
};

const newsSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    body: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    authorEmail: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      validate: [validateEmail, 'Please fill a valid email address'],
      immutable: true,
    },
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
  }
);

export default mongoose.model('News', newsSchema);
