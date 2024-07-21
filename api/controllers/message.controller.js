import prisma from "../lib/prisma";

export const addMessage = async (req, res) => {
  try {
    res.status(200).json();
  } catch (err) {
    res.status(500).json({ message: "Failed to add message" });
  }
};
