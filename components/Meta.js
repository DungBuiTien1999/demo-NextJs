import Head from "next/head";

export default function Meta({title, description, keywords}) {
  return (
    <Head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel='icon' href='/favicon.ico' />
      <title>{title}</title>
    </Head>
  );
}

Meta.defaultProps = {
    title: 'Web dev News',
    description: 'Get a latest new in web dev',
    keywords: 'web development, programming'
}