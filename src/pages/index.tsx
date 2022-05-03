/* eslint-disable jsx-a11y/anchor-is-valid */
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import { Container } from '../styles/pages/Home';

const Home: NextPage = () => (
  <Container>
    <Head>
      <title>Felipe Pierotti - dev</title>
    </Head>

    <div className="profile">
      <h1>Felipe Pierotti</h1>
      <span>Full-Stack Developer</span>

      <div className="profile-footer">
        <p>
          Born in 2004, in Maringá, Brazil.{' '}
          <strong>I take technology as my heart</strong>, my hole life turns
          around it. Since I met web development, I also realized there are many
          things we can do from it. <br />
          So, my mission is <strong>reveal the whole universe</strong> behind
          the web.
        </p>
        <Link href="mailto:felipe.pierotti@icloud.com">
          <a>
            get in touch <FaArrowRight size={12} />
          </a>
        </Link>
      </div>
    </div>

    <p className="serif dev">dev</p>
  </Container>
);

export default Home;
