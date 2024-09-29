import cloudinary from "cloudinary";

async function removePhoto(public_id) {
  await cloudinary.uploader.destroy(public_id);
}

export default removePhoto;
