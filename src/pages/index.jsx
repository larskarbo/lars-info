import React, { useState } from "react";
// import "./App.scss";
import { Helmet } from 'react-helmet'
import {
  TiSocialLinkedinCircular,
  TiSocialTwitterCircular,
  TiSocialInstagramCircular,
  TiSocialTwitter,
  TiSocialYoutubeCircular,
  TiSocialFacebookCircular,
  TiSocialInstagram,
  TiLink,
  TiSocialGithubCircular,
} from "react-icons/ti";
import { SiTwitch, SiTiktok } from "react-icons/si";
import NetlifyForm from "react-netlify-form";
// import larses from "./larses";
import { graphql } from "gatsby";
import GatsbyImage from "gatsby-image";
// const larses = []

function datediff(first, second) {
  // Take the difference between the dates and divide by milliseconds per day.
  // Round to nearest whole number to deal with DST.
  return Math.round((second - first) / (1000 * 60 * 60 * 24));
}

function App({ data }) {
  const larses = data.allAirtable.edges.map(({ node }) => node.data).sort((a, b) => b.ID - a.ID);
  const [showForm, setShowForm] = useState(false);

  let recents = larses.filter(lars =>
    datediff(new Date(lars.Created), new Date()) < 2
  )
  return (
    <div className="">
      <Helmet>
        <title>LarsList - List over all the Larses!</title>
        <meta name="title" content="LarsList - List over all the Larses!" />
        <meta
          name="description"
          content="With LarsList you'll have all your Lars needs covered. Find, filter and sort all the Larses, and find the Right Lars for your Next Job™️."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://larslist.org/" />
        <meta property="og:title" content="LarsList - List over all the Larses!" />
        <meta
          property="og:description"
          content="With LarsList you'll have all your Lars needs covered. Find, filter and sort all the Larses, and find the Right Lars for your Next Job™️."
        />
        <meta property="og:image" content="https://larslist.org/og.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://larslist.org/" />
        <meta
          property="twitter:title"
          content="LarsList - List over all the Larses!"
        />
        <meta
          property="twitter:description"
          content="With LarsList you'll have all your Lars needs covered. Find, filter and sort all the Larses, and find the Right Lars for your Next Job™️."
        />
        <meta property="twitter:image" content="https://larslist.org/og.png" />
      </Helmet>
      <div
        className="flex flex-col items-center"
      >
        <div
          className="flex flex-row justify-center"
        >
          <svg
            style={{
              width: "100%",
              maxWidth: 252,
            }}
            width="1085"
            height="113"
            viewBox="0 0 1085 113"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M95.405 79.225C96.5417 79.225 97.5233 79.6383 98.35 80.465C99.1767 81.2917 99.59 82.2733 99.59 83.41V106.815C99.59 107.952 99.1767 108.933 98.35 109.76C97.5233 110.587 96.5417 111 95.405 111H4.885C3.74833 111 2.76667 110.587 1.94 109.76C1.11333 108.933 0.7 107.952 0.7 106.815V6.68499C0.7 5.54833 1.11333 4.56666 1.94 3.74C2.76667 2.91333 3.74833 2.49999 4.885 2.49999H38.365C39.5017 2.49999 40.4833 2.91333 41.31 3.74C42.1367 4.56666 42.55 5.54833 42.55 6.68499V79.225H95.405ZM162.769 105.73C161.426 109.243 159.101 111 155.794 111H126.499C125.569 111 124.743 110.69 124.019 110.07C123.399 109.347 123.089 108.52 123.089 107.59L123.244 106.66L157.034 7.61499C157.448 6.27166 158.223 5.08333 159.359 4.04999C160.496 3.01666 162.046 2.49999 164.009 2.49999H207.099C209.063 2.49999 210.613 3.01666 211.749 4.04999C212.886 5.08333 213.661 6.27166 214.074 7.61499L247.864 106.66L248.019 107.59C248.019 108.52 247.658 109.347 246.934 110.07C246.314 110.69 245.539 111 244.609 111H215.314C212.008 111 209.683 109.243 208.339 105.73L204.464 94.88H166.644L162.769 105.73ZM185.554 32.415L174.549 64.655H196.559L185.554 32.415ZM386.839 106.195C387.046 106.608 387.149 107.073 387.149 107.59C387.149 108.52 386.787 109.347 386.064 110.07C385.444 110.69 384.669 111 383.739 111H348.554C347.107 111 345.764 110.638 344.524 109.915C343.387 109.192 342.561 108.262 342.044 107.125L328.404 76.435H315.384V106.815C315.384 107.952 314.971 108.933 314.144 109.76C313.317 110.587 312.336 111 311.199 111H277.719C276.582 111 275.601 110.587 274.774 109.76C273.947 108.933 273.534 107.952 273.534 106.815V6.68499C273.534 5.54833 273.947 4.56666 274.774 3.74C275.601 2.91333 276.582 2.49999 277.719 2.49999H338.014C347.314 2.49999 355.426 3.99833 362.349 6.995C369.376 9.99166 374.749 14.3317 378.469 20.015C382.189 25.6983 384.049 32.3633 384.049 40.01C384.049 54.0633 378.624 64.2417 367.774 70.545L386.839 106.195ZM334.759 47.76C337.032 47.76 338.789 47.0367 340.029 45.59C341.269 44.04 341.889 42.1283 341.889 39.855C341.889 37.5817 341.269 35.6183 340.029 33.965C338.892 32.2083 337.136 31.33 334.759 31.33H315.384V47.76H334.759ZM474.043 41.87C485.41 43.11 494.503 45.125 501.323 47.915C508.247 50.705 513.258 54.3733 516.358 58.92C519.458 63.4667 521.008 69.15 521.008 75.97C521.008 83.41 518.58 89.92 513.723 95.5C508.97 100.977 502.357 105.213 493.883 108.21C485.41 111.103 475.748 112.55 464.898 112.55C452.808 112.55 442.578 111.052 434.208 108.055C425.838 105.058 419.587 101.08 415.453 96.12C411.32 91.0567 409.253 85.5283 409.253 79.535C409.253 78.5017 409.563 77.675 410.183 77.055C410.907 76.435 411.785 76.125 412.818 76.125H444.593C446.763 76.125 448.52 76.7967 449.863 78.14C451.62 79.7933 453.583 80.93 455.753 81.55C457.923 82.0667 460.972 82.325 464.898 82.325C474.715 82.325 479.623 80.8267 479.623 77.83C479.623 76.59 478.952 75.5567 477.608 74.73C476.368 73.8 474.095 73.025 470.788 72.405C467.585 71.6817 462.832 70.9583 456.528 70.235C442.372 68.5817 431.522 65.0683 423.978 59.695C416.435 54.2183 412.663 46.52 412.663 36.6C412.663 29.5733 414.782 23.3733 419.018 18C423.255 12.6267 429.248 8.44166 436.998 5.44499C444.852 2.44833 453.945 0.949994 464.278 0.949994C475.025 0.949994 484.428 2.65499 492.488 6.06499C500.548 9.37166 506.697 13.505 510.933 18.465C515.17 23.425 517.288 28.2817 517.288 33.035C517.288 34.0683 516.927 34.895 516.203 35.515C515.583 36.135 514.705 36.445 513.568 36.445H480.243C478.487 36.445 476.885 35.825 475.438 34.585C474.302 33.5517 472.958 32.725 471.408 32.105C469.858 31.485 467.482 31.175 464.278 31.175C457.355 31.175 453.893 32.6217 453.893 35.515C453.893 37.065 455.237 38.305 457.923 39.235C460.61 40.0617 465.983 40.94 474.043 41.87Z"
              fill="black"
            />
            <path
              d="M656.263 79.225C657.399 79.225 658.381 79.6383 659.208 80.465C660.034 81.2917 660.448 82.2733 660.448 83.41V106.815C660.448 107.952 660.034 108.933 659.208 109.76C658.381 110.587 657.399 111 656.263 111H565.743C564.606 111 563.624 110.587 562.798 109.76C561.971 108.933 561.558 107.952 561.558 106.815V6.68499C561.558 5.54833 561.971 4.56666 562.798 3.74C563.624 2.91333 564.606 2.49999 565.743 2.49999H599.223C600.359 2.49999 601.341 2.91333 602.168 3.74C602.994 4.56666 603.408 5.54833 603.408 6.68499V79.225H656.263ZM767.027 79.225H795.082C796.219 79.225 797.201 79.6383 798.027 80.465C798.854 81.2917 799.267 82.2733 799.267 83.41V106.815C799.267 107.952 798.854 108.933 798.027 109.76C797.201 110.587 796.219 111 795.082 111H696.812C695.676 111 694.694 110.587 693.867 109.76C693.041 108.933 692.627 107.952 692.627 106.815V83.41C692.627 82.2733 693.041 81.2917 693.867 80.465C694.694 79.6383 695.676 79.225 696.812 79.225H725.177V34.275H696.812C695.676 34.275 694.694 33.8617 693.867 33.035C693.041 32.2083 692.627 31.2267 692.627 30.09V6.68499C692.627 5.54833 693.041 4.56666 693.867 3.74C694.694 2.91333 695.676 2.49999 696.812 2.49999H795.082C796.219 2.49999 797.201 2.91333 798.027 3.74C798.854 4.56666 799.267 5.54833 799.267 6.68499V30.09C799.267 31.2267 798.854 32.2083 798.027 33.035C797.201 33.8617 796.219 34.275 795.082 34.275H767.027V79.225ZM894.687 41.87C906.053 43.11 915.147 45.125 921.967 47.915C928.89 50.705 933.902 54.3733 937.002 58.92C940.102 63.4667 941.652 69.15 941.652 75.97C941.652 83.41 939.223 89.92 934.367 95.5C929.613 100.977 923 105.213 914.527 108.21C906.053 111.103 896.392 112.55 885.542 112.55C873.452 112.55 863.222 111.052 854.852 108.055C846.482 105.058 840.23 101.08 836.097 96.12C831.963 91.0567 829.897 85.5283 829.897 79.535C829.897 78.5017 830.207 77.675 830.827 77.055C831.55 76.435 832.428 76.125 833.462 76.125H865.237C867.407 76.125 869.163 76.7967 870.507 78.14C872.263 79.7933 874.227 80.93 876.397 81.55C878.567 82.0667 881.615 82.325 885.542 82.325C895.358 82.325 900.267 80.8267 900.267 77.83C900.267 76.59 899.595 75.5567 898.252 74.73C897.012 73.8 894.738 73.025 891.432 72.405C888.228 71.6817 883.475 70.9583 877.172 70.235C863.015 68.5817 852.165 65.0683 844.622 59.695C837.078 54.2183 833.307 46.52 833.307 36.6C833.307 29.5733 835.425 23.3733 839.662 18C843.898 12.6267 849.892 8.44166 857.642 5.44499C865.495 2.44833 874.588 0.949994 884.922 0.949994C895.668 0.949994 905.072 2.65499 913.132 6.06499C921.192 9.37166 927.34 13.505 931.577 18.465C935.813 23.425 937.932 28.2817 937.932 33.035C937.932 34.0683 937.57 34.895 936.847 35.515C936.227 36.135 935.348 36.445 934.212 36.445H900.887C899.13 36.445 897.528 35.825 896.082 34.585C894.945 33.5517 893.602 32.725 892.052 32.105C890.502 31.485 888.125 31.175 884.922 31.175C877.998 31.175 874.537 32.6217 874.537 35.515C874.537 37.065 875.88 38.305 878.567 39.235C881.253 40.0617 886.627 40.94 894.687 41.87ZM1079.85 2.49999C1080.99 2.49999 1081.97 2.91333 1082.8 3.74C1083.62 4.56666 1084.04 5.54833 1084.04 6.68499V31.64C1084.04 32.7767 1083.62 33.7583 1082.8 34.585C1081.97 35.4117 1080.99 35.825 1079.85 35.825H1046.53V106.815C1046.53 107.952 1046.11 108.933 1045.29 109.76C1044.46 110.587 1043.48 111 1042.34 111H1010.41C1009.27 111 1008.29 110.587 1007.47 109.76C1006.64 108.933 1006.23 107.952 1006.23 106.815V35.825H972.901C971.764 35.825 970.783 35.4117 969.956 34.585C969.129 33.7583 968.716 32.7767 968.716 31.64V6.68499C968.716 5.54833 969.129 4.56666 969.956 3.74C970.783 2.91333 971.764 2.49999 972.901 2.49999H1079.85Z"
              fill="#CE0000"
            />
          </svg>
        </div>
        <div
          className="flex flex-row justify-center text-sm"
          style={{
            marginTop: -25
          }}
        >
          helping you find the best Larses ({larses.length}) on the planet
        </div>
        <div>
          <div
            style={{
              // fontSize: 12,
              border: "2px solid #100700",
              display: "inline-block",
              margin: 30,
              padding: 10,
            }}
          >
            <div>For more goodness follow me:</div>
            <LinkSide icon={<TiSocialInstagram />} href={larses[0].instagram}>
              Instagram (larskarbo)
          </LinkSide>
            <LinkSide icon={<TiSocialTwitter />} href={larses[0].twitter}>
              Twitter (larskarbo)
          </LinkSide>
            {/* <LinkSide icon={<SiTiktok />} href={larses[0].tiktok}>
            TikTok (larskarbo)
          </LinkSide> */}
          </div>
        </div>
        <div>
          <button
            onClick={() => {
              const yes = window.confirm(
                "In order to reduce spam, and keep quality of Larses high, I added a paywall of 5$ to add a new Lars.\n\nDo you want to continue to payment?"
              );
              if (yes) {
                window.location.href = "https://gum.co/AFmKs";
                setShowForm(true);
              }
            }}
            className="rounded p-4 bg-blue-600 text-white"
            style={{ marginTop: 20 }}
          >
            Submit new Lars +
          </button>
        </div>
        {showForm && <a href="https://gum.co/AFmKs">>> Payment {"<<"}</a>}
        {/* {showForm && (
          <NetlifyForm name="newlars">
            {({ loading, error, success }) => (
              <div>
                {loading && <div>Loading...</div>}
                {error && <div>Error. Please try again later.</div>}
                {success && (
                  <div>
                    Thank you for submitting. Will get back to you shortly! If
                    you don't hear anything, ping me (@larskarbo) somewhere.
                  </div>
                )}
                {!loading && !success && (
                  <div
                    style={{
                      display: "block",
                    }}
                  >
                    <p>New rule: Larses can only submit themselves now!</p>
                    <p>Hi Lars, submit yourself here:</p>
                    <p>(or DM me somewhere)</p>
                    <p>
                      <input
                        required
                        type="text"
                        name="name"
                        placeholder="your name. (Lars + last name)"
                      />
                    </p>
                    <p>
                      <input
                        required
                        type="email"
                        name="email"
                        placeholder="email"
                      />
                    </p>
                    <p>
                      <textarea
                        required
                        name="bio"
                        placeholder="bio. must be interesting!"
                      ></textarea>
                    </p>
                    <p>
                      Profile picture:{" "}
                      <input required type="file" name="picture" />
                    </p>
                    <p>
                      <input
                        type="text"
                        name="links"
                        placeholder="optional: linkedin, twitter, etc links"
                      />
                    </p>
                    <p>
                      <button type="submit">Send application</button>
                    </p>
                  </div>
                )}
              </div>
            )}
          </NetlifyForm>
        )} */}
        {recents.length &&
          <>
            <div className="title w-full text-3xl my-14 text-center font-bold">- Recent additions 🔥 -</div>
            <div className="larses flex flex-row flex-wrap justify-center">
              {recents

                // .filter((lars) => )
                .sort((a, b) => b.ID - a.ID)
                .map((lars) => (
                  <Lars lars={lars} />
                ))}
            </div>
          </>
        }
        <div className="title w-full text-3xl my-14 text-center font-bold">All Larses:</div>
        <div className="larses flex flex-row flex-wrap justify-center">
          {larses

            // .filter((lars) => !recents.some(l => l.ID == lars.ID))
            .sort((a, b) => {
              return a.name.includes("Lars Karbø") ? -1 : 1
            })
            .filter((lars) => !recents.some(l => l.ID == lars.ID))
            .map((lars) => (
              <Lars lars={lars} />
            ))}
        </div>
      </div>
    </div>
  );
}

