'use strict';

/**
 * topcat service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::topcat.topcat');
