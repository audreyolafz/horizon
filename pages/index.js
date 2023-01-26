import Image from 'next/image'
import skyline from '../public/images/skyline.svg'
import Sparkles from '../components/Sparkle'
import cookieImage from '../public/images/cookies.svg'
import Question from '../components/Question'

export default function Index() {
  return (
    <>
      <header>
        <h6>Hack Club + Girl Scouts present...</h6>
        <h1>Horizon</h1>
        <h3>Mar 25 &middot; 10AM - 5PM &middot; Girl Scouts HQ, NYC</h3>
        <Image alt="Skyline" fill={true} src={skyline} />
      </header>
      <section
        className="section-special-padding"
        style={{
          display: 'flex',
          padding: '4rem 2rem 1rem 2rem',
          marginInline: '2rem'
        }}>
        <div className="cookies">
          <Image alt="Cookie" id="cookie1" src={cookieImage} />
          <Image alt="Cookie" id="cookie2" src={cookieImage} />
        </div>
        <div id="about" style={{ position: 'relative', zIndex: '999' }}>
          <h1>Horizon is a hackathon.</h1>
          <p>
            Horizon is a social coding event where teens come together for a day
            to discover the joy of code, build creative projects and share their
            projects with the world.
          </p>
          <p>
            Hack Club is a worldwide community of high school hackers. We’re
            artists, writers, engineers, tinkerers, campers, filmmakers,
            volunteers. We make things. We help one another. We have fun.
          </p>
          <p>
            Horizon is fully open source, funded by, and run by the Hack Club
            community, as well as the Girl Scouts of NY. Hack Clubbers are
            organizing Horizon in public on the Hack Club Slack and with fully
            transparent finances using Hack Club Bank. Everything from this
            website to Horizon's dinner menu was created by teenagers just like
            yourself, and you're welcome to help out in #horizon on{' '}
            <a
              href="https://hackclub.com/slack/"
              target="_blank"
              rel="noreferrer">
              the Slack
            </a>
            !
          </p>
        </div>
        <div className="cookies">
          <Image alt="Cookie" id="cookie3" src={cookieImage} />
          <Image alt="Cookie" id="cookie4" src={cookieImage} />
          <Image alt="Cookie" id="cookie5" src={cookieImage} />
        </div>
      </section>
      <section>
        <div id="gallery">
          <div style={{ transform: `rotate(3deg)` }}>
            <img alt="Image" src="/images/5.jpg" />
            <p>
              <a
                href="https://assemble.hackclub.com/launch"
                target="_blank"
                rel="noreferrer">
                Assemble
              </a>
              , the first in-person hackathon of its kind since the pandemic.
            </p>
          </div>
          <div style={{ transform: `rotate(-2deg)` }}>
            <img alt="Image" src="https://cloud-lfsmq1wsw-hack-club-bot.vercel.app/1hack_club_assemble_ltnj_02330.jpg" />
            <p>Presenting their projects at Assemble!</p>
          </div>
          <div style={{ transform: `rotate(1deg)` }}>
            <img alt="Image" src="/images/2.jpg" />
            <p>
              Shot from{' '}
              <a
                href="https://epochba.hackclub.com/"
                target="_blank"
                rel="noreferrer">
                Epoch BA
              </a>
              , a satellite hackathon around{' '}
              <a
                href="https://epoch.hackclub.com"
                target="_blank"
                rel="noreferrer">
                Epoch
              </a>
              !
            </p>
          </div>
          <div style={{ transform: `rotate(-3deg)` }}>
            <img alt="Image" src="https://cloud-b29ke7r2j-hack-club-bot.vercel.app/0hack_club_assemble_ltnj_00611.jpg" />
            <p>
              Workshop in action at{' '}
              <a
                href="https://assemble.hackclub.com/launch"
                target="_blank"
                rel="noreferrer">
                Assemble
              </a>
              !
            </p>
          </div>
          <div style={{ transform: `rotate(2.5deg)` }}>
            <img alt="Image" src="https://cloud-eb401ritr-hack-club-bot.vercel.app/0bmc_8978.jpg" />
            <p>
             Hanging out at  
               <a
                href="https://epoch.hackclub.com"
                target="_blank"
                rel="noreferrer">
                Epoch
              </a>
            </p>
          </div>
          <div style={{ transform: `rotate(-1deg)` }}>
            <img alt="Image" src="/images/0.jpg" />
            <p>Dino fun at Assemble!</p>
          </div>
        </div>
      </section>
      <section className="section-special-padding" id="faq-wrapper">
        <div id="faq">
          <div>
            <Question
              summary="Am I eligible to participate in Horizon?"
              answer={
                <p>
                  If you're eighteen or under and identify as female or
                  non-binary, yes, we are so excited to see you for Horizon! If
                  you're over 18 but still in high school, shoot us a mail at{' '}
                  <a href="mailto:horizon@hackclub.com">horizon@hackclub.com</a>
                  .
                </p>
              }
            />
            <Question
              summary="Does participating cost anything?"
              answer={
                <p>
                  Nothing! We’ll have meals, snacks, and beverages onsite at the
                  hackathon, as well as swag and fun mini-events.
                </p>
              }
            />
            <Question
              summary="I'm not that good at coding, can I join?"
              answer={
                <p>
                  This hackathon is for hackers of all skill levels! It's
                  completely beginner-friendly. In fact, we'll have workshops
                  and other events, so join us and let's learn together. If
                  you'd like to start exploring some introductory projects,
                  check out{' '}
                  <a
                    href="https://workshops.hackclub.com/"
                    target="_blank"
                    rel="noreferrer">
                    Hack Club Workshops
                  </a>
                  .
                </p>
              }
            />
            <Question
              summary="What do I need to bring to Horizon?"
              answer={
                <p>
                  Your laptop, chargers, anything for your hack (hardware?), and
                  an open mind.
                </p>
              }
            />
          </div>
          <div>
            <div style={{ display: 'flex', textAlign: 'center' }}>
              <h1
                style={{
                  margin: 'auto',
                  textDecoration: 'underline',
                  textDecorationStyle: 'wavy',
                  transform: 'rotate(2deg)'
                }}>
                <Sparkles
                  style={{
                    alignItems: 'center',
                    margin: 'auto'
                  }}>
                  I have questions...
                </Sparkles>
              </h1>
            </div>
            <Question
              summary="What can I make at Horizon?"
              answer={
                <p>
                  Anything! Apps, art, sites, and hardware projects are all
                  perfect for a hackathon. Check out what{' '}
                  <a
                    href="https://hackclub.com"
                    target="_blank"
                    rel="noreferrer">
                    Hack Clubbers
                  </a>{' '}
                  are{' '}
                  <a
                    href="https://scrapbook.hackclub.com"
                    target="_blank"
                    rel="noreferrer">
                    making every day!
                  </a>
                </p>
              }
            />
            <Question
              summary="My parents are worried! What should I do?"
              answer={
                <p>
                  We're here to help, ask them to reach out to us at{' '}
                  <a href="mailto:horizon@hackclub.com">horizon@hackclub.com</a>{' '}
                  and we'll make sure to answer all their questions. Horizon
                  will be supervised by background checked staff and overseen by
                  24/7 security staff.
                </p>
              }
            />
            <Question
              summary="I have more questions, how can I reach out?"
              answer={
                <p>
                  Contact us! Reach out on #horizon on the{' '}
                  <a
                    href="https://hackclub.com/slack/"
                    target="_blank"
                    rel="noreferrer">
                    Hack Club Slack
                  </a>{' '}
                  or email us at{' '}
                  <a
                    href="mailto:horizon@hackclub.com"
                    target="_blank"
                    rel="noreferrer">
                    horizon@hackclub.com
                  </a>
                  . We're always ready to answer all your questions!
                </p>
              }
            />
          </div>
        </div>
      </section>
      <section
        id="grass-section"
        style={{
          padding: '0 2rem 1rem 2rem'
        }}>
        <h1 style={{ zIndex: 1 }}>
          Come cultivate the craft of hacking with us!
        </h1>
        <figure className="folded" style={{ zIndex: 1 }}>
          <iframe
            className="fold-me-please"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.5022506158507!2d-74.01192858416682!3d40.706958745860106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a1700286efb%3A0x5358bf9fda32dea1!2s40%20Wall%20Street%20-%20The%20Trump%20Building!5e0!3m2!1sen!2sus!4v1674057574341!5m2!1sen!2sus"
            width="100%"
            height="600"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          <span className="folds main">
            <span className="cell main-1"></span>
            <span className="cell main-2"></span>
            <span className="cell main-1"></span>
            <span className="cell main-2"></span>
            <span className="cell main-1"></span>
          </span>

          <span className="folds vertical">
            <span className="cell vertical-1"></span>
            <span className="cell vertical-2"></span>
            <span className="cell vertical-3"></span>
            <span className="cell vertical-4"></span>
            <span className="cell vertical-5"></span>
          </span>

          <span className="folds horizontal">
            <span className="cell horizontal-1"></span>
            <span className="cell horizontal-2"></span>
            <span className="cell horizontal-1"></span>
            <span className="cell horizontal-2"></span>
            <span className="cell horizontal-1"></span>
            <span className="cell horizontal-3"></span>
            <span className="cell horizontal-4"></span>
            <span className="cell horizontal-3"></span>
            <span className="cell horizontal-4"></span>
            <span className="cell horizontal-3"></span>
          </span>
        </figure>
      </section>
    </>
  )
}
