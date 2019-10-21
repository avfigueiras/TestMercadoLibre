import React from 'react';
import './styles/StyleResults.css';

const Breadcrumb = () => {
	return (
      <ul className="breadcrumb" typeof="BreadcrumbList" >
          <li property="itemListElement" typeof="ListItem">
              <a property="item" typeof="WebPage" href="/">
                   <span property="name">Home ></span>
              </a>
              <meta property="position" content="1"></meta>
          </li>
        <li property="itemListElement" typeof="ListItem">
              <a property="item" typeof="WebPage" href="/items/search">
                   <span property="name">Result ></span>
              </a>
              <meta property="position" content="2"></meta>
          </li>
          <li property="itemListElement" typeof="ListItem">
              <a property="item" typeof="WebPage" href="/items/:id([A-Z0-9]{12})">
                   <span property="name">Detail ></span>
              </a>
              <meta property="position" content="3"></meta>
          </li>
     </ul>
  );
}

export default Breadcrumb;

