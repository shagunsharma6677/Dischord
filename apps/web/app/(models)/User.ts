import { Schema, Document,model, models} from "mongoose";

// Define the interface for the user document
interface UserDocument extends Document {
  name: string;
  email: string;
  password: string;
}

// Define the schema for the user collection
const userSchema: Schema<UserDocument> = new Schema({
  name: String,
  email: String,
  password: String,
}, {
  timestamps: true,
});

// Define and export the User model
const UserModel = models?.Users as any || model<UserDocument>("Users", userSchema);

export default UserModel;
