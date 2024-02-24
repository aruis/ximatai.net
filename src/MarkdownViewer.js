import React from 'react';
import Showdown from 'showdown';

const MarkdownViewer = ({ content }) => {
    const converter = new Showdown.Converter();
    const html = converter.makeHtml(content);

    return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default MarkdownViewer;
