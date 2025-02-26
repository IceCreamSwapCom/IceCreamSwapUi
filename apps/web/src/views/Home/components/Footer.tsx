import { styled } from 'styled-components'
import {
  Flex,
  Heading,
  Text,
  useMatchBreakpoints,
  Button,
  TwitterIcon,
  TelegramIcon,
  MediumIcon,
} from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import Container from 'components/Layout/Container'
import { useWeb3React } from '@pancakeswap/wagmi'
import SunburstSvg from './SunburstSvg'
import Image from 'next/image'
import GitbookIcon from '../../../../public/images/gitbook.svg'

const BgWrapper = styled.div`
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
`

const StyledSunburst = styled(SunburstSvg)`
  height: 350%;
  width: 350%;

  ${({ theme }) => theme.mediaQueries.xl} {
    height: 400%;
    width: 400%;
  }
`

const Wrapper = styled(Flex)`
  z-index: 1;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`

const FloatingPancakesWrapper = styled(Container)`
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  visibility: hidden;

  ${({ theme }) => theme.mediaQueries.md} {
    visibility: visible;
  }
`

const TopLeftImgWrapper = styled(Flex)`
  position: absolute;
  left: 0;
  top: 0;
`

const BottomRightImgWrapper = styled(Flex)`
  position: absolute;
  right: 0;
  bottom: 0;
`

const topLeftImage = {
  path: '/images/home/flying-pancakes/',
  attributes: [
    { src: '1-bottom', alt: 'Pancake flying on the bottom' },
    { src: '1-left', alt: 'Pancake flying on the left' },
    { src: '1-top', alt: 'Pancake flying on the top' },
  ],
}

const bottomRightImage = {
  path: '/images/home/flying-pancakes/',
  attributes: [
    { src: '2-bottom', alt: 'Pancake flying on the bottom' },
    { src: '2-top', alt: 'Pancake flying on the top' },
    { src: '2-right', alt: 'Pancake flying on the right' },
  ],
}

