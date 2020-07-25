import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { CategorySVG, TagSVG } from '../components/partials/SVGIcon';
import { siteMetadata } from '../../gatsby-config';
import { Disqus } from 'gatsby-plugin-disqus';

const { repo } = siteMetadata;

function Template({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const { author, lang = 'en', path, tags, title } = frontmatter;
  const { siteUrl } = data.site.siteMetadata;
  const disqusConfig = {
    url: `${siteUrl}${path}`,
    identifier: path,
    title: title,
  };
  return (
    <Layout showHeader={false} heading={title}>
      <SEO blog={true} path={path} tags={tags} title={title} />
      <Article
        author={author}
        disqusConfig={disqusConfig}
        html={html}
        lang={lang}
        tags={tags}
        title={title}
      />
    </Layout>
  );
}

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        author
        lang
        path
        tags
        title
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;

function Article({ author, disqusConfig, html, lang, tags }) {
  return (
    <article lang={lang} className="entry">
      <div
        className="entry-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <Footer author={author} tags={tags} />
      <Disqus config={disqusConfig} />
    </article>
  );
}

function Footer({ author, tags }) {
  return (
    <footer className="entry-footer-container">
      <div className="entry-footer">
        <div className="categories">
          <span className="taxonomyTerm-icon">
            <CategorySVG />
          </span>
          <span className="screen-reader">Author: </span>
          <Link className="author" to={`/${repo}/authors/${author}`}>
            {author}
          </Link>
        </div>
        {tags.length ? (
          <div className="tags">
            <span className="taxonomyTerm-icon">
              <TagSVG />
            </span>
            <span className="screen-reader">Tags: </span>
            {tags.map((tag, index) => {
              return (
                <React.Fragment key={tag}>
                  <Link className="tag" to={`/${repo}/tags/${tag}`}>
                    {tag}
                  </Link>
                  {index < tags.length - 1 ? ', ' : ' '}
                </React.Fragment>
              );
            })}
          </div>
        ) : null}
      </div>
    </footer>
  );
}

export default Template;
