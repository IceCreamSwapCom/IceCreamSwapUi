import { useTranslation } from "@pancakeswap/localization";
import { AutoColumn, ColumnCenter } from "../../components/Column";
import { Spinner, Text, Box, Flex, TooltipText } from "../../components";
import { useTooltip } from "../../hooks/useTooltip";

interface ApproveModalContentProps {
  title: string;
  isMM: boolean;
}

export const ApproveModalContent: React.FC<ApproveModalContentProps> = ({ title, isMM }) => {
  const { t } = useTranslation();
  const { targetRef, tooltip, tooltipVisible } = useTooltip(
    <Text>{t("MermaidSwap AMM includes V3 and V2.")}</Text>,
    { placement: "top" }
  );

  return (
    <Box width="100%">
      <Box mb="16px">
        <ColumnCenter>
          <Spinner />
        </ColumnCenter>
      </Box>
      <AutoColumn gap="12px" justify="center">
        <Text bold textAlign="center">
          {title}
        </Text>
        <Flex>
          <Text fontSize="14px">{t("Swapping thru:")}</Text>
          {isMM ? (
            <Text ml="4px" fontSize="14px">
              {t("MermaidSwap MM")}
            </Text>
          ) : (
            <>
              <TooltipText ml="4px" fontSize="14px" color="textSubtle" ref={targetRef}>
                {t("MermaidSwap AMM")}
              </TooltipText>
              {tooltipVisible && tooltip}
            </>
          )}
        </Flex>
      </AutoColumn>
    </Box>
  );
};
