// Modules
import { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// SK Components
import {
    Header,
  MaterialIcon,
  RegularLayout,
  Section,
  Title,
} from "@suankularb-components/react";

// Page
const Test: NextPage = () => {
  const { t } = useTranslation(["details", "common"]);

  return (
    <>
      <Head>
        <title>{t("title", { ns: "details" })} - {t("brand.name", { ns: "common" })}</title>
      </Head>
      <RegularLayout  className="!bg-transparent"
        Title={
          <Title
            name={{ title: t("title") }}
            pageIcon={<MaterialIcon icon="home" />}
            backGoesTo="/"
          />
        }
      >
        <Section>
            <h1 className="!text-9xl text-neutral-50">TODO</h1>
        </Section>
      </RegularLayout>
    </>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "details"])),
  },
});

export default Test;