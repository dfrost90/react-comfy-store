import React from 'react';
import styled from 'styled-components';
import { PageHero } from '../components';
import aboutImg from '../assets/hero-bcg.jpeg';

const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="nice desk" />
        <article>
          <div className="title">
            <h2>our story</h2>
            <div className="underline"></div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              officia soluta rem distinctio enim, placeat dignissimos quia
              reprehenderit similique velit at repudiandae exercitationem
              debitis labore? Quae earum, adipisci voluptatibus voluptatum
              asperiores vel vero architecto quo, reiciendis, rem sed
              repellendus dignissimos. Eius repudiandae itaque quas facere vel
              molestiae, harum esse corrupti quasi culpa ipsa iure vero
              recusandae illo odit exercitationem assumenda porro quisquam!
              Natus, in debitis. Natus, labore!
            </p>
          </div>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
