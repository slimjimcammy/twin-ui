import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../cn";
import { Flex } from "../../layout/Flex";
import VerticalNavGroup from "./VerticalNavGroup";
import VerticalNavItem from "./VerticalNavItem";
import VerticalNavFooter from "./VerticalNavFooter";
import VerticalNavHeader from "./VerticalNavHeader";
import Widget from "../../layout/Widget";
import { Text } from "../../ui/Text";
import ButtonConsole from "../button-console/ButtonConsole";
import Button from "../../ui/Button";

const verticalNavVariants = cva("relative", {
  variants: {
    variant: {
      default: "p-2 w-[250px]",
      sm: "p-2 w-[200px]",
      md: "p-2 w-[250px]",
      lg: "p-2 w-[300px]",
      fit: "p-2 w-fit",
    },
    height: {
      default: "h-auto",
      stretch: "h-full",
      fit: "h-fit",
    },
  },
  defaultVariants: {
    variant: "default",
    height: "default",
  },
});

interface Action {
  icon: React.ReactNode;
  label: string;
  variant: "primary" | "secondary" | "tertiary";
}

interface Group {
  label: string;
  actions: Action[];
}

export interface VerticalNavProps
  extends VariantProps<typeof verticalNavVariants> {
  className?: string;
  groups: Group[];
  expanded?: Boolean;
}

export function VerticalNav({
  className,
  variant,
  height,
  groups,
  expanded = false,
}: VerticalNavProps) {
  return (
    <Widget
      variant="sm"
      className={cn(
        verticalNavVariants({ variant, height }),
        `${expanded ? "p-4 w-[250px]" : "p-0 w-fit"}`,
        className
      )}
    >
      <Flex direction="column" gap="lg" height="stretch">
        {groups.map((group, g_index) => (
          <Flex key={g_index} direction="column" gap="sm">
            {expanded && <Text variant="h6">{group.label}</Text>}
            <Flex direction="column" width="fit">
              {group.actions.map((action, a_index) => (
                <Button
                  key={a_index}
                  className={expanded ? "w-full h-fit py-3" : "w-fit p-4 h-fit"}
                  variant="tertiary"
                >
                  <Flex direction="row" align="center" gap="lg">
                    {action.icon}
                    {expanded && (
                      <Text color="default" variant="pXs">
                        {action.label}
                      </Text>
                    )}
                  </Flex>
                </Button>
              ))}
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Widget>
  );
}

// Attach compound components
VerticalNav.Group = VerticalNavGroup;
VerticalNav.Item = VerticalNavItem;
VerticalNav.Footer = VerticalNavFooter;
VerticalNav.Header = VerticalNavHeader;
