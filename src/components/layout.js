import React, {useState, useEffect} from 'react';
import {PropTypes} from 'prop-types';
import  styled, {ThemeProvider} from 'styled-components';
import {Head, Loader} from '@components';
import {GlobalStyle, theme} from '@styles';


const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Layout = ({children, location}) => {
  const isHome = location.pathname === '/';
  const [isLoading, setIsLoading] = useState(isHome);
  const handleExternalLinks = () => {
    const allLinks = Array.from(document.querySelectAll('a'));
    if(allLinks.length > 0) {
      allLinks.forEach(link => {
        if (link.host !== window.location.host){
          link.setAttribute('rel', 'noopener noreferrer')
          link.setAttribute('target', '_blank')
        }
      });
    }
  };

  useEffect(() => {
    if(isLoading) {
      return ;
    }
    if (location.hash) {
      const id = location.hash.substring(1);
      setTimeout(() => {
        const ele = document.getElementById(id);
        if (ele) {
          ele.scrollIntoView();
          ele.focus();
        }
      }, 0)
    }
    handleExternalLinks();
  }, [isLoading]);

  return (
    <>
      <Head />
      <div id ="root">
        <ThemeProvider theme = {theme}>
          <GlobalStyle />
          <a className="skip-to-content" href="#content">
            Skip to Content
          </a>
          {isLoading && isHome ? (
            <Loader finishLoading={() => setIsLoading(false)} />
          ) : (
            <StyledContent>
              {/* <Nav isHome={isHome} />
              <Social isHome={isHome} />
              <Email isHome={isHome} /> */}
              <div id="content">
                {children}
                {/* <Footer /> */}
              </div>
            </StyledContent>
          )}
        </ThemeProvider>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.node.isRequired,
};

export default Layout;

