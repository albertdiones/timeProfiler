import * as mongoose from "mongoose";


const profileLogSchema = new mongoose.Schema(
  {
    label: { type: String, required: true, default: "unlabeled"},
    time_elapsed: { type: Number, required: true }
  },
  {
    timestamps: true // Automatically adds createdAt and updatedAt timestamps
  }
);

export type profileLog = mongoose.InferSchemaType<typeof profileLogSchema> & mongoose.Document;

export const getModel = 
  (mongoose: {
      model:(name: string, schema: mongoose.Schema) => mongoose.Model<any>
    }) => mongoose.model('profileLog', profileLogSchema);

export const profileLog = getModel(mongoose);
