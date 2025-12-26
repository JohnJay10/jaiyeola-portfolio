import { Helmet } from 'react-helmet-async';

const SEO = () => {
  return (
    <Helmet>
      <title>Jaiyeola John | Full Stack Software Engineer</title>
      <meta name="description" content="Full Stack Developer specializing in Laravel, React, and Node.js. Remote-ready with 5+ years experience building scalable web applications." />
      <meta name="keywords" content="Full Stack Developer, React Developer, Laravel Developer, Remote Developer, JavaScript, TypeScript, Node.js" />
      
      <meta property="og:title" content="Jaiyeola John | Full Stack Software Engineer" />
      <meta property="og:description" content="Building digital experiences that matter. Specializing in modern web technologies." />
      <meta property="og:type" content="website" />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Jaiyeola John | Full Stack Developer" />
      <meta name="twitter:description" content="Passionate about creating scalable, efficient, and user-friendly applications." />
      
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
    </Helmet>
  );
};

export default SEO;