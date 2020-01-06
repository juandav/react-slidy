import React from 'react'
import Head from 'next/head'
import {MDXProvider} from '@mdx-js/react'

import IndexMDX from './index.mdx'
import CodeBlock from '../doc-components/CodeBlock'

const components = {
  pre: props => <div {...props} />,
  code: CodeBlock
}

export default () => (
  <MDXProvider components={components}>
    <Head>
      <title>
        React Slidy 🍃 - a simple and minimal slider component for React
      </title>
      <meta
        name="description"
        content="A carousel component for React with the basics. It just works. For minimal setup and needs. Focused on performance ⚡"
      />
    </Head>
    <IndexMDX />
    <style jsx global>
      {`
        body {
          background-color: #fff;
          color: #000;
          font-family: system-ui, sans-serif;
          line-height: 1.5;
          margin: 0 auto;
          max-width: 1000px;
          padding: 16px;
        }

        pre {
          overflow: auto;
          max-width: 100%;
        }
      `}
    </style>
  </MDXProvider>
)
