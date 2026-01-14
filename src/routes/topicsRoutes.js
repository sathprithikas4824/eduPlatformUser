import express from 'express';
import * as topicsController from '../controllers/topicsController.js';
import { sanitizeBody } from '../middleware/sanitizeInput.js';

const router = express.Router();

// Specific routes MUST come before generic parameter routes
router.get('/all', topicsController.getAllTopics); // Get all topics
router.get('/single/:topicId', topicsController.getTopicById); // Get single topic by ID
router.get('/name/:name', topicsController.getTopicByName); // Get topic by name
router.get('/module/:moduleId', topicsController.getTopicsByModule); // For standalone categories

// Generic parameter route MUST come last
router.get('/submodule/:submoduleId', topicsController.getTopics); // Changed from /:submoduleId

router.post('/', sanitizeBody(['content']), topicsController.createTopic);
router.put('/:id', sanitizeBody(['content']), topicsController.updateTopic);
router.delete('/:id', topicsController.deleteTopic);

export default router;
