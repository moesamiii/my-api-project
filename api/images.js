export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*"); // 👈 add this line
  res.status(200).json({
    image1: "https://my-api-project-sandy.vercel.app/cat.jpeg",
    image2: "https://my-api-project-sandy.vercel.app/dog.jpeg",
  });
}
