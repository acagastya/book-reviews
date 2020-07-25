import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

function About() {
  return (
    <Layout heading="About" slug="about">
      <SEO title="About" />
      <article className="entry" lang="en">
        <div className="entry-content">
          Hi. I am Agastya. And here, I discuss the books I have read.
        </div>
      </article>
    </Layout>
  );
}

export default About;
