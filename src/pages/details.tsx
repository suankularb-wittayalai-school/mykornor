// Modules
import { GetServerSideProps, NextPage } from "next";
import Image from "next/image";
import Head from "next/head";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React, { useState } from "react";

import { Party, Person, Contact, ShortParty } from "@utils/types";

import { db } from "@utils/firebase-config";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";

// SK Components
import {
  Button,
  Card,
  CardHeader,
  CardList,
  Header,
  ListLayout,
  ListSection,
  MainSection,
  MaterialIcon,
  RegularLayout,
  Section,
  Title,
} from "@suankularb-components/react";

// Page
const Test: NextPage<{ Parties: Party[]; shortParties: ShortParty }> = ({
  Parties,
  shortParties,
}) => {
  console.log(Parties, shortParties);

  const parties: ShortParty[] = [
    {
      groupName: "Members",
      content: [
        {
          id: 1,
          content: { name: "Jimmy_Tembest", position: "Slime" },
        },
        {
          id: 2,
          content: { name: "Best_Tempest", position: "Slimes" },
        },
        {
          id: 3,
          content: { name: "Smart_Tempest", position: "Slimez" },
        },
      ],
    },
  ];

  const party: Party = {
    id: 1,
    name: "Jimmy Party",
    image: "",
    member: [
      {
        id: 1,
        name: "Jimmy",
        description: "He is Jimmy",
        position: "King",
        achievements: ["Haircut", "Tempest"],
        contacts: [
          {
            id: 1,
            type: "Line",
            name: "jimmy",
            value: "jimmy123",
          },
          {
            id: 2,
            type: "Facebook",
            name: "Jimmy_Tempest",
            value: "JimmyT12345",
          },
        ],
      },
      {
        id: 1,
        name: "Dave",
        description: "He is Dave",
        position: "Picture",
        achievements: ["still", "looking"],
        contacts: [
          {
            id: 1,
            type: "Line",
            name: "Dave",
            value: "Dave123",
          },
          {
            id: 2,
            type: "Facebook",
            name: "Davezz",
            value: "Dave12345",
          },
        ],
      },
    ],
    policy: "I will fucking...",
    description: "This is jimmy's club. Jimmy made this club",
  };

  const [content, setContent] = useState(Parties[0].member[0]);
  const [policy, setPolicy] = useState(Parties[0].policy);
  const [mainType, setMainType] = useState<"policy" | "member">("policy");

  return (
    <>
      <Head>
        <title>
          {/* {t("title", { ns: "details" })} - {t("brand.name", { ns: "common" })} */}
        </title>
      </Head>
      <ListLayout
        show={true}
        className="!bg-transparent"
        Title={
          <Title
            name={{ title: "details"}}
            pageIcon={<MaterialIcon icon="home" />}
            backGoesTo="/"
          />
        }
      >
        <ListSection>
          <Section className="!px-4">
            <h1 className="pt-9 !text-3xl font-bold">{Parties[0].name}</h1>
          </Section>
          <CardList
            // listGroups={party.map((details)=> ({
            //   ...details,
            //   groupName: details.groupName
            // }))}
            listGroups={[
              {
                groupName: "",
                content: [
                  {
                    id: 0,
                    content: { name: "นโยบาย" },
                  },
                ],
              },
            ].concat(shortParties)}
            ListItem={({ content, className, onClick, id }) =>
              content.name == "นโยบาย" ? (
                <button
                  className="w-full"
                  onClick={() => {
                    onClick();
                    setPolicy(Parties[0].policy);
                    setMainType("policy");
                  }}
                >
                  <Card
                    type="horizontal"
                    className={className}
                    appearance="tonal"
                  >
                    <CardHeader
                      icon={<MaterialIcon icon="assignment" />}
                      title={<h1>นโยบาย</h1>}
                    />
                  </Card>
                </button>
              ) : (
                <button
                  className="w-full"
                  onClick={() => {
                    onClick();
                    setContent(Parties[0].member[id - 1]);
                    setMainType("member");
                  }}
                >
                  <Card
                    type="horizontal"
                    className={className}
                    appearance="tonal"
                  >
                    <CardHeader title={content.name} label={content.position} />
                  </Card>
                </button>
              )
            }
            onChange={() => {}}
          />
        </ListSection>
        <MainSection>
          {mainType == "policy" ? (
            <>
              <Section className="container-surface">
                <h1 className="pt-4 text-3xl">เกี่ยวกับ</h1>
                <p>{party.description}</p>
              </Section>
              <Section className="container-surface">
                <h1 className="text-3xl">นโยบาย</h1>
                <p>{party.policy}</p>
              </Section>
            </>
          ) : (
            mainType == "member" && (
              <>
                <Section className="container-surface">
                  <h1 className="pt-4 text-3xl">เกี่ยวกับ</h1>
                  <p>{content.description}</p>
                </Section>
                <Section className="container-surface">
                  <h1 className="text-3xl">ผลงาน</h1>
                  <ul className="layout-grid-cols-2">
                    {content.achievements.map((achievements) => (
                      <li>
                        <Card type="horizontal">
                          <CardHeader title={<p>{achievements}</p>} />
                        </Card>
                      </li>
                    ))}
                  </ul>
                </Section>
                <Section className="container-surface">
                  <h1 className="text-3xl">ติดต่อ</h1>
                  <ul className="layout-grid-cols-2">
                    {content.contacts.map((contact) => (
                      <li>
                        <Card type="horizontal">
                          <CardHeader title={<p>{contact.name}</p>} />
                        </Card>
                      </li>
                    ))}
                  </ul>
                </Section>
              </>
            )
          )}
        </MainSection>
      </ListLayout>
    </>
  );
};

// export const getStaticProps = async ({ locale }: { locale: string }) => ({
//   props: {
//     ...(await serverSideTranslations(locale, ["common", "details"])),
//   },
// });

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const partyLists = collection(db, "Party");
  const shortPartyLists = collection(db, "ShortParty");
  const Parties = (await getDocs(partyLists)).docs.map((party) => party.data());
  const shortParties = (await getDocs(shortPartyLists)).docs.map((party) =>
    party.data()
  );

  return {
    props: {
      Parties,
      shortParties,
    },
  };
};
export default Test;
