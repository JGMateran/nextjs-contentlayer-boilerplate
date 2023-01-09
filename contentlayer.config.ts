import { makeSource } from 'contentlayer/source-files'

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [],
  mdx: {
    esbuildOptions (options) {
      options.target = 'esnext'
      return options
    }
  }
})
