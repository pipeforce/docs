import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Integration',
    image: '/img/app-presentation-01-image-03.png',
    description: (
      <>
        PIPEFORCE comes with connectors, messaging and data pipelines to integrate with any data from any system. <a href="https://logabit.atlassian.net/wiki/spaces/PA/pages/2545614916" target="_blank">More...</a>
      </>
    ),
  },
  {
    title: 'Automation',
    image: '/img/app-presentation-01-image-04.png',
    description: (
      <>
       PIPEFORCE includes triggers, workflows, forms, lists to streamline your automation solutions. <a href="https://logabit.atlassian.net/wiki/spaces/PA/pages/2542796840" target="_blank">More...</a>
      </>
    ),
  },
  {
    title: 'AI',
    image: '/img/app-presentation-01-image-02.png',
    description: (
      <>
        PIPEFORCE comes with a rich AI support to speed-up your automation and integration tasks to a new level.  <a href="https://logabit.atlassian.net/wiki/spaces/PA/pages/3209068546" target="_blank">More...</a>
      </>
    ),
  },
];

function Feature({image, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={image}/>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
