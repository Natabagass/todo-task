import { Helmet } from "react-helmet";

interface SEOProps {
    title: string;
    description: string;
    keywords?: string;
    image: string;
    url: string;
}

export default function Head({
    title,
    description,
    keywords,
    image,
    url,
}: SEOProps) {
    return (
        <Helmet>
            {/* Basic */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content="Campaign Butler" />

            {/* Open Graph */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={url} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            {/* Fallback Favicon */}
            <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-logo.png" />
        </Helmet>
    );
}
