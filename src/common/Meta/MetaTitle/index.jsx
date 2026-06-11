import Head from "next/head";
import React from "react";

export const MetaTitle = ({ title, description, keywords }) => {
  const defaultTitle =
    "Family Law Career Masterclass – How Family Lawyers Build Practice | VLS LAW ACADEMY";
  const defaultDescription =
    "A practical live masterclass focused on family law practice in Tamil Nadu — matrimonial disputes, maintenance, divorce, women protection laws, child-related matters, and career pathways.";
  const defaultKeywords =
    "Family law masterclass, matrimonial disputes, divorce law, maintenance cases, domestic violence law, family court practice, Tamil Nadu advocates, VLS Law Academy";

  return (
    <Head>
      <title>{title || defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
    </Head>
  );
};
