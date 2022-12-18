import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import i18n from "i18next";
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  FooterContainer,
  Language,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer,
  Copyright,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: any) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <>
      <FooterSection>
        <Container>
          {/* <Row justify="space-between"> */}
          {/* <Col lg={10} md={10} sm={12} xs={12}>
              <Language>{t("Contact")}</Language>
              <Large to="/">{t("Tell us everything")}</Large>
              <Para>
                {t(`Do you have any question? Feel free to reach out.`)}
              </Para>
              <a href="mailto:stiki@stiki.ac.id">
                <Chat>{t(`Let's Chat`)}</Chat>
              </a>
            </Col> */}
          {/* <Col lg={8} md={8} sm={12} xs={12}>
              <Title>{t("Policy")}</Title>
              <Large to="/" left="true">
                {t("Application Security")}
              </Large>
              <Large left="true" to="/">
                {t("Software Principles")}
              </Large>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <Empty />
              <Large left="true" to="/">
                {t("Support Center")}
              </Large>
              <Large left="true" to="/">
                {t("Customer Support")}
              </Large>
            </Col> */}
          {/* </Row> */}
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              {/* <Empty /> */}
              <Language>{t("STIKI MALANG")}</Language>
              <Para>Sekolah Tinggi Informatika dan Komputer Indonesia</Para>
              <Para>Jl. Tidar 100 Malang, Jawa Timur</Para>
              <Para>Telp: 0341-560823</Para>
              <Para>Fax : 0341-562525</Para>
              <Para>
                Email : <a href="mailto:stiki@stiki.ac.id">stiki@stiki.ac.id</a>
              </Para>
            </Col>
            <Col lg={6} md={8} sm={12} xs={12}>
              <Title>{t("Quick Links")}</Title>
              <Large left="true" to="sakti.stiki.ac.id">
                {t("SAKTI")}
              </Large>
              <Large left="true" to="ebelajar.stiki.ac.id">
                {t("eBelajar")}
              </Large>
              <Large left="true" to="lowongan.stiki.ac.id">
                {t("Career")}
              </Large>
              <Large left="true" to="perpustakaan.stiki.ac.id">
                {t("Library")}
              </Large>
              <Large left="true" to="jurnal.stiki.ac.id">
                {t("Journal")}
              </Large>
            </Col>
            <Col lg={8} md={8} sm={12} xs={12}>
              <Language>{t("Registration Info")}</Language>
              <Para style={{ width: "90%" }}>
                {t("Registration Info Desc")}{" "}
                <a href="http://pmb.stiki.ac.id">http://pmb.stiki.ac.id</a>{" "}
                {t("Registration Info Desc2")}{" "}
                <a href="mailto:pmb@stiki.ac.id">pmb@stiki.ac.id</a>
              </Para>

              <Label htmlFor="select-lang">{t("Language")}</Label>
              <LanguageSwitchContainer>
                <LanguageSwitch onClick={() => handleChange("en")}>
                  <SvgIcon
                    src="united-states.svg"
                    aria-label="homepage"
                    width="30px"
                    height="30px"
                  />
                </LanguageSwitch>
                <LanguageSwitch onClick={() => handleChange("id")}>
                  <SvgIcon
                    src="indonesia.svg"
                    aria-label="homepage"
                    width="30px"
                    height="30px"
                  />
                </LanguageSwitch>
              </LanguageSwitchContainer>
            </Col>
          </Row>
        </Container>
      </FooterSection>
      <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "1.5rem" }}
          >
            <FooterContainer>
              <SocialLink
                href="https://instagram.com/@stikimalang/"
                src="instagram.svg"
              />
              <SocialLink
                href="https://facebook.com/stikimalang/"
                src="facebook.svg"
              />
              <SocialLink
                href="https://www.linkedin.com/school/stiki-malang"
                src="linkedin.svg"
              />
              <SocialLink
                href="https://twitter.com/stikimalang"
                src="twitter.svg"
              />
              <SocialLink
                href="https://www.youtube.com/@STIKIMalangOfficial"
                src="youtube.svg"
              />
              <SocialLink href="mailto:stiki@stiki.ac.id" src="mail.svg" />
            </FooterContainer>
            <Copyright>
              {t("Copyright Ⓒ 2022 Thesis Jihan | All Rights Reserved")}
            </Copyright>
            {/* <NavLink to="/">
              <LogoContainer>
                <SvgIcon
                  src="notes.svg"
                  aria-label="homepage"
                  width="150px"
                  height="100px"
                />
              </LogoContainer>
            </NavLink> */}
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
