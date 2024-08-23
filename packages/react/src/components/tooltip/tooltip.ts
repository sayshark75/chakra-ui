"use client"

import { Tooltip as ArkTooltip } from "@ark-ui/react/tooltip"
import type { Assign } from "@chakra-ui/utils"
import {
  type HTMLChakraProps,
  type SlotRecipeProps,
  type UnstyledProp,
  createSlotRecipeContext,
} from "../../styled-system"

////////////////////////////////////////////////////////////////////////////////////

const {
  withRootProvider,
  withContext,
  useStyles: useTooltipStyles,
} = createSlotRecipeContext({ key: "tooltip" })

export { useTooltipStyles }

////////////////////////////////////////////////////////////////////////////////////

export interface TooltipRootBaseProps
  extends Assign<ArkTooltip.RootBaseProps, SlotRecipeProps<"tooltip">>,
    UnstyledProp {}

export interface TooltipRootProps extends TooltipRootBaseProps {}

export const TooltipRoot = withRootProvider<TooltipRootProps>(ArkTooltip.Root)

////////////////////////////////////////////////////////////////////////////////////

export interface TooltipTriggerProps
  extends HTMLChakraProps<"button", ArkTooltip.TriggerProps> {}

export const TooltipTrigger = withContext<
  HTMLButtonElement,
  TooltipTriggerProps
>(ArkTooltip.Trigger, "trigger", { forwardAsChild: true })

////////////////////////////////////////////////////////////////////////////////////

export interface TooltipPositionerProps
  extends HTMLChakraProps<"div", ArkTooltip.PositionerProps> {}

export const TooltipPositioner = withContext<
  HTMLDivElement,
  TooltipPositionerProps
>(ArkTooltip.Positioner, "positioner", { forwardAsChild: true })

////////////////////////////////////////////////////////////////////////////////////

export interface TooltipContentProps
  extends HTMLChakraProps<"section", ArkTooltip.ContentProps> {}

export const TooltipContent = withContext<HTMLDivElement, TooltipContentProps>(
  ArkTooltip.Content,
  "content",
  { forwardAsChild: true },
)

////////////////////////////////////////////////////////////////////////////////////

export interface TooltipArrowProps
  extends HTMLChakraProps<"div", ArkTooltip.ArrowProps> {}

export const TooltipArrow = withContext<HTMLDivElement, TooltipArrowProps>(
  ArkTooltip.Arrow,
  "arrow",
  { forwardAsChild: true },
)

////////////////////////////////////////////////////////////////////////////////////

export interface TooltipArrowTipProps
  extends HTMLChakraProps<"div", ArkTooltip.ArrowTipProps> {}

export const TooltipArrowTip = withContext<
  HTMLDivElement,
  TooltipArrowTipProps
>(ArkTooltip.ArrowTip, "arrowTip", { forwardAsChild: true })
