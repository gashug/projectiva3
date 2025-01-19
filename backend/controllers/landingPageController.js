import LandingContentService from '../services/landingContentService.js';

export const getAllLandingContent = async (req, res) => {
  try {
    const content = await LandingContentService.getAllLandingContent();
    res.status(200).json(content);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getLandingContentById = async (req, res) => {
  try {
    const { id } = req.params;
    const content = await LandingContentService.getLandingContentById(id);
    res.status(200).json(content);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getLandingContentBySectionName = async (req, res) => {
  try {
    const { sectionName } = req.params;
    const content = await LandingContentService.getLandingContentBySectionName(sectionName);
    res.status(200).json(content);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createLandingContent = async (req, res) => {
  try {
    const contentData = req.body;
    const newContent = await LandingContentService.createLandingContent(contentData);
    res.status(201).json(newContent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateLandingContent = async (req, res) => {
  try {
    const { id } = req.params;
    const contentData = req.body;
    const updatedContent = await LandingContentService.updateLandingContent(
      id,
      contentData
    );
    res.status(200).json(updatedContent);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteLandingContent = async (req, res) => {
  try {
    const { id } = req.params;
    await LandingContentService.deleteLandingContent(id);
    res.status(204).send();
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};