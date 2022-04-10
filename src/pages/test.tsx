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
  CardSupportingText,
  Chip,
  ChipList,
  Dialog,
  DialogHeader,
  DialogList,
  Dropdown,
  Header,
  MaterialIcon,
  RegularLayout,
  Search,
  Section,
  Table,
  TextArea,
  Title,
  XScrollContent,
} from "@suankularb-components/react";

// Page
const Test: NextPage = () => {
  const { t } = useTranslation(["test", "common"]);

  return (
    <>
      <Head>
        <title>{t("brand.name", { ns: "common" })}</title>
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
          <div className="relative aspect-[4/1] w-full overflow-hidden rounded-3xl">
            <Image
              src="/images/home/banner.webp"
              layout="fill"
              alt={t("welcome.banner")}
            />
          </div>
        </Section>
        <Section labelledBy="welcome">
          <Header
            icon={<MaterialIcon icon="waving_hand" allowCustomSize />}
            text={t("welcome.title")}
          />
          <p>{t("welcome.desc")}</p>
        </Section>
        <Section labelledBy="Button">
          <Button label={"Jimmy"} type="outlined" className="!bg-teal-300"/>
          <Dropdown name="jimmyDropped" label="Jimmy" options={[{"value": 0, "label": "Jimmy"}, {"value": 1, "label": "JimJim"}]} />
          <TextArea name="testArea" label="Writing The JimJim" onChange={() => {}} />
          <Table>
            <thead>
              <tr>
                <th>Column1</th>
                <th>Column2</th>
                <th>Column3</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Jim Stuff</td>
                <td>Jim Stuff 2</td>
                <td>Jim Stuff 3</td>
              </tr>
              <tr>
                <td>Jim Stuff</td>
                <td>Jim Stuff 2</td>
                <td>Jim Stuff 3</td>
              </tr>
              <tr>
                <td>Jim Stuff</td>
                <td>Jim Stuff 2</td>
                <td>Jim Stuff 3</td>
              </tr>
            </tbody>
          </Table>
          <Search placeholder="JimSearch"/>
          <ChipList>
            <Chip name="JimChip" />
            <Chip name="JimChip 2" />
            <Chip name="JimChip 3" />
          </ChipList>
          <XScrollContent>
            <Card type="stacked">
              <CardHeader title={<h1>fight me.</h1>} />
              <CardSupportingText>
                <p>pog</p>
              </CardSupportingText>
              <CardActions>
                <Button label="Jim Button" type="tonal" />
              </CardActions>
            </Card>
            <Card type="stacked">
              <CardHeader title={<h1>fight me.</h1>} />
              <CardSupportingText>
                <p>pog</p>
              </CardSupportingText>
              <CardActions>
                <Button label="Jim Button" type="tonal" />
              </CardActions>
            </Card>
            <Card type="stacked">
              <CardHeader title={<h1>fight me.</h1>} />
              <CardSupportingText>
                <p>pog</p>
              </CardSupportingText>
              <CardActions>
                <Button label="Jim Button" type="tonal" />
              </CardActions>
            </Card>
            <Card type="stacked">
              <CardHeader title={<h1>fight me.</h1>} />
              <CardSupportingText>
                <p>pog</p>
              </CardSupportingText>
              <CardActions>
                <Button label="Jim Button" type="tonal" />
              </CardActions>
            </Card>
            <Card type="stacked">
              <CardHeader title={<h1>fight me.</h1>} />
              <CardSupportingText>
                <p>pog</p>
              </CardSupportingText>
              <CardActions>
                <Button label="Jim Button" type="tonal" />
              </CardActions>
            </Card>
            <Card type="stacked">
              <CardHeader title={<h1>fight me.</h1>} />
              <CardSupportingText>
                <p>pog</p>
              </CardSupportingText>
              <CardActions>
                <Button label="Jim Button" type="tonal" />
              </CardActions>
            </Card>
            <Card type="stacked">
              <CardHeader title={<h1>fight me.</h1>} />
              <CardSupportingText>
                <p>pog</p>
              </CardSupportingText>
              <CardActions>
                <Button label="Jim Button" type="tonal" />
              </CardActions>
            </Card>
            <Card type="stacked">
              <CardHeader title={<h1>fight me.</h1>} />
              <CardSupportingText>
                <p>pog</p>
              </CardSupportingText>
              <CardActions>
                <Button label="Jim Button" type="tonal" />
              </CardActions>
            </Card>
            <Card type="stacked">
              <CardHeader title={<h1>fight me.</h1>} />
              <CardSupportingText>
                <p>pog</p>
              </CardSupportingText>
              <CardActions>
                <Button label="Jim Button" type="tonal" />
              </CardActions>
            </Card>
          </XScrollContent>
          <MaterialIcon icon="model_training" allowCustomSize className="!text-9xl"/>
        </Section>
      </RegularLayout>

      {/* <Dialog type="regular" title="Jimmy Dialog" label="Dialog" show onClose={() => {}}>
        <DialogList content={[{name: "jim", label: "jimmyDList"}, {name: "jim2", label: "jimmyDList"}, {name: "jim3", label: "jimmyDList"}]} />
      </Dialog> */}
    </>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "test"])),
  },
});

export default Test;