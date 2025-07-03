import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../cn";
import { Flex } from "../../layout/Flex";
import Widget from "../../layout/Widget";
import { Text } from "../../ui/Text";
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
  onClick?: () => void;
  disabled?: boolean;
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
        `${expanded ? "p-md w-[200px]" : "p-0 w-fit"}`,
        className
      )}
    >
      <Flex direction="column" gap="lg" height="stretch" width="stretch">
        {groups.map((group, g_index) => (
          <Flex key={g_index} direction="column" gap="sm">
            {expanded && (
              <Text variant="caption" color="dimmed">
                {group.label}
              </Text>
            )}
            <Flex direction="column" width={expanded ? "stretch" : "fit"}>
              {group.actions.map((action, a_index) => (
                <Button
                  key={a_index}
                  width={expanded ? "stretch" : "default"}
                  className={
                    expanded ? "w-full h-fit py-md px-lg" : "w-fit p-md h-fit"
                  }
                  variant={action.disabled? "disabled" : "primary"}
                  size={expanded ? "default" : "centeredMd"}
                  onClick={action.onClick}
                  
                >
                  <Flex direction="row" align="center" gap="md">
                    {action.icon}
                    {expanded && (
                      <Text color="default" variant="p" weight="light">
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
