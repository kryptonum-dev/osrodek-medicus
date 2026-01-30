import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    // TODO: Update after creating new Sanity project
    projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'gurb517x',
    dataset: process.env.SANITY_STUDIO_DATASET || 'production'
  }
})