const Footer = () => {
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const { isTablet, isDesktop, isMobile } = useMatchBreakpoints()

  return (
    <>
      <BgWrapper>
        <Flex alignItems="center" justifyContent="center" width="100%" height="100%">
          <StyledSunburst />
        </Flex>
      </BgWrapper>
      {/* {(isTablet || isDesktop) && ( */}
      {/*   <FloatingPancakesWrapper> */}
      {/*     <TopLeftImgWrapper> */}
      {/*       <CompositeImage {...topLeftImage} maxHeight="256px" /> */}
      {/*     </TopLeftImgWrapper> */}
      {/*     <BottomRightImgWrapper> */}
      {/*       <CompositeImage {...bottomRightImage} maxHeight="256px" /> */}
      {/*     </BottomRightImgWrapper> */}
      {/*   </FloatingPancakesWrapper> */}
      {/* )} */}
      <Wrapper>
        {(isMobile || isTablet) && (
          <Wrapper gap="24px">
            <Heading scale="lg" color="white">
              {t('Join us on social media')}
            </Heading>
            <Text textAlign="center" color="white">
              {t("Don't miss out on the latest news and updates!")}
            </Text>
            <Wrapper gap="12px">
              <Flex style={{ width: '100%' }}>
                <Button
                  as="a"
                  title={t('MermaidSwap Twitter')}
                  href="https://x.com/mermaidswap_xyz"
                  target="_blank"
                  variant="primary"
                  scale="md"
                  style={{ width: '100%' }}
                >
                  <TwitterIcon color="currentColor" mr="8px" /> {t('Twitter')}
                </Button>
              </Flex>
              <Flex style={{ width: '100%' }}>
                <Button
                  as="a"
                  title={t('MermaidSwap Medium')}
                  href="https://medium.com/@mermaidswap.xyz"
                  target="_blank"
                  variant="primary"
                  scale="md"
                  style={{ width: '100%' }}
                >
                  <MediumIcon color="currentColor" mr="8px" /> {t('Medium')}
                </Button>
              </Flex>
              <Flex style={{ width: '100%' }}>
                <Button
                  as="a"
                  title={t('MermaidSwap Telegram')}
                  href="https://t.me/mermaidswapofficial"
                  target="_blank"
                  variant="primary"
                  scale="md"
                  style={{ width: '100%' }}
                >
                  <TelegramIcon color="currentColor" mr="8px" /> {t('Telegram')}
                </Button>
              </Flex>
              <Flex style={{ width: '100%' }}>
                <Button
                  as="a"
                  title={t('MermaidSwap Gitbook')}
                  href="https://mermaidswaps-organization.gitbook.io/mermaidswap"
                  target="_blank"
                  variant="primary"
                  scale="md"
                  style={{ width: '100%' }}
                >
                  <Image
                    src={GitbookIcon.src}
                    alt="Gitbook"
                    width={24}
                    height={24}
                    style={{
                      marginRight: '8px',
                    }}
                  />{' '}
                  {t('Gitbook')}
                </Button>
              </Flex>
            </Wrapper>
            <Wrapper gap="6px" style={{ width: '100%' }}>
              <Text textAlign="center" color="white">
                {t('Audited by')}
              </Text>
              <Button
                as="a"
                href="https://skynet.certik.com/projects/icecreamswap#code-security"
                title={`Certik ${t('link')}`}
                target="_blank"
                variant="tertiary"
                scale="md"
              >
                <Image
                  src="https://www.certik.com/_app/immutable/assets/certik-logotype-h-w.DyNEOYZy.svg"
                  width={128}
                  height={48}
                  alt="Certik"
                />
              </Button>
            </Wrapper>
          </Wrapper>
        )}
        {isDesktop && (
          <Wrapper>
            <Heading mb="24px" scale="xl" color="white">
              {t('Join us on social media')}
            </Heading>
            <Text textAlign="center" color="white" mb="24px">
              {t("Don't miss out on the latest news and updates!")}
            </Text>
            <Wrapper>
              <Flex mt="24px" style={{ gap: '12px' }}>
                <Button
                  as="a"
                  title={t('MermaidSwap Twitter')}
                  href="https://x.com/mermaidswap_xyz"
                  target="_blank"
                  variant="primary"
                  scale="md"
                  mr="8px"
                >
                  <TwitterIcon color="currentColor" mr="8px" /> {t('Twitter')}
                </Button>
                <Button
                  as="a"
                  title={t('MermaidSwap Telegram')}
                  href="https://t.me/mermaidswapofficial"
                  target="_blank"
                  variant="primary"
                  scale="md"
                  mr="8px"
                >
                  <TelegramIcon color="currentColor" mr="8px" /> {t('Telegram')}
                </Button>
                <Button
                  as="a"
                  title={t('MermaidSwap Medium')}
                  href="https://medium.com/@mermaidswap.xyz"
                  target="_blank"
                  variant="primary"
                  scale="md"
                  mr="8px"
                >
                  <MediumIcon color="currentColor" mr="8px" /> {t('Medium')}
                </Button>
                <Button
                  as="a"
                  title={t('MermaidSwap Gitbook')}
                  href="https://mermaidswaps-organization.gitbook.io/mermaidswap"
                  target="_blank"
                  variant="primary"
                  scale="md"
                  mr="8px"
                >
                  <Image
                    src={GitbookIcon.src}
                    alt="Gitbook"
                    width={24}
                    height={24}
                    style={{
                      marginRight: '8px',
                    }}
                  />{' '}
                  {t('Gitbook')}
                </Button>
              </Flex>
              <Flex mt="24px" alignItems={'center'} gap="12px">
                <Text textAlign="center" color="white">
                  {t('Audited by')}
                </Text>
                <Button
                  as="a"
                  href="https://skynet.certik.com/projects/icecreamswap#code-security"
                  title={`Certik ${t('link')}`}
                  target="_blank"
                  variant="tertiary"
                  scale="md"
                >
                  <Image
                    src="https://www.certik.com/_app/immutable/assets/certik-logotype-h-w.DyNEOYZy.svg"
                    width={128}
                    height={48}
                    alt="Certik"
                  />
                </Button>
              </Flex>
            </Wrapper>
          </Wrapper>
        )}
      </Wrapper>
    </>
  )
}

export default Footer
