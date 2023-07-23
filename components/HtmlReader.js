// components/HtmlReader.js
import { useEffect, useState } from 'react';

const HtmlReader = ({filename}) => {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    // Function to fetch the HTML content from the file
    const fetchHtmlContent = async () => {
      try {
        const response = await fetch(filename);
        const html = await response.text();
        setHtmlContent(html);
      } catch (error) {
        console.error('Error fetching HTML content:', error);
      }
    };

    fetchHtmlContent();
  }, []);

  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
};

export default HtmlReader;