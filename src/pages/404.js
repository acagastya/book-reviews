import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

function NotFoundPage() {
  return (
    <Layout heading="Page not found.">
      <SEO title="404: Not found" />
      <article class="entry" lang="en">
        <div className="entry-content">
          <p>
            Worry not, fellow reader. This page does not exist. But it really is
            no big deal.
          </p>
          <img src="https://media.giphy.com/media/128MHrlrHNwwU0/giphy.gif" alt="Running the hand on the spines of books on a bookshelf" />
        </div>
      </article>
    </Layout>
  );
}

export default NotFoundPage;
