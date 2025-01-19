import About from '../models/About.js';

class AboutService {
  static async getAboutContent() {
    try {
      const content = await About.getAboutContent();
      return content;
    } catch (error) {
      throw new Error('Failed to fetch about content.');
    }
  }

  static async updateAboutContent(contentData) {
    try {
      // Add any necessary business logic/validation here
      // ...

      const updatedContent = await About.updateAboutContent(contentData);
      return updatedContent;
    } catch (error) {
      throw new Error('Failed to update about content.');
    }
  }
}

export default AboutService;