const parseLink = (base, str) => {
  if (str.includes("https")) {
    return str
  } else if (str.includes("@")) {
    return base + str.replace("@", "")
  } else {
    return base + str
  }
}

const Lars = ({ lars }) => {


  return (
    <div className="w-36 mx-6 mb-6">
      <GatsbyImage className="rounded" fixed={lars.img.localFiles[0].childImageSharp?.fixed} alt="" />
      <div
        className=" pt-2 pb-3"
      >
        <div
          className="text-sm font-bold"
        >
          {lars.name}
        </div>
        {lars.name == "Lars Karbø" &&
          <span className={"p-1 px-2 rounded-xl uppercase font-bold  text-xs text-red-400 bg-red-100"} style={{
            fontSize: 10
          }}>
            CREATOR OF LARSLIST
      </span>
        }
        <div className="flex">
          {lars.linkedin && (
            <Link href={lars.linkedin}>
              <TiSocialLinkedinCircular />
            </Link>
          )}
          {lars.twitter && (
            <Link href={lars.twitter}>
              <TiSocialTwitterCircular />
            </Link>
          )}
          {lars.website && (
            <Link href={lars.website}>
              <TiLink />
            </Link>
          )}

          {lars.twitch && (
            <Link href={lars.twitch}>
              <SiTwitch />
            </Link>
          )}
          {lars.github && (
            <Link href={lars.github}>
              <TiSocialGithubCircular />
            </Link>
          )}
          {lars.instagram && (
            <Link href={parseLink("https://www.instagram.com/", lars.instagram)}>
              <TiSocialInstagramCircular />
            </Link>
          )}
          {lars.facebook && (
            <Link href={lars.facebook}>
              <TiSocialFacebookCircular />
            </Link>
          )}
          {lars.youtube && (
            <Link href={lars.youtube}>
              <TiSocialYoutubeCircular />
            </Link>
          )}
        </div>

      </div>
      <div
        style={{
          fontSize: lars.description.length > 300 && 8,
        }}
        className="text-xs"
      >
        {lars.description}
      </div>
    </div>
  )
};

const Link = ({ href, children }) => {
  return (
    <a
      href={href}
      style={{
        color: "black",
        verticalAlign: "middle",
        fontSize: 18,
      }}
    >
      {children}
    </a>
  );
};

const LinkSide = ({ href, children, icon }) => {
  return (
    <div>
      <a
        href={href}

        className="flex text-lg flex-row items-center"
      >
        <span
          className="mr-1"
        >
          {icon}
        </span>
        {children}
      </a>
    </div>
  );
};

export default App;

export const query = graphql`
  {
    allAirtable(filter: { 
      table: { eq: "larses" } 
    }) {
      edges {
        node {
          data {
            name
            description
            image
            email
            bad
            linkedin
            website
            twitter
            twitch
            instagram
            tiktok
            email
            github
            facebook
            ID
            youtube
            Created
            img {
              localFiles {
                childImageSharp{
                  fixed(width: 144, height: 144) {
                    ...GatsbyImageSharpFixed
                  }
  
                }
              }
            }
          }
        }
      }
    }
  }
`;
