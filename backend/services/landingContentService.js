import LandingContent from '../models/LandingContent.js';

class LandingContentService {
  static async getAllLandingContent() {
    try {
      const content = await LandingContent.findAll();
      return content;
    } catch (error) {
      throw new Error('Failed to fetch landing page content.');
    }
  }

  static async getLandingContentById(id) {
    try {
      const content = await LandingContent.findById(id);
      if (!content) {
        throw new Error('Landing page content not found.');
      }
      return content;
    } catch (error) {
      throw new Error('Failed to fetch landing page content.');
    }
  }

  static async getLandingContentBySectionName(sectionName) {
    try {
      const content = await LandingContent.findBySectionName(sectionName);
      return content;
    } catch (error) {
      throw new Error('Failed to fetch landing page content by section name.');
    }
  }

  static async createLandingContent(contentData) {
    try {
      // Add any necessary business logic/validation here
      // ...

      const content = await LandingContent.create(contentData);
      return content;
    } catch (error) {
      throw new Error('Failed to create landing page content.');
    }
  }

  static async updateLandingContent(id, contentData) {
    try {
      // Add any necessary business logic/validation here
      // ...

      const content = await LandingContent.update(id, contentData);
      if (!content) {
        throw new Error('Landing page content not found.');
      }
      return content;
    } catch (error) {
      throw new Error('Failed to update landing page content.');
    }
  }

  static async deleteLandingContent(id) {
    try {
      // Add any necessary business logic/validation here
      // ...

      const isDeleted = await LandingContent.delete(id);
      if (!isDeleted) {
        throw new Error('Landing page content not found.');
      }
      return true;
    } catch (error) {
      throw new Error('Failed to delete landing page content.');
    }
  }
}

export default LandingContentService;