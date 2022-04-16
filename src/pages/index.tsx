// Modules
import { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// SK Components
import {
  Button,
  Card,
  CardActions,
  CardHeader,
  CardList,
  CardSupportingText,
  Header,
  LinkButton,
  MaterialIcon,
  RegularLayout,
  Section,
  Title,
} from "@suankularb-components/react";

// Page
const Index: NextPage = () => {
  const { t } = useTranslation(["home", "common"]);

  // Simulated Data
  const parties = [
    { "id": 1, "name": "พรรค Utopia", "image": "/images/home/utopia.jpg" },
    { "id": 2, "name": "พรรคมหาสวน", "image": "/images/home/mahasuan.jpg" },
    { "id": 3, "name": "พรรค Varient", "image": "/images/home/varient.jpg" },
    { "id": 4, "name": "พรรค PDF", "image": "/images/home/PDF.jpg" }
  ];

  return (
    <>
      <Head>
        <title>{t("brand.name", { ns: "common" })}</title>
      </Head>
      <RegularLayout className="!bg-[url('/images/home/landing.jpg')] bg-cover">
        <Section labelledBy="title">
          {/* <h1 className="!text-xl text-white text-center"> */}
          <h1 className="!text-xl text-center">
            {t("title")}
          </h1>
        </Section>
        <Section labelledBy="parties">
          <div className="layout-grid-cols-3 !items-center">
            {parties.map((party) => (
              // The card's size depends on the image size so in actuality, the given image will all have to be a specific size
              <Card type="stacked" className="!h-80">
                <CardHeader title={<h1 className="!font-bold">{party.name}</h1>} />
                <div className="relative w-full h-80">
                  <Image src={party.image} layout="fill" />
                </div>
                <CardActions>
                  <LinkButton label={t("button.details")} type="outlined" url="/details"/>
                  <Button label={t("button.choose")} type="tonal" />
                </CardActions>
              </Card>
            ))}
            
          </div>
        </Section>
        
        {/* <Section labelledBy="test">
          {parties.map((name) => (
            <div>
              <h1>{name.id}</h1>
              <h1>{name.name}</h1>
              <h1>{name.image}</h1>
            </div>

          ))}
        </Section> */}
      </RegularLayout>
    </>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "home"])),
  },
});

export default Index;
