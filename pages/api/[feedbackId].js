import { buildFeedbackFilePath, extractFeedback } from "./feedback";

function handler(req, res) {
  const feedbackId = req.query.feedbackId;
  const filePath = buildFeedbackFilePath();
  const feedbackData = extractFeedback(filePath);

  const selectedFeedback = feedbackData.find(
    (feedback) => feedback.id === feedbackId
  );

  res
    .status(201)
    .json({ feedback: selectedFeedback, message: "Feedback data found" });
}

export default handler;
