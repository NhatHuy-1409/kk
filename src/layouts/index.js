import { graphql, StaticQuery } from 'gatsby'
import React from 'react'
import { IntlProvider } from 'react-intl';
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n';

const Layout = ({children,location}) => {
    return (
        <StaticQuery
            query={graphql`
            query LayoutQuery {
                site{
                    siteMetadata {
                        languages {
                          defaultLangKey
                          langs
                        }      
                    }
                }
            }
        `}
            render={data => {
                const url = location.pathname;

                const { langs, defaultLangKey } = data.site.siteMetadata.languages;

                const langKey = getCurrentLangKey(langs, defaultLangKey, url);

                return <IntlProvider
                    locale={langKey}
                >

                    <p>messi</p>
                    {children}

                </IntlProvider>
            }}
        />

    )
}

export default Layout
