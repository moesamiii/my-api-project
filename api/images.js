export default function handler(req, res) {
  res.status(200).json({
    image1: "https://via.placeholder.com/300x200?text=Image+1",
    image2: "https://via.placeholder.com/300x200?text=Image+2",
  });
}
