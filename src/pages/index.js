import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";

export default function Home() {
  return (
    <Layout
      title="ShopProp app Changelog"
      description="Find all updates and feature releases for the ShopProp mobile application."
    >
      <main style={{ padding: "2rem 2rem", textAlign: "center" }}>
        <img
          src="img/logo.png"
          alt="ShopProp Logo"
          style={{ maxWidth: "200px", marginBottom: "2rem" }}
        />
        <h1>ShopProp - Real Estate, Flipped.</h1>
        <h3>🏡 Biggest Buyer Rebates & Lowest Listing Fees</h3>
        <p style={{ fontSize: "1.25rem" }}>
          Find your dream home or sell for top value — and save more with
          ShopProp.
        </p>
        <Link
          className="button button--primary button--lg"
          to="/intro"
          style={{ margin: "2rem" }}
        >
          Explore Docs & Changelog
        </Link>

        {/* Feature Section */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "5rem",
            marginTop: "2rem",
          }}
        >
          <div style={{ maxWidth: "300px", textAlign: "center" }}>
            <h3>💸 Buyer Rebates</h3>
            <p>
              Get the largest rebates in the industry — helping you get more
              value when buying.
            </p>
          </div>
          <div style={{ maxWidth: "300px", textAlign: "center" }}>
            <h3>🏷️ Low Listing Fees</h3>
            <p>
              Save on seller costs with some of the lowest listing fees
              available.
            </p>
          </div>
          <div style={{ maxWidth: "300px", textAlign: "center" }}>
            <h3>🛠️ Smart Tools</h3>
            <p>
              Use calculators for rebates, listing fees and ROI to make informed
              decisions.
            </p>
          </div>
        </div>



        {/* CTA */}
        <p style={{ marginTop: "3rem", fontSize: "1.1rem" }}>
          Ready to dive in? Learn how ShopProp empowers you to save and succeed.
        </p>
        <Link className="button button--secondary" to="/intro">
          Get Started →
        </Link>
      </main>
    </Layout>
  );
}
