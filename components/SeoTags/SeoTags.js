import Head from 'next/head';

const SeoTags = ({ meta }) => {
  return <Head>
    <title>{meta.title}</title>
    <meta name="description" content={meta.description} />
    <meta name="keywords" content={meta.keywords} />
    <meta name="robots" content={meta.robots ? meta.robots.value : ''} />
  </Head>
};

export default SeoTags;