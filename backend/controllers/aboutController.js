import AboutService from '../services/aboutService.js';

export const getAboutContent = async (req, res) => {
  try {
    const content = await AboutService.getAboutContent();
    res.status(200).json(content);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateAboutContent = async (req, res) => {
  try {
    const contentData = req.body;
    const updatedContent = await AboutService.updateAboutContent(contentData);
    res.status(200).json(updatedContent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};