import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (

    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
      {/* <div class="window">
        <div class="fakeMenu">
          <div class="fakeButtons fakeClose"></div>
          <div class="fakeButtons fakeMinimize"></div>
          <div class="fakeButtons fakeZoom"></div>
        </div>
        <div class="fakeScreen">
          <p class="line1">pipeline:</p>
          <p class="command">&nbsp; - dropbox.read:</p>
          <p class="parameter">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; path: contract.pdf</p>
          <p class="command">&nbsp; - workflow.start:</p>
          <p class="parameter">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; name: approval</p>
          <p class="command">&nbsp; - docusign:</p>
          <p class="parameter">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; to: me@email.com</p>
        </div>
      </div> */}

        <span className={styles.message}>AI based process <b>Integration</b> and <b>Automation</b> Platform.</span>
        <br /><br />
        <p className="hero__subtitle">Create and operate business solutions on a cloud native AI Platform - hosted in Germany. </p>
        <br />
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="https://logabit.atlassian.net/wiki/spaces/PA">
            Go to Documentation Wiki
          </Link>
          &nbsp; &nbsp; 
          <Link
            className="button button--primary-light button--lg"
            to="https://pipeforce.io/jetzt-testen/">
            Try Now!
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="Developer Documentation"
      description="Developer Documentation">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
