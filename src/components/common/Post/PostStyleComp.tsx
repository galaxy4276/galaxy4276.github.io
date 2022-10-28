import styled from '@emotion/styled';

export const PostStyleComp = styled.article`
  * {
    font-family: 'Pretendard', 'JetBrains Mono', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  
  h1 {
    font-size: 1.5rem;
    font-weight: bold;
    padding: 10px 0;
  }

  h2 {
    font-size: 1.3rem;
    font-weight: bold;
    padding: 10px 0;
  }

  h3 {
    font-size: 1.2rem;
    font-weight: bold;
    padding: 10px 0;
  }

  h4, h5, h6 {
    font-weight: bold;
    padding: 2px 0;
  }

  .gatsby-resp-image-wrapper {
    margin: 10px 0;
  }

  p {
    line-height: 1.7;
  }

  a {
    transition: color .2s linear;
    font-weight: bold;
    color: #5DA7DB;
  }

  a:hover {
    color: #3c7aa6;
  }

  pre[class^="language"], pre[class^="language"] span, pre[class^="language"] #text {
    border-radius: 8px;
    font-size: 12px;
    font-family: 'Jetbrains Mono', serif;
  }

  deckgo-highlight-code {
    --deckgo-highlight-code-font-size: .79rem;
    --deckgo-highlight-code-font-family: 'Jetbrains Mono', serif;
  }

  img {
    border-radius: 6px !important;
    box-shadow: 1px 3px 6px 3px rgb(0, 0, 0, 0.05) !important;
  }
  
  li {
    list-style: -moz-ethiopic-numeric;
    margin-left: 30px;
    color: #64748b;
    padding: .2rem .5rem;
  }
`;
